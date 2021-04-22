// eslint-disable-next-line max-len
import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { BACKEND_URL } from '../EnviromentVariables';

let client: ApolloClient<any> | null = null;

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token');
  if (!token) {
    operation.setContext({
      headers: {
        // eslint-disable-next-line max-len
        authorization: '',
      },
    });
    return forward(operation);
  }
  operation.setContext({
    headers: {
      // eslint-disable-next-line max-len
      authorization: token,
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({ uri: BACKEND_URL });

export const getClient = () => {
  if (client === null) {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    });
    return client;
  } else {
    return client;
  }
};
