FROM node:14.16.0-alpine3.10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
ENV REACT_APP_BACKEND_URL=internal-prod-Back-end-balancer-463094779.us-east-1.elb.amazonaws.com:3500/graphql
CMD ["yarn","start"]

