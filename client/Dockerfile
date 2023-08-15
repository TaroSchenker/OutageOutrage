#Client Dockerfile

# Use the official Node.js runtime as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ./client/package*.json ./
RUN npm install

# Bundle app source
COPY ./client ./

# Start the client
CMD [ "npm", "run", "dev:host" ]


# FROM node:17-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .    

# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]

#Client Dockerfile
# # Choose the base image
# FROM node:14

# # Set working directory in the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install all dependencies
# RUN npm install
# RUN npm install -g serve

# # Copy all other source code to work directory
# ADD . /usr/src/app

# # Build the client
# RUN npm run build

# # Start the server
# CMD ["serve", "-s", "dist", "-l", "5000"]
