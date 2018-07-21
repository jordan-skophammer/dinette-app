import React from "react";

const AccountInfo = (props) => (
    <div className="card">
    {console.log(props)}
        <div className="card-body">
            <h3>Username: jane.doe@gmail.com {props.userName}</h3>
            <br/>
            <h3>Name: Jane{props.firstName} Doe{props.lastName}</h3>
            <br/>
            <h3>Zip Code: 55405{props.zipcode}</h3>
            <br/>
            <button className="btn green" data-toggle="modal" data-target="#editAccountModal">Edit Account</button>
        </div>
    </div>
)

export default AccountInfo;
