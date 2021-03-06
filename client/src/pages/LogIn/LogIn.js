import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Wrapper from "../../components/Wrapper"
import LogInForm from "../../components/LogInForm";

const axios = require("axios");

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      loginUserName: '',
      loginPassword: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind();
    this.handleChange = this.handleChange.bind();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.loginPassword && this.state.loginUserName) {
      let userLogin = {
        userName: this.state.loginUserName,
        password: this.state.loginPassword,
      }

      axios
        .post("/auth/login", userLogin)
        .then(response => {
          if (!response.data.errmsg) {
            this.setState({
              redirectTo: window.location.replace("/"),
            });
          } else {
            console.log('error logging in')
          }
        }).catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);            
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div>
        <Wrapper>
          <LogInForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} 
          />
        </Wrapper>
      </div>
    )
  }
}

export default LogIn;
