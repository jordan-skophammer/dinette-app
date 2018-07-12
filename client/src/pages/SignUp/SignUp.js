import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import SignUpForm from "../../components/SignUpForm"
 
 class SignUp extends Component {
     render () {
         return(
            <div>
                <Wrapper>
                    <NavBar />
                    <SignUpForm />
                </Wrapper>
            </div>
         )
     }
 }
 
 export default SignUp;