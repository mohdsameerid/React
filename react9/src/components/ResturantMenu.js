import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";

const ResturantMenu = () =>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);

    return !(restaurant) ? <ShimmerUI/> : (
        
        <div className="menu">
           <div>
           <h1>{restaurant.name}</h1>
             <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} width="300px"/>
             <h1>Menu id : {restaurant.id}</h1>
             <h2>{restaurant.area} , {restaurant.city}</h2> 
             <h4>{restaurant.avgRating} Star</h4>
             <p>{restaurant.costForTwoMsg}</p>
           </div>
           <div>
            <h1>Menu</h1>
             <ul>{
                   Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name} : {(item.price/10)/10 + ".00"}</li> )
                 }
            </ul>
           </div>
        </div>
        
    );
}
export default ResturantMenu;