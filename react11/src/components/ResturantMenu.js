import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../hooks/useRestaurant";

const ResturantMenu = () =>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);

    return !(restaurant) ? <ShimmerUI/> : (
        
        <div className="menu w-full   flex">
           <div className="bg-yellow-50 p-10">
             <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} width="300px"/>
             <h1 className="font-bold my-2 text-2xl">{restaurant.name}</h1>
             <h1>Menu id : {restaurant.id}</h1>
             <h2>{restaurant.area} , {restaurant.city}</h2> 
             <h4>{restaurant.avgRating} Star</h4>
             <p>{restaurant.costForTwoMsg}</p>
           </div>
           
           <div className="bg-yellow-50 p-10">
            <h1 className="font-bold text-xl">Menu</h1>
             <ul>{
                   Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name}: {(item.price/10)/10 + ".00"}</li> )
                 }
            </ul>
           </div>
        </div>
        
    );
}
export default ResturantMenu;