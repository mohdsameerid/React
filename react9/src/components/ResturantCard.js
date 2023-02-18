
import React from "react";
import { IMG_CDN_URL } from "../Config"

export const ResturantCard = ( {name, lastMileTravelString, cloudinaryImageId, cuisines} ) => {
    let url = IMG_CDN_URL + cloudinaryImageId;
    return (
        
        <div className="card">
            <img src={url } alt="Img" />
            <h3> {name}</h3> 
            <h4> {cuisines.join(", ")} </h4>
            <h5> {lastMileTravelString} </h5>
        </div>
    );
}