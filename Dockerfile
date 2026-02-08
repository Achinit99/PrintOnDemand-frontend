# Stage 1: Build Stage
# Using Node Alpine for a smaller footprint during the build process
FROM node:18-alpine AS build
WORKDIR /app

# 1. Install dependencies
# Copying package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# 2. Build the application
# Copying source code and generating production-ready static files
COPY . .
RUN npm run build

# Stage 2: Production Stage
# Using Nginx to serve static files with high performance and low resource usage
FROM nginx:stable-alpine

# 3. Nginx Configuration
# Applying custom configuration to handle client-side routing (React/Vite)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. Deploy Artifacts
# Copying only the compiled static assets from the build stage to Nginx web root
# Note: Use /app/dist if you are using Vite, or /app/build for Create React App
COPY --from=build /app/build /usr/share/nginx/html

# Exposing port 80 for web traffic
EXPOSE 80

# Starting Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]