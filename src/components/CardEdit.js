import React from 'react';
import './CardEdit.css';
import dishs from '../../src/assets/dish.png';

const CardEdit = () => {
  return (
    <div>
      <div className='cardE'>
        <img className='dishs' src={dishs} alt='food'></img>
        <p className='dish-namee'>Spicy seasoned seafood noodles</p>
        <p className='pricee'>$ 6.99  •  8 bowls available</p>
        <button className='butt'>✎ Edit dish</button>

      </div>
    </div>
  );
}

export default CardEdit;
