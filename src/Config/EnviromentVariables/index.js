export const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT
  ? process.env.REACT_APP_ENVIRONMENT
  : 'develop';

// eslint-disable-next-line max-len
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : 'http://localhost:3500/graphql';
