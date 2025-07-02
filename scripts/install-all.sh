#!/bin/bash

echo "📦 Instalando dependencias en todos los proyectos..."
echo "=================================================="

# Verificar que estamos en la carpeta correcta
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ No se encontró docker-compose.yml. Asegúrate de estar en la carpeta raíz del proyecto."
    exit 1
fi

# Instalar en host-app
echo "🏠 Instalando host-app..."
cd host-app
rm -rf node_modules package-lock.json
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando host-app"
    exit 1
fi
cd ..

# Instalar en characters-rick-and-morty
echo "🛸 Instalando characters-rick-and-morty..."
cd characters-rick-and-morty
rm -rf node_modules package-lock.json
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando characters-rick-and-morty"
    exit 1
fi
cd ..

# Instalar en characters-harry-potter
echo "⚡ Instalando characters-harry-potter..."
cd characters-harry-potter
rm -rf node_modules package-lock.json
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando characters-harry-potter"
    exit 1
fi
cd ..

echo ""
echo "✅ ¡Todas las instalaciones completadas!"
echo ""
echo "🚀 Ejecuta ahora:"
echo "   docker-compose up --build"
