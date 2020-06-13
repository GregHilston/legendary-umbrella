import React from 'react';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import './fun.scss';

function Fun() {
    const imgs = [img1, img2, img3];
    const idx = Math.floor(Math.random() * imgs.length);

  return (
    <div>
      <img className='img-thumbnail fun-img center' src={imgs[idx]} alt='fun stuff'/>
    </div>
  );
}

export default Fun;
