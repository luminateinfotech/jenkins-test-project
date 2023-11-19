FROM node:21.1.0-alpine

ADD . /app

WORKDIR /app

RUN npm install

CMD [ "npm", "start" ]