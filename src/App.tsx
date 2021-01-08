import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';
import {BrowserRouter} from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

// eslint-disable-next-line
Amplify.configure(awsExports);

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default App;
