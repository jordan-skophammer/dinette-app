import React from "react";
import "./LogInForm.css"

const LogInForm = (props) => (
    <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="loginEmail">Email/Username</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
            <a href="/signup" className="SignUp"><button className="btn btn-outline-danger">Create User</button></a>
        </div>  
    </div>
)

export default LogInForm;