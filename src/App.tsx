import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import {getClient} from './Config/api';

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <ApolloProvider client={getClient()}>
      <RouterConfig />
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
