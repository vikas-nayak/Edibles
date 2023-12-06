import React from 'react';
import './CardEdit.css';

const CardEdit = (props) => {
  return (
    <div>
      <div className='cardE'>
        <img className='dishs' src={props.dishs} alt='food'></img>
        <p className='dish-namee'>{props.dishName}</p>
        <p className='pricee'>{props.price}  •  {props.bowls} bowls available</p>
        <button className='butt'>✎ Edit dish</button>
      </div>
    </div>
  );
}

export default CardEdit;
