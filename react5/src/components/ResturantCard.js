
import React from "react";
import { IMG_CDN_URL } from "../Config"

export const ResturantCard = ( {name, lastMileTravelString, cloudinaryImageId, cuisines} ) => {
    let url = IMG_CDN_URL + cloudinaryImageId;
    return (
        
        <div className="card">
            <img src={url } alt="Img" />
            <h2> {name}</h2> 
            <h3> {cuisines.join(", ")} </h3>
            <h4> {lastMileTravelString} </h4>
        </div>
    );
}