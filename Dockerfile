# Multi-stage build for all microfrontends
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies for all apps
COPY host-app/package*.json ./host-app/
COPY characters-rick-and-morty/package*.json ./characters-rick-and-morty/
COPY characters-harry-potter/package*.json ./characters-harry-potter/

RUN cd host-app && npm ci --only=production
RUN cd characters-rick-and-morty && npm ci --only=production  
RUN cd characters-harry-potter && npm ci --only=production

# Development stage
FROM base AS dev
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/host-app/node_modules ./host-app/node_modules
COPY --from=deps /app/characters-rick-and-morty/node_modules ./characters-rick-and-morty/node_modules
COPY --from=deps /app/characters-harry-potter/node_modules ./characters-harry-potter/node_modules

# Copy source code
COPY host-app/ ./host-app/
COPY characters-rick-and-morty/ ./characters-rick-and-morty/
COPY characters-harry-potter/ ./characters-harry-potter/

# Copy package.json files
COPY host-app/package*.json ./host-app/
COPY characters-rick-and-morty/package*.json ./characters-rick-and-morty/
COPY characters-harry-potter/package*.json ./characters-harry-potter/

# Install all dependencies for development
RUN cd host-app && npm install
RUN cd characters-rick-and-morty && npm install
RUN cd characters-harry-potter && npm install

EXPOSE 3000 3001 3002

# Default command (can be overridden in docker-compose)
CMD ["npm", "run", "dev"]
