FROM node:16
WORKDIR /usr/api 
COPY ./ /usr/api
RUN npm install 

EXPOSE 3010 
CMD ["node", "index.js"]