import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import './light-control.scss';


function LightControl() {
  // TODO: initialize to current values
  const [color, setColor] = useState('');
  const [lightState, setLightState] = useState(0);

  const handleColorChangeComplete = (c : any) => {
    setColor(c.hex);
  };

  const handleLightOff = () => {
    setLightState(0);
  };

  const handleLightOn = () => {
    setLightState(1);
  };

  return (
    <div className="light-control">
      <div className="light-name">Light 1</div>

      {/* on - off */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={(lightState ? 'active ' : '') + 'btn btn-secondary'}>
          <input type="radio" onClick={handleLightOn}/> On
        </label>
        <label className={(lightState ? '' : 'active ') + 'btn btn-secondary'}>
          <input type="radio" onClick={handleLightOff}/> Off
        </label>
      </div>

      {/* color */}
      <ChromePicker
        color={color}
        onChangeComplete={handleColorChangeComplete}
        disableAlpha={true}
      />
    </div>
  );
}

export default LightControl;
