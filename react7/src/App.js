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
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

const App = () => {
    return (
        <>
           <Header />
           <Outlet/>
           <Footer />
        </>
    );
}
const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App /> ,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <ResturantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);