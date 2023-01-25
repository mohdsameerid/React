/**
 *  Header
 *    - Logo 
 *    - nav items ( Right side )
 *    - cart
 *  Body 
 *    - Search bar 
 *    - Resturant_card
 *       - Img
 *       - Name
 *       - Rating
 *       - Cusines
 *  Footer
 *     - link
 *     - CopyRight
 * 
 */
 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Footer from "./components/Footer"

const App = () => {
    return (
        <>
           <Header />
           <Body />
           <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);