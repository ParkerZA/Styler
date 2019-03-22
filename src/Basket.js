import React from 'react';
import Slide from './Slide';

const Basket = ({ basket }) => {
    console.log(basket);
    const i = basket.map((item, index) => 
        <Slide 
            source={item.SOURCE} 
            key={index}/>  
    )


    return (
        <div>
            {i}

        </div>

    )
        
    
}

export default Basket;