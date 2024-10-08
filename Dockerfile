FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev", "--host" ]