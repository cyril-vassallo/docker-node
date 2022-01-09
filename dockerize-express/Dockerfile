#This script is only executed when docker "build command" luanched

#Upload or use local image as base image
FROM alpine:3.12

#Install from apk all need environement application 
RUN apk update && apk add nodejs npm vim

# Create app working directory
WORKDIR /usr/www/app

#Env that you can use inside container
ENV PORT 8080
ENV HOST 0.0.0.0

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source to working dir
COPY . .

#This port can be expose to the machine using the container
EXPOSE 8080

#give instruction to execute when ce container start
CMD [ "npm", "start" ]