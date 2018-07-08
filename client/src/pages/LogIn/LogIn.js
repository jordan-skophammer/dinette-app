import React, { Component } from "react";
import LogInForm from "../../components/LogInForm";

class LogIn extends Component {
    render () {
        return(
            <div>
                <LogInForm />
                <h2>Other components</h2>
            </div>
        )
    }
}

export default LogIn;