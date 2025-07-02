#!/bin/bash

echo "🐳 Starting Microfrontend Application in PRODUCTION mode..."
echo "=========================================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "🔧 Building and starting production services..."
docker-compose -f docker-compose.prod.yml up --build

echo "✅ Production services are running!"
echo ""
echo "🌐 Access your applications:"
echo "   • Main App (Host):     http://localhost:3000"
echo "   • Rick & Morty:        http://localhost:3001"
echo "   • Harry Potter:        http://localhost:3002"
