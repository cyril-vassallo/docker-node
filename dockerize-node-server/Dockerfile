FROM alpine:3.12

RUN apk update && apk add nodejs npm vim

WORKDIR /app

ENV PORT 80
ENV HOST 0.0.0.0

COPY package.json /app/package.json

RUN npm install

COPY . /app

CMD ["node", "src/server.js"]
