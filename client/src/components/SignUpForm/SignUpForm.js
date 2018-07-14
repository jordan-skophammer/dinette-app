import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => (
    <div className="row justify-content-center">
            <div className="card signup-card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email/Username</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="createPassword">Password</label>
                            <input type="password" className="form-control" id="createPassword" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userFirstName">First Name</label>
                            <input type="text" className="form-control" id="userFirstName" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userLastName">Last Name</label>
                            <input type="text" className="form-control" id="userLastName" placeholder="Enter Last Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userZipcode">Default Zipcode</label>
                            <input type="text" className="form-control" id="userZipcode" placeholder="Enter Zipcode" />
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>  
            </div>
    </div>
)

export default SignUpForm;