import React,{useState,useEffect} from 'react'
import Loader from './Loader/Loader';

export const AllMenuContext = React.createContext()

export const AllMenu = (props) =>{
    let [menu,setMenu] = useState([]);
    let [loading,setLoading] = useState(false)

    async function getAllMenuItems(){
        setLoading(true);
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
        console.log("ALL MENU:",data.meals);
        setLoading(false)
    }

    useEffect(()=>{
        getAllMenuItems();
    },[])

    return(
        <AllMenuContext.Provider value={menu}>
            {!loading ? props.children : <Loader />}
        </AllMenuContext.Provider>
    )
}
