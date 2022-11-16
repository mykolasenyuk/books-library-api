FROM node:13-alpine

ENV DB_HOST=""

RUN  mkdir -p /home/app
WORKDIR /home/app

COPY . /home/app
RUN npm i -G yarn 
RUN yarn


CMD ["node", "bin/server.js"]