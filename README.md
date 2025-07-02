# 🚀 Microfrontend Character Explorer

Una aplicación completa de microfrontends construida con React, TypeScript y Webpack Module Federation.

## 📁 Estructura del Proyecto

\`\`\`
microfrontend-app/
├── host-app/                    # Aplicación principal (Puerto 3000)
├── characters-rick-and-morty/   # Microfrontend Rick & Morty (Puerto 3001)
├── characters-harry-potter/     # Microfrontend Harry Potter (Puerto 3002)
├── docker-compose.yml           # Configuración Docker
└── package.json                 # Scripts principales
\`\`\`

## 🛠️ Instalación y Ejecución

### Opción 1: Instalación Local

\`\`\`bash
# 1. Instalar dependencias en todos los proyectos
npm run install-all

# 2. Ejecutar todos los servicios simultáneamente
npm start
\`\`\`

### Opción 2: Con Docker (Recomendado)

\`\`\`bash
# Ejecutar con Docker
npm run docker:up

# O directamente
docker-compose up --build
\`\`\`

### Opción 3: Ejecución Manual

\`\`\`bash
# Terminal 1 - Rick and Morty (debe iniciarse primero)
cd characters-rick-and-morty
npm install
npm start

# Terminal 2 - Harry Potter (debe iniciarse segundo)
cd characters-harry-potter
npm install
npm start

# Terminal 3 - Host App (debe iniciarse último)
cd host-app
npm install
npm start
\`\`\`

## 🌐 URLs de Acceso

- **🏠 Aplicación Principal**: http://localhost:3000
- **🛸 Rick & Morty**: http://localhost:3001
- **⚡ Harry Potter**: http://localhost:3002

## ✨ Características

- ✅ **Module Federation**: Carga dinámica de microfrontends
- ✅ **APIs Reales**: Rick and Morty API + Harry Potter API
- ✅ **Internacionalización**: Inglés/Español
- ✅ **TypeScript**: Tipado completo
- ✅ **Docker**: Configuración completa
- ✅ **Responsive**: Diseño adaptativo

## 🐳 Docker

\`\`\`bash
# Iniciar todos los servicios
docker-compose up --build

# Parar todos los servicios
docker-compose down

# Ver logs
docker-compose logs -f
\`\`\`

## 🔧 Desarrollo

Cada microfrontend puede desarrollarse independientemente:

\`\`\`bash
# Desarrollar solo Rick & Morty
cd characters-rick-and-morty
npm start

# Desarrollar solo Harry Potter
cd characters-harry-potter
npm start

# Desarrollar solo Host App
cd host-app
npm start
\`\`\`

## 📦 Scripts Disponibles

\`\`\`bash
npm run install-all    # Instalar todas las dependencias
npm start             # Ejecutar todos los servicios
npm run build         # Construir todos los proyectos
npm run docker:up     # Ejecutar con Docker
npm run docker:down   # Parar Docker
\`\`\`

## 🎯 Orden de Inicio

**IMPORTANTE**: Los servicios deben iniciarse en este orden:

1. **Rick & Morty** (Puerto 3001)
2. **Harry Potter** (Puerto 3002)
3. **Host App** (Puerto 3000)

## 🚀 Despliegue

Para producción, cada microfrontend puede desplegarse independientemente:

\`\`\`bash
# Construir para producción
npm run build

# Cada carpeta tendrá su carpeta dist/
\`\`\`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

MIT License - ver el archivo LICENSE para más detalles.
