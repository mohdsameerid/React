import React from "react";
// import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClas from "./ProfileClass";


class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("Parent constructor");
    }
    componentDidMount(){
        // console.log("Parent - componentDidMount");
    }
    render(){
        // console.log("Parent - render");
        return(
            <>
                <h1>This is about us page!!</h1>
                <ProfileClas name={"first child"} />
                {/* <Profile name={"Second child"} />
                <Profile name={"third child"} /> */}
            </>
          )
    }
}
export default About;