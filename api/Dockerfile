FROM node:16
WORKDIR /usr/api 
COPY ./package*.json ./
RUN npm install 

EXPOSE 3010 
CMD ["npm", "run", "watch"]