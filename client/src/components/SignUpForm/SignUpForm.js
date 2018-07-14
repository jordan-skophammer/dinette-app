import React from 'react';

  const SignUpForm = (props) => (
    <div className="card align-middle">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="userName">Email/Username</label>
            <input 
              type="text" 
              className="form-control" 
              name="userName" 
              placeholder="Enter Username or Email"
              // value={this.userName}
              onChange={props.userNameEntry}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Enter Password"
              // value={this.password}
              onChange={props.passwordEntry}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="confirmPassword" 
              placeholder="Enter Password"
              // value={this.confirmPassword}
              onChange={props.confirmPasswordEntry} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="firstName" 
              placeholder="Enter First Name"
              // value={this.firstName}
              onChange={props.firstNameEntry}
              />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="lastName" 
              placeholder="Enter Last Name"
              // value={this.lastName}
              onChange={props.lastNameEntry}
              />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Default Zipcode</label>
            <input 
              type="text" 
              className="form-control" 
              name="zipcode" 
              placeholder="55555"
              // value={this.zipcode}
              onChange={props.zipcodeEntry}
              />
          </div>
          <button 
            type="submit"
            className="btn btn-danger"
            onClick={props.handleSubmit}
            >
            Submit
          </button>
        </form>
      </div>
    </div>
  )

export default SignUpForm;
