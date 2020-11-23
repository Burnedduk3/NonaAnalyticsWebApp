import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';

const App = () => (
  <BrowserRouter>
    <RouterConfig />
  </BrowserRouter>
);

export default App;
