import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';

import './light-control.scss';

interface LightControlProps {
  lightID: string
  color: string
  on: boolean
}

const LightControl = ({ lightID, color, on}: LightControlProps) => {
  const [curColor, setColor] = useState(color);
  const [lightOn, setLightOn] = useState(on);

  const handleColorChangeComplete = (c : any) => {
    setColor(c.hex);
  };

  const handleLightOff = () => {
    setLightOn(false);
  };

  const handleLightOn = () => {
    setLightOn(true);
  };

  useEffect(() => {
    console.log(curColor, lightOn)
    // TODO: make api call
  }, [curColor, lightOn])


  return (
    <div className="light-control">
      <div className="light-name" style={{color: '#E0FF4F'}}>Light {lightID}</div>

      {/* on - off */}
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={(lightOn ? 'active ' : '') + 'btn btn-secondary'}>
          <input type="radio" onClick={handleLightOn}/> On
        </label>
        <label className={(lightOn ? '' : 'active ') + 'btn btn-secondary'}>
          <input type="radio" onClick={handleLightOff}/> Off
        </label>
      </div>

      {/* color */}
      <ChromePicker
        color={curColor}
        onChangeComplete={handleColorChangeComplete}
        disableAlpha={true}
      />
    </div>
  );
}

export default LightControl;
