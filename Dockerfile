# Stage 1: Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production Stage
FROM nginx:stable-alpine

# Custom Nginx configuration copy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Build 
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]