output "load_balancer_ip" {
  value       = google_compute_global_forwarding_rule.website_forwarding_rule.ip_address
  description = "IP address of the load balancer - use this to create an A record in Namesilo"
}

output "bucket_url" {
  value       = google_storage_bucket.website_bucket.url
  description = "The base URL of the bucket"
}

output "visit_counter_api_url" {
  value       = google_cloud_run_service.visit_counter_api.status[0].url
  description = "The URL of the visit counter API"
}
