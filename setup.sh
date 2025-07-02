#!/bin/bash

echo "🚀 Configurando Microfrontend App..."
echo "=================================="

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instala npm primero."
    exit 1
fi

echo "✅ Node.js y npm detectados"

# Limpiar instalaciones previas
echo "🧹 Limpiando instalaciones previas..."
rm -rf node_modules
rm -rf host-app/node_modules
rm -rf characters-rick-and-morty/node_modules
rm -rf characters-harry-potter/node_modules
rm -rf package-lock.json
rm -rf host-app/package-lock.json
rm -rf characters-rick-and-morty/package-lock.json
rm -rf characters-harry-potter/package-lock.json

# Instalar dependencias del proyecto raíz
echo "📦 Instalando dependencias del proyecto raíz..."
npm install

# Instalar dependencias de cada microfrontend
echo "📦 Instalando dependencias de host-app..."
cd host-app && npm install && cd ..

echo "📦 Instalando dependencias de characters-rick-and-morty..."
cd characters-rick-and-morty && npm install && cd ..

echo "📦 Instalando dependencias de characters-harry-potter..."
cd characters-harry-potter && npm install && cd ..

echo ""
echo "🎉 ¡Instalación completada!"
echo ""
echo "🚀 Para ejecutar la aplicación:"
echo "   npm start"
echo ""
echo "🐳 O con Docker:"
echo "   docker-compose up --build"
echo ""
echo "🌐 URLs disponibles:"
echo "   • Aplicación Principal: http://localhost:3000"
   • Rick & Morty:         http://localhost:3001"
echo "   • Harry Potter:         http://localhost:3002"
