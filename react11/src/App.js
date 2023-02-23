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
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
const About = lazy(() => import("./components/About")); // dynamic data
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";

// lazy loading
const Instamart = lazy(() => import("./components/Instamart"));
import { lazy, Suspense } from "react";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState({
    name: "Mohdammad Samir",
    email: "samie@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About Data is loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
