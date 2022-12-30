FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install --ignore-engines --force

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn","serve", "--", "-H","0.0.0.0"]