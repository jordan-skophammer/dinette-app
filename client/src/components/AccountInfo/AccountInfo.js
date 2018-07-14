import React from "react";

const AccountInfo = (props) => (
    <div className="card">
        <div className="card-body">
            <h3>Name: {props.FirstName} {props.LastName}</h3>
            <br/>
            <h3>Zip Code: {props.Zip}</h3>
            <br/>
            <h3>Favorites:</h3>
            <br/>
            <ul>
                <li>{props.Favs}</li>
            </ul>
        </div>
    </div>
)

export default AccountInfo;