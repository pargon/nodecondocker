FROM node:16

WORKDIR /home/node/myapp_en_container

COPY . . 

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]