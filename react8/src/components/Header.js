import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <img className="logo" 
         src= "https://tasteofnovascotia.com/wp-content/uploads/2015/02/The-Canteen-logo.png"
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
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/contact"> Contact </Link></li>
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