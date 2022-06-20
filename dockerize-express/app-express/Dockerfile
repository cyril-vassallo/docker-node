#This script is only executed when docker "build command" is launched

#Upload or use local very light Linux image as base image
FROM alpine:3.12

#Install from apk all need environement applications and packages
RUN apk update && apk add nodejs npm vim

# Create app working directory
WORKDIR /usr/www/app

#Env that you can use inside container
ENV PORT 8080
ENV HOST 0.0.0.0

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source to working dir
COPY . .

#This port can be expose to the machine using the container
EXPOSE 8080
