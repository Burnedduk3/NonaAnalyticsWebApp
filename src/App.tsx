import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default App;
