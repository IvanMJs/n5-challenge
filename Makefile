# Makefile for Microfrontend Application

.PHONY: help start stop logs rebuild clean test

# Default target
help:
	@echo "🐳 Microfrontend Application - Docker Commands"
	@echo "=============================================="
	@echo ""
	@echo "Available commands:"
	@echo "  make start     - Start all services in development mode"
	@echo "  make prod      - Start all services in production mode"
	@echo "  make stop      - Stop all services"
	@echo "  make logs      - Show logs for all services"
	@echo "  make rebuild   - Rebuild all containers"
	@echo "  make clean     - Clean up Docker resources"
	@echo "  make test      - Run tests in all containers"
	@echo "  make shell     - Open shell in host-app container"
	@echo ""

# Start development environment
start:
	@echo "🚀 Starting development environment..."
	chmod +x scripts/start.sh
	./scripts/start.sh

# Start production environment
prod:
	@echo "🚀 Starting production environment..."
	chmod +x scripts/start-prod.sh
	./scripts/start-prod.sh

# Stop all services
stop:
	@echo "🛑 Stopping all services..."
	chmod +x scripts/stop.sh
	./scripts/stop.sh

# Show logs
logs:
	@echo "📋 Showing logs..."
	chmod +x scripts/logs.sh
	./scripts/logs.sh

# Show production logs
logs-prod:
	@echo "📋 Showing production logs..."
	chmod +x scripts/logs.sh
	./scripts/logs.sh prod

# Rebuild containers
rebuild:
	@echo "🔄 Rebuilding containers..."
	chmod +x scripts/rebuild.sh
	./scripts/rebuild.sh

# Clean up Docker resources
clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -af --volumes

# Run tests
test:
	@echo "🧪 Running tests..."
	docker-compose exec host-app npm test
	docker-compose exec rick-and-morty npm test
	docker-compose exec harry-potter npm test

# Open shell in host-app
shell:
	@echo "🐚 Opening shell in host-app..."
	docker-compose exec host-app sh

# Health check
health:
	@echo "🏥 Checking service health..."
	@echo "Host App:      $$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "DOWN")"
	@echo "Rick & Morty:  $$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001 || echo "DOWN")"
	@echo "Harry Potter:  $$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3002 || echo "DOWN")"
