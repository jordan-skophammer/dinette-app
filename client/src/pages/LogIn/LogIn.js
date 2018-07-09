import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import LogInForm from "../../components/LogInForm";

class LogIn extends Component {
    render () {
        return(
            <div>
                <Wrapper>
                    <LogInForm />
                    <h2>Other components</h2>
                </Wrapper>
            </div>
        )
    }
}

export default LogIn;