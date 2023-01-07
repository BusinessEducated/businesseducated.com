FROM node:18-alpine

RUN mkdir /cms

WORKDIR /cms

COPY package.json .
COPY yarn.lock . 
COPY package.json .
COPY yarn.lock .
COPY config/ config/
COPY public/ public/
COPY database/ database/
COPY build/ build/


RUN yarn install --ignore-engines --force

COPY . .

RUN npm rebuild --update-binary
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]