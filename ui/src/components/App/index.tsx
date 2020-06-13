import React from 'react';
import './app.module.scss';

import Fun from '../Fun';
import LightControl from '../LightControl';

function App() {
  return (
    <div className='App'>
      <h1 className='meme-spacing center'>LEGENDARY UMBRELLA</h1>
      <Fun/>
      <LightControl/>
    </div>
  );
}

export default App;
