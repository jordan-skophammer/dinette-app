import React from "react";
import "./AccountInfo.css";

const AccountInfo = (props) => {
  // if (props.loggedIn === true) {
    return (
      <div className="card account-card">
        {console.log(props)}
        <div className="card-body">
          <h3><b>Username:</b> {props.user.local.userName}</h3>
          <br />
          <h3><b>Name:</b> {props.user.firstName} {props.user.lastName}</h3>
          <br />
          <h3><b>Zip Code:</b> {props.user.zipcode}</h3>
          <br />
          <button className="btn yellow" data-toggle="modal" data-target="#editAccountModal">Edit Account</button>
          <a href="/ballot"><button  className="btn orange">Go To Ballot</button></a>
          <button className="btn green" onClick={()=>props.endVote}>Close Ballot</button>
        </div>
      </div>
    )
  // } else {
  //   return (
  //     <div>
  //       <div className="card">
  //         <div className="card-body">
  //           <h3>You're not logged in yet!</h3>
  //         </div>
  //       </div>
  //       <div className="row home-btn text-center justify-content-center text-white">
  //         <a href="/login" className="login">Log In</a> <span className="or">&nbsp; or &nbsp; </span><a href="/SignUp" className="login">Sign Up</a>
  //       </div>
  //     </div>
  //   )
  // }
}

export default AccountInfo;
