# 🐳 Docker Setup for Microfrontend Application

Este proyecto incluye una configuración completa de Docker para ejecutar toda la aplicación de microfrontends con un solo comando.

## 🚀 Inicio Rápido

### Opción 1: Usando Docker Compose (Recomendado)
\`\`\`bash
# Clonar el proyecto
git clone <tu-repo>
cd microfrontend-app

# Iniciar toda la aplicación
docker-compose up --build
\`\`\`

### Opción 2: Usando Scripts
\`\`\`bash
# Hacer ejecutables los scripts
chmod +x scripts/*.sh

# Iniciar desarrollo
./scripts/start.sh

# O usar el Makefile
make start
\`\`\`

### Opción 3: Usando Makefile
\`\`\`bash
# Ver todos los comandos disponibles
make help

# Iniciar desarrollo
make start

# Iniciar producción
make prod
\`\`\`

## 📋 Comandos Disponibles

### Desarrollo
\`\`\`bash
# Iniciar todos los servicios
docker-compose up --build

# Iniciar en background
docker-compose up -d --build

# Ver logs en tiempo real
docker-compose logs -f

# Parar todos los servicios
docker-compose down
\`\`\`

### Producción
\`\`\`bash
# Iniciar en modo producción
docker-compose -f docker-compose.prod.yml up --build

# Ver logs de producción
docker-compose -f docker-compose.prod.yml logs -f
\`\`\`

### Utilidades
\`\`\`bash
# Reconstruir contenedores
make rebuild

# Limpiar recursos Docker
make clean

# Ejecutar tests
make test

# Abrir shell en host-app
make shell

# Verificar salud de servicios
make health
\`\`\`

## 🌐 URLs de Acceso

Una vez iniciados los servicios:

- **🏠 Aplicación Principal**: http://localhost:3000
- **🛸 Rick & Morty**: http://localhost:3001
- **⚡ Harry Potter**: http://localhost:3002

## 🔧 Configuración

### Variables de Entorno
Puedes crear archivos `.env` en cada directorio para configuraciones específicas:

\`\`\`bash
# host-app/.env
NODE_ENV=development
PORT=3000

# characters-rick-and-morty/.env
NODE_ENV=development
PORT=3001

# characters-harry-potter/.env
NODE_ENV=development
PORT=3002
\`\`\`

### Volúmenes
Los volúmenes están configurados para:
- **Hot reload**: Los cambios en el código se reflejan inmediatamente
- **Persistencia de node_modules**: Evita reinstalaciones innecesarias
- **Desarrollo eficiente**: Sincronización bidireccional de archivos

## 🏥 Health Checks

Cada servicio incluye health checks que verifican:
- ✅ Disponibilidad del servicio
- ✅ Carga correcta de Module Federation
- ✅ APIs funcionando

## 🐛 Solución de Problemas

### Puerto ocupado
\`\`\`bash
# Ver qué está usando el puerto
lsof -i :3000

# Parar todos los contenedores
docker-compose down
\`\`\`

### Problemas de caché
\`\`\`bash
# Limpiar todo y reconstruir
make clean
make rebuild
\`\`\`

### Logs de debugging
\`\`\`bash
# Ver logs específicos
docker-compose logs host-app
docker-compose logs rick-and-morty
docker-compose logs harry-potter
\`\`\`

### Reiniciar un servicio específico
\`\`\`bash
# Reiniciar solo host-app
docker-compose restart host-app
\`\`\`

## 📊 Monitoreo

### Ver estado de contenedores
\`\`\`bash
docker-compose ps
\`\`\`

### Ver uso de recursos
\`\`\`bash
docker stats
\`\`\`

### Inspeccionar un contenedor
\`\`\`bash
docker-compose exec host-app sh
\`\`\`

## 🚀 Despliegue

### Construcción para producción
\`\`\`bash
# Construir imágenes de producción
docker-compose -f docker-compose.prod.yml build

# Ejecutar en producción
docker-compose -f docker-compose.prod.yml up
\`\`\`

### Docker Hub (opcional)
\`\`\`bash
# Etiquetar imágenes
docker tag microfrontend-app_host-app:latest tu-usuario/host-app:latest

# Subir a Docker Hub
docker push tu-usuario/host-app:latest
\`\`\`

## 🎯 Ventajas de esta Configuración

✅ **Un solo comando**: `docker-compose up` inicia todo  
✅ **Orden correcto**: Los servicios inician en la secuencia adecuada  
✅ **Hot reload**: Cambios en código se reflejan inmediatamente  
✅ **Health checks**: Verificación automática de servicios  
✅ **Networking**: Comunicación entre contenedores configurada  
✅ **Volúmenes**: Persistencia y sincronización de archivos  
✅ **Scripts útiles**: Comandos predefinidos para tareas comunes  
✅ **Producción lista**: Configuración separada para producción  

¡Ahora puedes desarrollar sin preocuparte por la configuración del entorno! 🎉
