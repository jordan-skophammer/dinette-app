import React from "react";
import "./LogInForm.css"

const LogInForm = (props) => (
    <div className="row justify-content-center">
        <div className="card login-card">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="loginUserName">Email/Username</label>
                        <input type="email" className="form-control" name="loginUserName" placeholder="Enter username" onChange={props.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="loginPassword">Password</label>
                        <input type="password" className="form-control" name="loginPassword" placeholder="Enter Password" onChange={props.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-danger" onClick={props.handleSubmit}>Login</button>
                </form>
                <br/>
                <a href="/signup" className="SignUp"><button className="btn text-white create-button">Create User</button></a>
            </div>  
        </div>
    </div>
)

export default LogInForm;
