import React, { useState } from "react";

const Title = () => {
    return (
        <img className="logo" 
         src= "https://seeklogo.com/images/F/foodie-goodie-logo-7E97467E9A-seeklogo.com.gif"
         alt="Logo_image "/>
    );
 }

const Header = () => {
    const[login, setLogin] = useState(false);
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
        { (login) ? <button onClick={()=> setLogin(false) }>Logout</button> 
            : <button onClick={()=> setLogin(true) } >Login</button> 
        }
        </div>
    );
}

export default Header;