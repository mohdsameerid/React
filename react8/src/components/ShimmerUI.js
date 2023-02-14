import React from "react";

const ShimmerUI = () => {
    return (
        <div className="restrauntant-list">
            { 
              Array(10).fill("").map((e,index) => <div key={index} className="shimmer-card"></div> )
            }
        </div>
    )
}
export default ShimmerUI;