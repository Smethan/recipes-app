FROM node:16
WORKDIR /usr/app
COPY ./src /usr/app
COPY ./public /usr/app
COPY ./package.json /usr/app
RUN npm install 

EXPOSE 3010 
CMD ["node", "index.js"]