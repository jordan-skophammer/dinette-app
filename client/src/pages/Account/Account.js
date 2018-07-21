import React, { Component } from "react";
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import AccountInfo from "../../components/AccountInfo";
import EditAccountForm from "../../components/EditAccountForm";

class Account extends Component {

    render() {
        return(
            <div>
                <Wrapper>
                    <NavBar
                      logout={this.logout}
                    />
                    <div className="row">
                        <div className="col-md-6">
                            <AccountInfo />
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                    <div class="modal" id="editAccountModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                               <EditAccountForm />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default Account;