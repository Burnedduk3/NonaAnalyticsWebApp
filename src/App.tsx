import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';
import {BrowserRouter} from 'react-router-dom';
import Amplify, {API, Auth} from 'aws-amplify';
import awsExports from './aws-exports';

// eslint-disable-next-line
Amplify.configure(awsExports);
Amplify.register(Auth);
Amplify.register(API);


const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default App;
