export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT ?
  process.env.REACT_APP_ENVIRONMENT : 'develop';

// eslint-disable-next-line max-len
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : 'internal-prod-Back-end-balancer-463094779.us-east-1.elb.amazonaws.com:3500/graphql';
