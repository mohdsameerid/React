import { resturantList } from "../Config";
import { ResturantCard } from "./ResturantCard";
import React, { useEffect, useState } from "react";
import LoadingData from "./LaodingData";


function filterdata(searchText, restaurant){
    const data =  restaurant.filter( (restaurant) => 
          restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
          );
    return data;
}



const Body = () => {
    const[searchText, setSearchText] = useState("");
    const [allResturants, setAllResturants] = useState([]);
    const[filteredResturants, setFilteredResturants] = useState([]);

    useEffect(()=>{
        // API call
        getRestraunt();
    },[]);

    async function getRestraunt(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4403848&lng=80.3160714&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    // if Resturant.length == 0 => Shimmer UI
    // else Show restaurant data  
    return  (allResturants.length == 0) ?  <LoadingData /> :  (
        <>
          <div className="Seach-container" >
            <input type="text" placeholder="Search" value={searchText} 
            onChange={ (e)=> {
                setSearchText(e.target.value);
            } } /> 
            <button 
            onClick={ ()=> {
                // (1) need to filter data 
                const data = filterdata(searchText, allResturants);
                // (2) set data
                setFilteredResturants(data);

            }}> Search </button>
          </div>
          
          <div className="restrauntant-list">     
          { (filteredResturants.length > 0 ) ?
            filteredResturants.map( (rest) => {
               return <ResturantCard {...rest.data} key={rest.data.id} />;
            }) : <h1>NO data Found!!!</h1>
          }
          </div>
        </>
    )
}

export default Body;