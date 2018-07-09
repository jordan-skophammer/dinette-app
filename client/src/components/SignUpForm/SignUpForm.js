import React from "react";

const SignUpForm = () => (
    <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="loginEmail">Email/Username</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="createPassword">Password</label>
                    <input type="password" className="form-control" id="createPassword" placeholder="Enter Password" />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Enter Password" />
                </div>
                <div class="form-group">
                    <label for="userFirstName">First Name</label>
                    <input type="text" className="form-control" id="userFirstName" placeholder="Enter First Name" />
                </div>
                <div class="form-group">
                    <label for="userLastName">Last Name</label>
                    <input type="text" className="form-control" id="userLastName" placeholder="Enter Last Name" />
                </div>
                <div class="form-group">
                    <label for="userZipcode">Default Zipcode</label>
                    <input type="text" className="form-control" id="userZipcode" placeholder="Enter Zipcode" />
                </div>
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
        </div>  
    </div>
)

export default SignUpForm;