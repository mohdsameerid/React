import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerUI from "./ShimmerUI";

const ResturantMenu = () =>{
    const data = useParams();
    const { id } =  data;
    // console.log(data);
    const [restaurant, setRestaurant] = useState();



    useEffect(() =>{
        //call back function call
        getMenuDetails();
    },[]);

    async function getMenuDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.4403848&lng=80.3160714&menuId="+id);
        const json = await data.json();
        // console.log(json.data);

        setRestaurant(json.data);
    }

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
                   Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name} : {item.price}</li> )
                 }
            </ul>
           </div>
        </div>
        
    );
}
export default ResturantMenu;