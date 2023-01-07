FROM node:18-alpine

RUN npm i -g cross-env

RUN mkdir /server

WORKDIR /server

COPY package.json .
COPY src .
COPY server.js .
COPY pm2.js .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3169

CMD ["yarn","start"]