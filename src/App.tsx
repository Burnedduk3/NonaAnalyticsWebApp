import React from 'react';
import './App.scss';
import BePartPage from './Pages/Public/BePart';
import Home from './Pages/Public/Home';
import LifeProject from './Pages/Public/LifeProject';

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <BePartPage />
    <Home />
    <LifeProject />
  </div>
);

export default App;
