FROM node:12.1-alpine

RUN apk add --no-cache git

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . /app
