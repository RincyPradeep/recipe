import React, {useContext} from 'react'
import {AllMenuContext} from '../AllMenuContext'
import './Popup.scss';

function Popup({closePopup,currentDish}) {
    const allMenu=useContext(AllMenuContext)
    let dishDetails = allMenu.filter((menuItem)=>{
        return menuItem.strMeal === currentDish
    }).map((item)=>{
        return(
            <div className="popup-content-data">
                <div className="popup-image">
                    <img src={item.strMealThumb} alt="" />
                    <h3>{item.strCategory}</h3>
                </div>
                <div className="popup-header">
                    <h2>{item.strMeal}</h2> 
                      
                </div> 
                <div className="popup-ingredients">
                    {item.strIngredient1 && <h3>Ingredients</h3>}
                    
                    <ul>
                    {item.strIngredient1 && <li>{item.strIngredient1}</li> }
                    {item.strIngredient2 && <li>{item.strIngredient2}</li> }
                    {item.strIngredient3 && <li>{item.strIngredient3}</li> }
                    {item.strIngredient4 && <li>{item.strIngredient4}</li> }
                    </ul>
                </div>                           
            </div>
        )
    })


    // ------------Rendering------------------------
    return (
        <div className="popup">
            <div className="popup-content">
                {dishDetails}
                <div className="popup-button">
                    <button>Order Now</button>
                </div>               
                <h5 className="popup-close" onClick={closePopup}>Close</h5>
            </div>           
        </div>
    )
}

export default Popup
