import React, { Component } from "react";
import { Modal, ModalBody} from 'reactstrap';
import "./InstructionsModal.css"

export default class InstructionsModal extends Component {
  
    render() {
        return (
            <div>
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            {/* <div className="orange text-white"> */}
                <ModalBody>
                <p className="instructions_modal">Click on the + to add a place to a group vote</p>
                <p className="instructions_modal">Choose 2-5 place to set up a group vote!</p>
                <p className="instructions_modal">Looking for more options? Search another location to see more results <span role="img" aria-label="wink">😉</span></p>
                
                </ModalBody>
                {this.props.children}
                {/* </div> */}
            </Modal>
            </div>
        );
    }

  }