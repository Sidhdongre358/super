# ---------- Build Stage ----------
FROM node:20-alpine AS build  
# Use lightweight Node.js for building

WORKDIR /app  
# Set working directory inside container

COPY package*.json ./  
# Copy package.json and package-lock.json
RUN npm ci  
# Install all dependencies (including devDependencies) for Vite build

COPY . . 
# Copy rest of the application source code

RUN npm run build  
# Build the Vite React app (outputs to /app/dist)

# ---------- Production Stage ----------
FROM nginx:alpine  
# Use lightweight Nginx to serve static files

COPY --from=build /app/dist /usr/share/nginx/html  
# Copy build output to Nginx HTML folder

COPY nginx.conf /etc/nginx/conf.d/default.conf 
# Use custom Nginx config for React Router

EXPOSE 80  
# Expose port 80 for HTTP traffic

CMD ["nginx", "-g", "daemon off;"]  
# Start Nginx in foreground