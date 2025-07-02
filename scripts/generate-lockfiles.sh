#!/bin/bash

echo "🔧 Generando package-lock.json para todos los proyectos..."
echo "======================================================="

# Función para generar lockfile
generate_lockfile() {
    local dir=$1
    echo "📦 Generando lockfile para $dir..."
    
    if [ -d "$dir" ]; then
        cd "$dir"
        
        # Eliminar node_modules y lockfile existentes
        rm -rf node_modules package-lock.json
        
        # Generar nuevo lockfile
        npm install
        
        echo "✅ Lockfile generado para $dir"
        cd ..
    else
        echo "❌ Directorio $dir no encontrado"
    fi
}

# Generar lockfiles para cada proyecto
generate_lockfile "host-app"
generate_lockfile "characters-rick-and-morty"
generate_lockfile "characters-harry-potter"

echo ""
echo "🎉 ¡Todos los lockfiles generados!"
echo "Ahora puedes ejecutar: docker-compose up --build"
