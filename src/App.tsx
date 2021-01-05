import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';

const App: React.FC = (): JSX.Element => (
  <div className="App">
    <RouterConfig />
  </div>
);

export default App;
