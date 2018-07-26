import React, { Component } from "react";
import axios from "axios";
// import React from "react";
import "./Account.css";
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      zipcode: '',
    }
    this.handleSubmit = this.handleSubmit.bind();
    this.handleChange = this.handleChange.bind();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let updateUser = {
      'local.userName': this.state.userName,
      'zipcode': this.state.zipcode,
    }

    axios
      .patch("/user/update", updateUser)
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('success')
        } else {
          console.log("Error:");
          console.log(response.data.errmsg)
        }
      })
  }

  render() {
    return (
      <div>
        <Wrapper>
          {/* {console.log(props)} */}
          <div className="row text-center">
            <div className="col-md-3" />
            <div className="col-md-6">
              <AccountInfo
                loggedIn={this.props.loggedIn}
                user={this.props.user}
              />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="modal" id="editAccountModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content edit-account-modal">
                <div className="modal-body">
                  <EditAccountForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn yellow" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default Account;