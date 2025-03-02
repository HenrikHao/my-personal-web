terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.22.0"
    }
  }
}

provider "google" {
  # Configuration options
  project = var.project_id
  region  = var.region
}

# 1. Create Cloud Storage Bucket
# Format: resource resource_type resource_name
resource "google_storage_bucket" "website_bucket" {
  name          = var.domain_name
  location      = var.region
  storage_class = "STANDARD"

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }

  uniform_bucket_level_access = true
  force_destroy               = true
}

# 2. Make the bucket public
resource "google_storage_bucket_iam_binding" "public_access" {
  bucket  = google_storage_bucket.website_bucket.name
  role    = "roles/storage.objectViewer"
  members = ["allUsers"]
}

# 3. Upload the React Build Files (After Local Build)
resource "google_storage_bucket_object" "website_files" {
  # fileset is a function that returns a set of files in a directory
  for_each = fileset("../build", "**")
  name     = each.value
  bucket   = google_storage_bucket.website_bucket.name
  source   = "../build/${each.value}"
  content_type = lookup({
    ".html" = "text/html",
    ".js"   = "application/javascript",
    ".css"  = "text/css"
  }, regex("\\.[^.]+$", each.value), "application/octet-stream")
}

# 4. Create SSL Certificate and Map
resource "google_certificate_manager_certificate" "certificate" {
  name        = "website-cert"
  description = "Certificate for ${var.domain_name}"
  scope       = "DEFAULT"
  managed {
    domains = [var.domain_name]
  }
}

# Add these new resources
resource "google_certificate_manager_certificate_map" "certificate_map" {
  name        = "website-cert-map"
  description = "Certificate map for ${var.domain_name}"
}

resource "google_certificate_manager_certificate_map_entry" "certificate_map_entry" {
  name         = "website-cert-map-entry"
  description  = "Certificate map entry for ${var.domain_name}"
  map          = google_certificate_manager_certificate_map.certificate_map.name
  certificates = [google_certificate_manager_certificate.certificate.id]
  hostname     = var.domain_name
}

# 5. Create Load Balancer Components

# 5.1 Backend Bucket
resource "google_compute_backend_bucket" "website_backend" {
  name        = "website-backend"
  bucket_name = google_storage_bucket.website_bucket.name
  enable_cdn  = true
}

# 5.2 URL Map
resource "google_compute_url_map" "website_url_map" {
  name = "website-url-map"
  # Map the default service to the backend bucket
  default_service = google_compute_backend_bucket.website_backend.id
}

# 5.3 HTTPS Proxy
resource "google_compute_target_https_proxy" "website_https_proxy" {
  name            = "website-https-proxy"
  url_map         = google_compute_url_map.website_url_map.id
  certificate_map = "//certificatemanager.googleapis.com/${google_certificate_manager_certificate_map.certificate_map.id}"
}

# 5.4 Global Forwarding Rule (Load Balancer Frontend)
# Set up the frontend that routes incoming requests to the corresponding backend services via HTTPS proxy
resource "google_compute_global_forwarding_rule" "website_forwarding_rule" {
  name                  = "website-forwarding-rule"
  target                = google_compute_target_https_proxy.website_https_proxy.id
  port_range            = "443"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

# 6. Set up Firestore Database for Visit Counter
resource "google_firestore_database" "database" {
  name        = "visit-counter"
  location_id = var.region
  type        = "FIRESTORE_NATIVE"
}

# 7. Create Cloud Run service for the API
resource "google_cloud_run_service" "visit_counter_api" {
  name     = "visit-counter-api"
  location = var.region

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/visit-counter-api:latest"
        resources {
          limits = {
            cpu    = "1"
            memory = "256Mi"
          }
        }
        env {
          name  = "PROJECT_ID"
          value = var.project_id
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# 8. Make the Cloud Run service publicly accessible
resource "google_cloud_run_service_iam_binding" "public_access" {
  location = google_cloud_run_service.visit_counter_api.location
  service  = google_cloud_run_service.visit_counter_api.name
  role     = "roles/run.invoker"
  members  = ["allUsers"]
}

# 9. Create a service account for the Cloud Run service
resource "google_service_account" "visit_counter_sa" {
  account_id   = "visit-counter-sa"
  display_name = "Visit Counter Service Account"
}

# 10. Grant Firestore access to the service account
resource "google_project_iam_binding" "firestore_access" {
  project = var.project_id
  role    = "roles/datastore.user"
  members = [
    "serviceAccount:${google_service_account.visit_counter_sa.email}"
  ]
}
