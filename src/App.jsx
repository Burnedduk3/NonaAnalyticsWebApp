import React from 'react';
import Amplify from 'aws-amplify';
import './App.scss';

import awsExports from './aws-exports';
import Routing from './Components/Routes';

Amplify.configure(awsExports);

const App = () => (
  <Routing />
);

export default App;
