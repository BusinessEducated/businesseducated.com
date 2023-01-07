FROM node:18-alpine

RUN mkdir /cms

WORKDIR /cms

COPY package.json .
COPY yarn.lock . 
COPY package.json .
COPY yarn.lock .
COPY config/ config/
COPY database/ database/
COPY src/ src/

RUN yarn install --ignore-engines --force

COPY . .

RUN npm rebuild --update-binary
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]