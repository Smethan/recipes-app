FROM node:16
WORKDIR /usr/app
COPY ./package*.json /usr/app
RUN npm install 

EXPOSE 3000 
CMD ["npm", "start"]