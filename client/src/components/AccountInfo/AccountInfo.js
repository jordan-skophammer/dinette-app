import React from "react";

const AccountInfo = (props) => (
    <div className="card">
        <div className="card-body">
            <h3>Username: jane.doe@gmail.com {props.Username}</h3>
            <br/>
            <h3>Name: Jane{props.FirstName} Doe{props.LastName}</h3>
            <br/>
            <h3>Zip Code: 55405{props.Zip}</h3>
            <br/>
            <button className="btn green" data-toggle="modal" data-target="#editAccountModal">Edit Account</button>
        </div>
    </div>
)

export default AccountInfo;