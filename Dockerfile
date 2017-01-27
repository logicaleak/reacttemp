FROM node:argon

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN rm -r node_modules

RUN npm install

RUN npm install webpack -g 

RUN webpack --config webpack.config.prod.js


CMD ["node", "server.js", "8080"]  

EXPOSE 8080