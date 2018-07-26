import React, { Component } from "react";
import { Modal, ModalBody} from 'reactstrap';
// import "./Modal.css"

export default class VoteCreatedModal extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div>
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            {/* <div className="orange text-white"> */}
                <ModalBody>
                <h3 className="lobster">Your ballot has been created!</h3>
                <p>You'll be able to view or close it <a href="/account">here</a></p>
                <p>To invite friends to vote, send them your username. They can enter that <a href="/vote">here</a> to join your group vote!</p>
                
                </ModalBody>
                {this.props.children}
                {/* </div> */}
            </Modal>
            </div>
        );
    }

  }