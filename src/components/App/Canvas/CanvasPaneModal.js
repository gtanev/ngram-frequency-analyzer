import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class CanvasPaneModal extends Component {
  state = { modal: true };

  close = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <Modal isOpen={this.props.visible === this.state.modal} toggle={this.close}>
        <ModalHeader className="text-center bg-light"
                     toggle={this.close}>{this.props.title}</ModalHeader>
        <ModalBody>
          {this.props.body}
        </ModalBody>
        <ModalFooter className="justify-content-center bg-light">
          <Button outline color="dark" onClick={this.close}>Exit full screen</Button>
        </ModalFooter>
      </Modal>
    );
  };
}
