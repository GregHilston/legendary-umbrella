# Build stage
FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
RUN npm run build

# Runtime image
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

