import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Weather } from './components/Weather';
import { Maps } from './components/Maps';

function App() {
  return (
    <div>
      <header>Weather</header>
      <Maps />
      <Weather />
    </div>
  );
}

export default App;
