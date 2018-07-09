import React from "react";

const LogInForm = () => (
    <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label for="loginEmail">Email/Username</label>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-danger">Login</button>
                <button type="submit" class="btn btn-outline-danger">Create User</button>
            </form>
        </div>  
    </div>
)

export default LogInForm;