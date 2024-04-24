FROM node:20.10-alpine3.19

# RUN mkdir -p /app

WORKDIR /src

COPY package*.json ./

RUN npm install @angular/cli@16.2.14 -g
RUN npm install

COPY . .

EXPOSE 4202

CMD ["ng", "serve", "--port", "4202", "--host", "0.0.0.0"] 

