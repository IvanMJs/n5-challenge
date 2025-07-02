#!/bin/bash

echo "🐳 Starting Microfrontend Application with Docker..."
echo "=================================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    echo "❌ docker-compose is not installed. Please install it first."
    exit 1
fi

echo "🔧 Building and starting all services..."
docker-compose up --build

echo "✅ All services are running!"
echo ""
echo "🌐 Access your applications:"
echo "   • Main App (Host):     http://localhost:3000"
echo "   • Rick & Morty:        http://localhost:3001"
echo "   • Harry Potter:        http://localhost:3002"
echo ""
echo "🛑 To stop all services: Ctrl+C or 'docker-compose down'"
