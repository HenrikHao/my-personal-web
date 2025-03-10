output "load_balancer_ip" {
  value       = google_compute_global_forwarding_rule.website_forwarding_rule.ip_address
  description = "IP address of the load balancer - use this to create an A record in Namesilo"
}

output "bucket_url" {
  value       = google_storage_bucket.website_bucket.url
  description = "The base URL of the bucket"
}

output "bucket_name" {
  value       = "gs://${google_storage_bucket.website_bucket.name}"
  description = "The name of the bucket"
}
