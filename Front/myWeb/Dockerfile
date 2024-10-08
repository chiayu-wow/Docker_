# Step 1: Build the React app
FROM node:18-alpine As build 

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

EXPOSE 3000

COPY --from=build /app/dist /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]