import {ApolloClient, InMemoryCache} from '@apollo/client';
import {BACKEND_URL} from '../EnviromentVariables';

let client: ApolloClient<any> | null = null;

export const getClient= () => {
  if (client === null) {
    client = new ApolloClient({
      uri: BACKEND_URL,
      cache: new InMemoryCache(),
    });
    return client;
  } else {
    return client;
  }
};
