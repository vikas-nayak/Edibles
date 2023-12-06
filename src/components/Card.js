import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div>
            <div className='card'>
                <img src={props.dish} alt='food'></img>
                <p className='dish-name'>{props.dishName}</p>
                <p className='price'>{props.price}</p>
                <p className='bowls'>{props.bowls} bowls available</p>
            </div>
        </div>

    );
}

export default Card;
