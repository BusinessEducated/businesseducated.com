FROM node:18-alpine

RUN mkdir /cms

WORKDIR /cms

COPY package.json .
COPY yarn.lock . 


RUN yarn install --ignore-engines --force

COPY . .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]