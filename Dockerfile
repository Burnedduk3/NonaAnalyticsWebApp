FROM node:14.16.0-alpine3.10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
ENV REACT_APP_BACKEND_URL="http://internal-prod-Back-end-balancer-463094779.us-east-1.elb.amazonaws.com:3500/graphql"
ENV REACT_APP_REGION="us-east-1"
ENV REACT_APP_USER_POOL_ID="us-east-1_SqEmScTyR"
ENV REACT_APP_CLIENT_ID="14mu9sgv23ju5aq9f00jm1dq29"
RUN yarn build
# Install serve command for yarn package manager
RUN yarn global add serve

# Navigate to build folder
WORKDIR /usr/src/app/build

# Start the application
CMD serve -p 3000 -s .

