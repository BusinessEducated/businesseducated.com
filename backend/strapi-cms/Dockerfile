FROM node:18-alpine

RUN mkdir /cms

WORKDIR /cms

COPY package.json .
COPY yarn.lock .

RUN npm i --ignore-engines

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn","serve", "--", "-H","0.0.0.0"]