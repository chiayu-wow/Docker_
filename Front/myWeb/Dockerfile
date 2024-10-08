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

FROM nginx

EXPOSE 80

COPY --from=build /app/dist /usr/share/nginx/html