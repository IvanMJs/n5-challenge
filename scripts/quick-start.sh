#!/bin/bash

echo "🚀 Inicio Rápido - Microfrontend App"
echo "===================================="

# Verificar si Docker está corriendo
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker no está corriendo. Por favor, inicia Docker primero."
    exit 1
fi

echo "🔧 Paso 1: Limpiando Docker..."
docker-compose down --remove-orphans
docker system prune -f

echo "🔧 Paso 2: Generando package-lock.json..."

# Generar lockfiles si no existen
for dir in "host-app" "characters-rick-and-morty" "characters-harry-potter"; do
    if [ -d "$dir" ] && [ ! -f "$dir/package-lock.json" ]; then
        echo "📦 Generando lockfile para $dir..."
        cd "$dir"
        npm install
        cd ..
    fi
done

echo "🔧 Paso 3: Construyendo y ejecutando aplicación..."
docker-compose up --build

echo "🎉 ¡Aplicación iniciada!"
echo ""
echo "🌐 URLs disponibles:"
echo "   • Aplicación Principal: http://localhost:3000"
echo "   • Rick & Morty:         http://localhost:3001"
echo "   • Harry Potter:         http://localhost:3002"
