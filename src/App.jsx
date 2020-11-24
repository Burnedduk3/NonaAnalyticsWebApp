import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import RouterConfig from './navigation/RouterConfig';
// eslint-disable-next-line
import awsExports from './aws-exports';

// eslint-disable-next-line
Amplify.configure(awsExports);

const App = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default withAuthenticator(App);
