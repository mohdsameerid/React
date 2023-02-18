import React from "react"; 
import { useState } from "react";
import { json } from "react-router-dom";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                bio: "dummy",
            }
        }
        console.log( this.props.name+ " Constructor ");
    }
    async componentDidMount(){
        
        // best place to call API.
        // const data = await fetch("https://api.github.com/users/mohdsameerid");
        // const json  = await data.json();
        // // const {name, bio } = json;
        // // console.log(json);
        // this.setState({
        //     userInfo: json,
        // });
        this.timers = setInterval(() => {
            console.log("HEllo");
        },1000);
        console.log( this.props.name +" componentDidMount ");
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        clearInterval(this.timers);
        console.log("returned");
    }
    render(){
        // const { name, bio } = json;
        console.log( this.props.name +" Render ");
        // console.log(json.bio);
        return(
            <>
                <h1> this is the profile components: Details ....</h1>
                <p> Name: {this.state.userInfo.name}</p>
                <p>BIO: {this.state.userInfo.bio}</p>
                <img src={this.state.userInfo.avatar_url} />
            </>
        );
    }
}
export default Profile;