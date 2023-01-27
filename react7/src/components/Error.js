import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const data = useRouteError();
    return (
    <>
       <h2>{data.data}</h2>
       <h2>Data {data.statusText}</h2>
    </>   
    );
}
export default Error;