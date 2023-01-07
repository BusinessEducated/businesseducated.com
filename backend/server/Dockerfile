FROM node:18-alpine

RUN npm i -g cross-env

RUN mkdir /server

WORKDIR /server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn start

EXPOSE 3169

CMD ["yarn","start"]