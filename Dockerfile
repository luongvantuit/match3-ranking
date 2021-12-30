FROM node:latest

WORKDIR /app/api

COPY . .

RUN cat .env.docker > .env

RUN yarn install

CMD [ "yarn","start" ]