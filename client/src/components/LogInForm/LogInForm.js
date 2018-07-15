import React from "react";
import "./LogInForm.css"

const LogInForm = (props) => (
    <div className="row justify-content-center">
        <div className="card login-card">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="loginEmail">Email/Username</label>
                        <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="loginPassword">Password</label>
                        <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-danger">Login</button>
                </form>
                <br/>
                <a href="/signup" className="SignUp"><button className="btn text-white create-button">Create User</button></a>
            </div>  
        </div>
    </div>
)

export default LogInForm;
