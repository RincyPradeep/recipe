import React from 'react';
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import './Menu.scss'
import {AllMenu} from '../AllMenuContext';

function Menu (){
    return(
        <div>
            <Header />
            <Hero />
            <AllMenu>
                 <SpecialDishes />                
                 <FilteredDishes /> 
            </AllMenu>        
        </div>
    )
}
export default Menu;














