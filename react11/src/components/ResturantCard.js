import React, { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../context/UserContext";

export const ResturantCard = ({
  name,
  lastMileTravelString,
  cloudinaryImageId,
  cuisines,
  area,
}) => {
  let url = IMG_CDN_URL + cloudinaryImageId;
  const {user} = useContext(UserContext);
//   console.log(user.name)
  return (
    <div className="w-52 h-auto shadow-lg bg-yellow-50 m-2 p-4 ">
      <img src={url} alt="Img" />
      <h3 className="font-bold "> {name}</h3>
      <h4> {cuisines.join(", ")} </h4>
      <h5> {lastMileTravelString} </h5>
      <p className="font-semibold">{area}</p>
      <span>
        {user.name} {user.email}
      </span>
    </div>
  );
};
