import React from "react";
import "./LogInForm.css"

const LogInForm = () => (
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
                <button type="submit" className="btn btn-outline-danger" onClick={() => window.location.href='/SignUp'}>Create User</button>
            </form>
        </div>  
    </div>
)

export default LogInForm;