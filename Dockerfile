FROM node:14.16.0-alpine3.10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
#RUN yarn build

#FROM nginx:1.19.9-alpine
#COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
#EXPOSE 80
CMD ["yarn", "start"]