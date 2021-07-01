import React, { useContext, useState } from 'react'
import CardDish from '../CardDish/CardDish';
import Popup from '../Popup/Popup';
import {AllMenuContext} from '../AllMenuContext';
import './SpecialDishes.scss'
import AddToCart from '../AddToCart/AddToCart';

function SpecialDishes() {
    let [showPopup, setShowPopup] = useState(false)
    let [currentDish,setCurrentDish] = useState("");
    let [addToCartItem,setAddToCartItem] = useState([])
    let maxSpecialDishes = 8;
    

    const allMenu=useContext(AllMenuContext)
    console.log("Global:",allMenu);

    // show the popup
    const showPopupHandler = (dishName)=>{
        setCurrentDish(dishName);
        setShowPopup(true);
    }

     // close the popup
     const closePopupHandler = () =>{
        setShowPopup(false)
    }

    let specialMenu = allMenu.map((menuItem,index)=>{       
        if(index < maxSpecialDishes){
        return(            
            <CardDish menuItem = {menuItem} 
                      index = {index} 
                      showPopupHandler = {showPopupHandler} 
             />          
        )
        }else{
            return null
        }
    })

    // ---------Add to cart----------
    const addToCartHandler = (addToCartImg,addToCartTitle) =>{
        let obj={
            img:addToCartImg,
            title:addToCartTitle
        }
        setAddToCartItem([...addToCartItem,obj])
    }


    // ------------Rendering-----------
    return (
        <section className="special-dishes">
            {showPopup && <Popup closePopup={closePopupHandler}
                                 currentDish={currentDish}
                                 addToCartHandler={addToCartHandler}
                                  />}
            <div className="container">
                <AddToCart addToCartItem={addToCartItem}/>
                <div className="special-dishes-content text-center">               
                    <h2>Our special Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam ex debitis corporis, minus facere ut veritatis quia excepturi fugit dolores molestiae obcaecati est dignissimos.</p>                
                </div>
                <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap-30">
                        {specialMenu}
                    </ul>
                </div>
            </div>
        </section>      
    )
}

export default SpecialDishes
