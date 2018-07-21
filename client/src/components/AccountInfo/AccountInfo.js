import React from "react";

const AccountInfo = (props) => (
    <div className="card">
    {console.log(props)}
        <div className="card-body">
            <h3>Username: {props.user.local.userName}</h3>
            <br/>
            <h3>Name: {props.user.firstName} {props.user.lastName}</h3>
            <br/>
            <h3>Zip Code: {props.user.zipcode}</h3>
            <br/>
            <button className="btn green" data-toggle="modal" data-target="#editAccountModal">Edit Account</button>
        </div>
    </div>
)

export default AccountInfo;
