// import React, { Component } from "react";
import React from "react";
import API from "../../utils/API"
import Wrapper from "../../components/Wrapper"
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";

// console.log(props.user.local.userName)

// let handledisplayBallot = () => {
// API.getVoteSession(props.user.local.userName) 
//     .then(res => {
//         console.log(res)
//         if(res.status !== 200) {
//             throw new Error(res.statusText)
//         }
//         // console.log(res)
//         if (res.data !== "No Results Found"){
//             console.log(res)
//         } else {
//             console.log("no results found")
//         }

//     })
// }


const Account = props => {

    
        console.log(props.user.local.userName)

        let openBallot;

        let handledisplayBallot = () => {
        API.getVoteSession(props.user.local.userName) 
            .then(res => {
                console.log(res)
                if(res.status !== 200) {
                    throw new Error(res.statusText)
                }
                // console.log(res)
                if (res.data !== "No Results Found"){
                    console.log(res)
                } else {
                    console.log("no results found")
                }
                
            })
        }
    
        handledisplayBallot()
    
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
                                    <h3>Open Ballot</h3>
                                    <a href="/ballot">Go To Ballot</a>
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