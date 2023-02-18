import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Title from "./Logo";

const Header = () => {
    const[login, setLogin] = useState(false);
    const isOnlineTick = useOnline();  // custom hook  

    return (
        <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/contact"> Contact </Link></li>
                <li>cart</li>
                <li> <Link to="/instamart"> Instamart </Link></li>
            </ul>
        </div>
        <div>
            <h3>{ isOnlineTick ? "✅" : "⛔" }</h3> 
        </div>

        { (login) ? <button onClick={()=> setLogin(false) }>Logout</button> 
            : <button onClick={()=> setLogin(true) } >Login</button> 
        }
        </div>
    );
}

export default Header;