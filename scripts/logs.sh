#!/bin/bash

echo "📋 Showing logs for all services..."
echo "=================================="

if [ "$1" = "prod" ]; then
    docker-compose -f docker-compose.prod.yml logs -f
else
    docker-compose logs -f
fi
