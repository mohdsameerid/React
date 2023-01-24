import React from "react";

const Title = () => {
    return (
        <img className="logo" 
         src= "https://seeklogo.com/images/F/foodie-goodie-logo-7E97467E9A-seeklogo.com.gif"
         alt="Logo_image "/>
    );
 }

const Header = () => {
    return (
        <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>cart</li>
            </ul>
        </div>
        </div>
    );
}

export default Header;