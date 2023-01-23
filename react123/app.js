
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { } , "Hello Everyone");
// const heading2 = React.createElement("h2" , {} , "hello React We are Learning ");
// const heading3 = React.createElement("h3", {} , "hello React We are Learning ");
// const container = React.createElement("div" , {class: "title"} , [heading, heading2, heading3]);


// JSX 
// const header = ( 
//     <div className="title">
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
// );

// function Welcome(props){
//     return <h1> Welcome , {props.name}</h1>
// }

// // fuctional components
// const Header2 = () => {
//     return (
//     <div className="title">
//         <Welcome name="Samir" />
//         <Welcome name="Haseen" />
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//         <h3>Heading 3</h3>
//     </div>
//     );
// }



const Header = () => {
    return(
        <div className="header">
            <h3>Header</h3>
            <ul className="menu">
                <li>About </li>
                <li>Contact </li>
                <li>Services </li>
            </ul>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Header());