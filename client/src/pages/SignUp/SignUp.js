import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import SignUpForm from "../../components/SignUpForm"

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      zipcode: '',
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

    let currentURL = window.location.origin;
    currentURL = "http://localhost:3001/auth/signup" ? "http://localhost:3000/auth/signup" : window.location.origin;

    if (this.state.password === this.state.confirmPassword) {
      let newUser = {
        userName: this.state.userName,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        zipcode: this.state.zipcode,
      }

      // console.log(newUser);

      axios
        .post(currentURL, newUser)
        .then(response => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log('success')
            this.setState({
              redirectTo: '/login'
            });
          } else {
            console.log('duplicate')
          }
        })
    } 
    else {
      console.log("Passwords don't match");
      
    }
  }

  render() {
    if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
    return (
      <div>
        <Wrapper>
          <NavBar />
          <SignUpForm
            handleChange={this.handleChange}
            submitClicked={this.handleSubmit}
            userName={this.state.userName}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            zipcode={this.state.zipcode}
          />
        </Wrapper>
      </div>
    )
  }
}

export default SignUp;
