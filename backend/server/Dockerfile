FROM node:18-alpine

RUN mkdir /server

WORKDIR /server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3169

CMD ["yarn","start"]