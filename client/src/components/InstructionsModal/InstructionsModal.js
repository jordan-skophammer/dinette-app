import React, { Component } from "react";
import { Modal, ModalBody} from 'reactstrap';
import "./InstructionsModal.css"

export default class InstructionsModal extends Component {
  
    render() {
        return (
            <div>
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalBody>
                <p className="instructions_modal">Click on the + to add a place to a group vote</p>
                <p className="instructions_modal">You can add 2 to 5 places <span role="img" aria-label="wink">😉</span> </p>
                <p className="instructions_modal">Looking for more options? Search another location to see more results! </p>
                
                </ModalBody>
                {this.props.children}
            </Modal>
            </div>
        );
    }

  }