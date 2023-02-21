import { resturantList } from "../Config";
import { ResturantCard } from "./ResturantCard";
import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import {filterdata } from "../utils/helper.js"
import useOnline from "../hooks/useOnline.js"

const Body = () => {
    const[searchText, setSearchText] = useState("");
    const [allResturants, setAllResturants] = useState([]);
    const[filteredResturants, setFilteredResturants] = useState([]);

    useEffect(()=>{
        // API call
        getRestraunt();
    },[]);

    async function getRestraunt(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4403848&lng=80.3160714&page_type=DESKTOP_WEB_LISTING"  
        );
        const json = await data.json();
        // console.log(json);

        setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Check your internet connetion .</h1>
    }
    
    // if Resturant.length == 0 => Shimmer UI
    // else Show restaurant data  
    return  (allResturants.length == 0) ?  <ShimmerUI /> :  (
        <>
          <div className="Seach-container  py-4 mx-1 mb-0 pb-0 " >
            <div className="">
            <input type="text" placeholder="Search Restaurant" value={searchText}  
            className="mx-5 border-2 mr-1 p-1 px-2 focus:bg-gray-100"
            onChange={ (e)=> {
                setSearchText(e.target.value);
            } } /> 
            <button className="bg-red-500 hover:bg-gray-600 text-white w-16 rounded-lg  p-1 "
            onClick={ ()=> {
                // (1) need to filter data 
                const data = filterdata(searchText, allResturants);
                // (2) set data
                setFilteredResturants(data);

            }}> Search </button>
            </div>
            
          </div>
          
          <div className="restrauntant-list  flex flex-wrap">     
          { (filteredResturants.length > 0 ) ?
            filteredResturants.map( (rest) => {
               return <Link to={"/restaurant/"+rest.data.id} key={rest.data.id} >
                    <ResturantCard {...rest.data}  />
                </Link>
            }) : <h1>NO data Found!!!</h1>
          }
          </div>
          {/* <span className="mb-8"></span> */}
        </>
    )
}

export default Body;