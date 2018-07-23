// import React, { Component } from "react";
import React from "react";
import API from "../../utils/API"
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";

const Account = props => {
    return(
        <div>
            <Wrapper>
                {/* {console.log(props)} */}
                <div className="row">
                    <div className="col-md-6">
                        <AccountInfo 
                          loggedIn={props.loggedIn}
                          user={props.user}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3>Open Ballots</h3>
                                <button className="btn green">Close Ballot</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" id="editAccountModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               <EditAccountForm />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Account;