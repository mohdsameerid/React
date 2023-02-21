import { useEffect } from "react";
import React from "react";
const ProfileClas = () => {

    useEffect(()=>{
       const time = setInterval(() => {
            console.log("Hello");
        },1000)

        return() => {
            clearInterval(time);
            console.log("Returned.")
        }
    },[]);

    return(
        <h1>Class based Component.</h1>
    );
}
export default ProfileClas;