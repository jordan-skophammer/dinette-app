import React from "react";

const SearchResults = props => {
    return (
        <div>
            <h3>{props.restaurantName}</h3>
            <p>{props.address}</p>
            <hr/>
        </div>
    )
}

export default SearchResults;

