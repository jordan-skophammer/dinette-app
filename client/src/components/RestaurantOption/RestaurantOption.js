import React from "react";
import "./RestaurantOption.css"

const RestaurantOption = props => (
    <li className="list-group-item result-block">
        {props.children}
        {/* onClick= {() => this.addFireBase(props.children.name)} value={props.children.name}  */}
    </li>
);

export default RestaurantOption;