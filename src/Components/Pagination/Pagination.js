import React, { useState } from 'react'
import './Pagination.scss'

function Pagination(props) {
    let numberOfPages = [];
    let [activePage,setActivePage] = useState(1);

    for(let i=1; i<= Math.ceil(props.filteredDishes.length / props.itemsPerPage) ; i++){
        numberOfPages.push(i);
    }

    function showNextSetOfDishes(pageNumber){
        console.log(pageNumber)
        props.setCurrentPage(pageNumber)
        setActivePage(pageNumber);
    }
    
    let pages = numberOfPages.map((pageNumber,index)=>{
        console.log("PAGE NO:,ACTIVE PAGE:",activePage +","+activePage)
        return(
            <li key={index} id={pageNumber} onClick={()=>showNextSetOfDishes(pageNumber)} 
                className={pageNumber ===  activePage? 'active-page' : ""}>{pageNumber}</li>
        )
    })
    console.log("######",pages)

    return (
        <section>
            <ul className="pagination">
                {pages}
            </ul>
        </section>
    )
}

export default Pagination
