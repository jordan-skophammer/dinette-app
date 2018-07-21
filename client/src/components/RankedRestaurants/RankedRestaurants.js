import React from "react";
import "./RankedRestaurants.css"

const RankedRestaurants = props => (
    <div className="list-group-item result-block-fancy">
        {props.children}  
    </div>
);

export default RankedRestaurants;