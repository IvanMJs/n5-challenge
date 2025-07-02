#!/bin/bash

echo "🔄 Rebuilding all Docker containers..."
echo "====================================="

# Stop all services
docker-compose down

# Remove all containers and images
docker-compose rm -f
docker rmi $(docker images -q microfrontend-app*)

# Rebuild and start
docker-compose up --build

echo "✅ All containers rebuilt and started!"
