import React from "react";
import "./RestaurantOption.css"

const RestaurantOption = props => (
    <div className="list-group-item result-block-negative">
        {props.children}  
    </div>
);

export default RestaurantOption;