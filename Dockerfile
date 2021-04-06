FROM node:14.16.0-alpine3.10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
ENV REACT_APP_BACKEND_URL=internal-prod-Back-end-balancer-463094779.us-east-1.elb.amazonaws.com:3500/graphql
RUN yarn build
# Install serve command for yarn package manager
RUN yarn global add serve

# Navigate to build folder
WORKDIR /usr/src/app/build

# Start the application
CMD serve -p 3000 -s .

