#!/bin/bash

echo "🔧 Arreglando dependencias y instalando..."
echo "=========================================="

# Función para limpiar e instalar
fix_project() {
    local dir=$1
    echo "📦 Arreglando $dir..."
    
    if [ -d "$dir" ]; then
        cd "$dir"
        
        # Limpiar completamente
        rm -rf node_modules package-lock.json
        
        # Limpiar caché de npm
        npm cache clean --force
        
        # Instalar dependencias
        npm install
        
        if [ $? -eq 0 ]; then
            echo "✅ $dir instalado correctamente"
        else
            echo "❌ Error instalando $dir"
            exit 1
        fi
        
        cd ..
    else
        echo "❌ Directorio $dir no encontrado"
        exit 1
    fi
}

# Limpiar caché global de npm
echo "🧹 Limpiando caché global de npm..."
npm cache clean --force

# Arreglar cada proyecto
fix_project "host-app"
fix_project "characters-rick-and-morty"
fix_project "characters-harry-potter"

echo ""
echo "🎉 ¡Todas las dependencias instaladas correctamente!"
echo ""
echo "🚀 Ahora puedes ejecutar:"
echo "   docker-compose up --build"
