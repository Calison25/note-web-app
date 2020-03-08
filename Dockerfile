FROM node:alpine

WORKDIR /usr/src/notes_webapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]