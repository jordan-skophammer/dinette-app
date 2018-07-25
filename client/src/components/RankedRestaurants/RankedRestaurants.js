import React from "react";
import "./RankedRestaurants.css"

const RankedRestaurants = props => (
    <div className="result-block-fancy">
        {props.children}  
    </div>
);

export default RankedRestaurants;