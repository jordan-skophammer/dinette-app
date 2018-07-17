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
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password" 
                      placeholder="Enter Password"
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="confirmPassword" 
                      placeholder="Enter Password"
                      onChange={props.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="firstName" 
                      placeholder="Enter First Name"
                      onChange={props.handleChange}
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="lastName" 
                      placeholder="Enter Last Name"
                      onChange={props.handleChange}
                      />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipcode">Default Zipcode</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="zipcode" 
                      placeholder="55555"
                      onChange={props.handleChange}
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
