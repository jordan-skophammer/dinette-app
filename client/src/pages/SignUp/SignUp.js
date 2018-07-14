import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import SignUpForm from "../../components/SignUpForm"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      zipcode: '',
      redirectTo: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    // console.log(event);
    // console.log(this);
    const { name, value } = event.target;
    this.setState({ [name]: value });    
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.password === this.state.confirmPassword) {
      let newUser = {
        userName: this.state.userName,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        zipcode: this.state.zipcode,
      }

      axios
        .post('auth/signup', newUser)
        .then(response => {
          console.log(response)
          if (!response.data.errmsg) {
            console.log('success')
            this.setState({
              redirectTo: '/login'
            });
            // this.props.history.push('/login');
          } else {
            console.log('duplicate')
          }
        })
    } else {
      console.log("Passwords don't match");
      
    }
  }

  render() {
    // if (this.state.redirectTo) {
		// 	return <Redirect to={{ pathname: this.state.redirectTo }} />
		// }
    return (
      <div>
        <Wrapper>
          <NavBar />
          <SignUpForm
            userNameEntry={this.handleChange.bind()}
            passwordEntry={this.handleChange.bind()}
            confirmPasswordEntry={this.handleChange.bind()}
            firstNameEntry={this.handleChange.bind()}
            lastNameEntry={this.handleChange.bind()}
            zipcodeEntry={this.handleChange.bind()}
          />

          {/* <h2>Other components</h2> */}
        </Wrapper>
      </div>
    )
  }
}

export default SignUp;
