FROM node:10

VOLUME ./src:/app/src

ADD ./ /app

WORKDIR /app

RUN npm install

CMD ["npm", "run", "start"]