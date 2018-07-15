import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import LogInForm from "../../components/LogInForm";
import NavBar from "../../components/NavBar";
 
 class LogIn extends Component {

    handleClick = (event) => {

        window.location.href='/SignUp'
    }
     render () {
         return(
            <div>
                <Wrapper>
                    <NavBar />
                    <LogInForm />
                </Wrapper>
            </div>
         )
     }
 }
 
 export default LogIn;
 