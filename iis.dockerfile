## DEVELOPER ENVIROMENT
FROM node:12-alpine3.14 as node
LABEL author="Dany Paredes"
WORKDIR /usr/share/nginx/html
COPY /dist/angular-and-states .
## STAGE TWO
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html



