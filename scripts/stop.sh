#!/bin/bash

echo "🛑 Stopping all Microfrontend services..."

# Stop development services
docker-compose down

# Stop production services (if running)
docker-compose -f docker-compose.prod.yml down

# Clean up unused containers and images
echo "🧹 Cleaning up unused Docker resources..."
docker system prune -f

echo "✅ All services stopped and cleaned up!"
