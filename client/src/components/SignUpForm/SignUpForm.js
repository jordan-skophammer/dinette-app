import React from "react";
import "./SignUpForm.css";

const SignUpForm = (props) => (
    <div className="row justify-content-center">
        <div className="card signup-card">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="loginEmail">Email/Username</label>
                        <input type="email" 
                            className="form-control"
                            id="loginEmail"
                            placeholder="Enter Email"
                            // value={this.userName}
                            onChange={props.userNameEntry}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="createPassword">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="createPassword" 
                            placeholder="Enter Password" 
                            // value={this.password}
                            onChange={props.passwordEntry}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Enter Password"
                            // value={this.confirmPassword}
                            onChange={props.confirmPasswordEntry}  
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userFirstName">First Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="userFirstName" 
                            placeholder="Enter First Name"
                            // value={this.firstName}
                            onChange={props.firstNameEntry}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userLastName">Last Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="userLastName" 
                            placeholder="Enter Last Name"
                            // value={this.lastName}
                            onChange={props.lastNameEntry}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userZipcode">Default Zipcode</label>
                        <input type="text" 
                            className="form-control" 
                            id="userZipcode" 
                            placeholder="Enter Zipcode" 
                        />
                    </div>
                    <button type="submit" className="btn btn-danger" onClick={props.handleSubmit}>Submit</button>
                </form>
            </div>  
        </div>
    </div>
)

export default SignUpForm;
