import React, { Component } from "react";
import { Modal, ModalBody} from 'reactstrap';
import "./VoteCreatedModal.css"

export default class VoteCreatedModal extends Component {
  
    render() {
        return (
            <div>
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            {/* <div className="orange text-white"> */}
                <ModalBody>
                <br/>
                <h3 className="lobster orange-text text-center">Your ballot has been created!</h3>
                <br/>
                <p className="text-center">You can view or close it <a href="/account">here.</a></p>
                <p className="text-center">To invite friends to vote, send them your username. They can enter that <a href="/vote">here</a> to join your group vote!</p>
                
                </ModalBody>
                {this.props.children}
                {/* </div> */}
            </Modal>
            </div>
        );
    }

  }