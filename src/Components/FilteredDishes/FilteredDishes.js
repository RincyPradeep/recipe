import React, {useState,useContext,useEffect} from 'react'
import CardDish from '../CardDish/CardDish'
import Pagination from '../Pagination/Pagination'
import Popup from '../Popup/Popup'
import { AllMenuContext } from '../AllMenuContext'
import './FilteredDishes.scss'

function FilteredDishes() {

    let [showPopup, setShowPopup] = useState(false)
    let [currentDish,setCurrentDish] = useState('')
    let [filteredDishes,setFilteredDishes] = useState([])
    let [activeDish,setActiveDish] = useState('Beef');
    let [currentPage,setCurrentPage] = useState(1);
    let [menuCategory,setMenuCategory] =useState([]);
    let [singleDish,setSingleDish] = useState([]);

    const allMenu = useContext(AllMenuContext);

    async function getAllCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenuCategory(categoryData.categories)       
    }

    async function getOnlyOneDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
        let response = await fetch(API_URL);
        let singleDishData = await response.json();
        setSingleDish(singleDishData.meals)
        console.log("SINGLE DISH:",singleDishData.meals);        
        }

    useEffect(()=>{
        getAllCategory();
        getOnlyOneDish();
    },[])   

// show the popup
const showPopupHandler = (dishName)=>{
    console.log(dishName);
    setCurrentDish(dishName);
    setShowPopup(true);
}

 // close the popup
 const closePopupHandler = () =>{
    setShowPopup(false)
}

// ================Find single dish for default display =======================
let maxSingleDish = 8;
 let singleDishItem = singleDish.map((item,index)=>{
    if(index < maxSingleDish){
    return(       
        <CardDish menuItem={item} 
                  index={index} 
                  showPopupHandler={showPopupHandler} />      
    )
}
})
       
    let itemsPerPage = 4;
    let indexOfLastDish = currentPage * itemsPerPage;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;
    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

    // --------------------Find filtered dishes-------------
        function showFilteredDishes(category){
            setSingleDish([]);
        setActiveDish(category);
         let selectedDishes = allMenu.filter((item)=>{
            return item.strCategory === category
        }).map((item,index)=>{            
            return(
                <CardDish menuItem={item}
                          index={index} 
                          showPopupHandler={showPopupHandler} />              
            )           
        })
            setFilteredDishes(selectedDishes)
    }

    // ------------Find all the categories--------------
   let allCategory = menuCategory.map((item,index)=>{
       return(
        <li key={index} className={item.strCategory === activeDish ? "active" : ""} onClick={()=>showFilteredDishes(item.strCategory)}>
            {item.strCategory}
        </li>
       )
    })

    //---------------------- Rendering-----------------------
    return (
        <div>
            {showPopup && <Popup closePopup={closePopupHandler}
                                 currentDish={currentDish}                                 
                                  />}
                                  {/* allDishes={props.allMenu} */}
            <div className="container">
                <div className="text-center">
                    <h1>Choose your Dishes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto labore aspernatur aliquid. Ducimus, quia neque.</p>
                </div>
                <div className="filtered-dishes">
                    <ul>
                        {allCategory}
                    </ul>
                </div>
                <div className="filtered-dishes-results">
                    <ul className="flex flex-wrap gap-30">
                        {singleDishItem}
                        {singleDishItem !=0 || filteredDishes.length !=0 ? showTheseDishesNow : 
                        <div className='alert'>                           
                            <h3>Sorry, try another dish</h3>                           
                        </div>}                     
                    </ul>    
                    <Pagination filteredDishes={filteredDishes}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage} />                
                </div>
            </div>            
        </div>
    )
}

export default FilteredDishes
