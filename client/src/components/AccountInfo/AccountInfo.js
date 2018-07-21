import React from "react";

const AccountInfo = (props) => {
  if (props.loggedIn === true) {
    return (
      <div className="card">
        {console.log(props)}
        <div className="card-body">
          <h3>Username: {props.user.local.userName}</h3>
          <br />
          <h3>Name: {props.user.firstName} {props.user.lastName}</h3>
          <br />
          <h3>Zip Code: {props.user.zipcode}</h3>
          <br />
          <button className="btn green" data-toggle="modal" data-target="#editAccountModal">Edit Account</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h3>You're not logged in yet!</h3>
          </div>
        </div>
        <div className="row home-btn text-center justify-content-center text-white">
          <a href="/login" className="login">Log In</a> <span className="or">&nbsp; or &nbsp; </span><a href="/SignUp" className="login">Sign Up</a>
        </div>
      </div>
    )
  }
}

export default AccountInfo;
