import React from 'react';
import './app.module.scss';

import Fun from '../Fun';
import LightControl from '../LightControl';

function App() {
  return (
    <div className='App'>
      <h1 className='meme-spacing center'>LEGENDARY UMBRELLA</h1>
      <Fun/>
      { /* TODO: get state from api */ }
      { /* TODO: populate light controls from each light returned from api */ }
      <LightControl
        lightID='123'
        on={true}
        color='#0'
      />
    </div>
  );
}

export default App;
