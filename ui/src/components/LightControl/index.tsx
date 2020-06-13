import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import './light-control.scss';


function LightControl() {
  const [color, setColor] = useState('');

  const handleColorChangeComplete = (c : any) => {
    setColor(c.hex);
  };

  return (
    <div className="light-control">
      <div className="light-name">Light 1</div>

      {/* on - off */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input type="radio" id="light-on" checked/> On
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options"/> Off
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
