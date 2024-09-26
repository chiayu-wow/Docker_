FROM node:22-alpine

# Set the working directory to /usr/app
WORKDIR /usr/app

# Copy package.json and install dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .


CMD [ "npm" , "start"]

