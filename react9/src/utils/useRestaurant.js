import { useEffect, useState } from "react"
import { Restaurant_Menu_List } from "../Config";

// make our own custom Hook 'useRestaurant'
const useRestaurant = (id) => {
    const[restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data = await fetch(Restaurant_Menu_List + id);
        const json = await data.json();
        setRestaurant(json.data);
    }

    return restaurant;
}
export default useRestaurant;


    