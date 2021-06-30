import React, { useState } from 'react'
import './CardDish.scss';

function CardDish({menuItem,index,showPopupHandler}) {
    
    // -------------Rendering-------------
    return (       
            <li key={index}>
                <a href="javascript:;" onClick={()=>showPopupHandler(menuItem.strMeal)}>
                    <img src={menuItem.strMealThumb} className="br-10" alt="dishes" />
                    <h4>{menuItem.strMeal}</h4>
                </a>
            </li>        
    )
}

export default CardDish
