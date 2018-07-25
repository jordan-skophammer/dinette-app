// import React, { Component } from "react";
import React from "react";
import "./Account.css";
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";

const Account = props => {
    
        return(
            <div>
                <Wrapper>
                    {/* {console.log(props)} */}
                    <div className="row text-center">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <AccountInfo 
                            loggedIn={props.loggedIn}
                            user={props.user}
                            />
                        </div>
                        <div className="col-md-3" />
                    </div>

                    <div className="modal" id="editAccountModal" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content edit-account-modal">
                                <div className="modal-body">
                                <EditAccountForm />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn yellow" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    
}

export default Account;