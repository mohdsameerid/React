
import React from "react";
import { IMG_CDN_URL } from "../Config"

export const ResturantCard = ( {name, lastMileTravelString, cloudinaryImageId, cuisines} ) => {
    let url = IMG_CDN_URL + cloudinaryImageId;
    return (
        
        <div className="w-52 h-72 shadow-lg bg-yellow-50 m-2 p-4 ">
            <img src={url } alt="Img" />
            <h3 className="font-bold "> {name}</h3> 
            <h4> {cuisines.join(", ")} </h4>
            <h5> {lastMileTravelString} </h5>
        </div>
    );
}