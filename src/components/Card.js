import React from 'react';
import './Card.css';
import dish from '../../src/assets/dish.png';

const Card = () => {
    return (
        <div>
            <div className='card'>
                <img src={dish} alt='food'></img>
                <p className='dish-name'>Spicy seasoned seafood noodles</p>
                <p className='price'>$ 6.99</p>
                <p className='bowls'>8 bowls available</p>
            </div>
        </div>
    );
}

export default Card;
