import React from "react";
import "./SignUpForm.css";

const SignUpForm = (props) => (
    <div className="row justify-content-center">
        <div className="card signup-card">
            <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="userName">Email/Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="userName" 
                      placeholder="Enter Username or Email"
                      value={props.userName}
                      onChange={props.userNameEntry}
                      // onChange={() => console.log(props)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password" 
                      placeholder="Enter Password"
                      // value={props.password}
                      onChange={props.passwordEntry}
                      // onChange={() => console.log(props)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="confirmPassword" 
                      placeholder="Enter Password"
                      // value={props.confirmPassword}
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
                      // value={props.firstName}
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
                      // value={props.lastName}
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
                      // value={props.zipcode}
                      onChange={props.zipcodeEntry}
                      />
                  </div>
                  <button 
                    type="submit"
                    className="btn btn-danger"
                    onClick={props.submitClicked}
                    >
                    Submit
                  </button>
                </form>
            </div>  
        </div>
    </div>
)

export default SignUpForm;
