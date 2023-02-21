import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import Title from "../assets/Logo";

const Header = () => {
    const[login, setLogin] = useState(false);
    const isOnlineTick = useOnline();  // custom hook  

    return (
        <div className="flex justify-between bg-yellow-200">
        <Title />
        <div className="">
            <ul className="flex py-8">
                <li className="px-2"> <Link to="/"> Home </Link></li>
                <li className="px-2"> <Link to="/about"> About </Link></li>
                <li className="px-2"> <Link to="/contact"> Contact </Link></li>
                <li className="px-2">cart</li>
                <li className="px-2"> <Link to="/instamart"> Instamart </Link></li>
            </ul>
        </div>
        <div>
            <h3 className="m-4 p-4">{ isOnlineTick ? "✅" : "⛔" }</h3> 
        </div>
        <div className="m-1 p-5">
        { (login) ? <button className="p-2 bg-green-600 rounded-lg" onClick={()=> setLogin(false) }>Logout</button> 
                    : <button className="p-2 bg-green-400 rounded-lg" onClick={()=> setLogin(true) } >Login</button> 
                }
        </div>
    
        </div>
    );
}

export default Header;