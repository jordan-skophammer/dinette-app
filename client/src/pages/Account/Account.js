import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import AccountInfo from "../../components/AccountInfo";

class Account extends Component {

    render() {
        return(
            <div>
                <Wrapper>
                    <NavBar />
                    <AccountInfo />
                </Wrapper>
            </div>
        )
    }
}

export default Account;