import React from "react";
import "./RestaurantOption.css"

const RestaurantOption = props => (
    <li className="list-group-item result-block">
        {props.children}  
    </li>
);

export default RestaurantOption;