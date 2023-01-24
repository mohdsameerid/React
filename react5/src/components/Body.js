
import { resturantList } from "../Config";
import { ResturantCard } from "./ResturantCard";
import React, { useState } from "react";


function filterdata(searchText, restaurant){
    return restaurant.filter( (restaurant) => restaurant.data.name.includes(searchText))
}


const Body = () => {
    const[searchText, setSearchText] = useState("");

    const[restaurant,setRestaurant] = useState(resturantList);
    
    return (
        <>
          <div className="Seach-container" >
            <input type="text" placeholder="Search" value={searchText} 
            onChange={ (e)=> {
                setSearchText(e.target.value);
            } } /> 
            <button 
            onClick={ ()=> {
                // (1) need to filter data 
                const data = filterdata(searchText, resturantList);
                // (2) set data
                setRestaurant(data);

            }}> Search </button>
          </div>
          
        <div className="restrauntant-list">
            
        {
         restaurant.map( (rest) => {
            return <ResturantCard {...rest.data} key={rest.data.id} />;
        })}

        
        </div>
        </>
    );
}

export default Body;