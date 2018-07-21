// import React, { Component } from "react";
import React from "react";
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";

// class Account extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: props.loggedIn,
//       user: props.user,
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Wrapper>
//           {console.log(this.state.user)}
//           <AccountInfo 
//             loggedIn={this.state.loggedIn}
//             user={this.state.user}
//           />
//           {/* <p>{this.state.loggedIn}</p> */}
//         </Wrapper>
//       </div>
//     )
//   }
// }

const Account = props => {
  return (
    <div>
      <Wrapper>
        {console.log(props)}
        <AccountInfo 
          loggedIn={props.loggedIn}
          user={props.user}
        />
        {/* <p>{this.state.loggedIn}</p> */}
      </Wrapper>
    </div>
  )
}

export default Account;