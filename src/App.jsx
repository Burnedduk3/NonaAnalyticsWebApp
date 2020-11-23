import React from 'react';
import Amplify from 'aws-amplify';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import awsExports from './aws-exports';
import RouterConfig from './navigation/RouterConfig';

Amplify.configure(awsExports);

const App = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default App;
