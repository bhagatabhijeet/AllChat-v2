import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import content from "../../content.js";


import "./style.css";

class DeleteMessageModal extends Component {

  state = {
    open: false
  }

  renderDelete(language) {
    switch (language) {
      case "es":
        return content.delete.es;
      case "zh":
        return content.delete.zh;
      case "ar":
        return content.delete.ar;
      case "fr":
        return content.delete.fr;
      case "de":
        return content.delete.de;
      case "hi":
        return content.delete.hi;
      case "it":
        return content.delete.it;
      case "ja":
        return content.delete.ja;
      case "ko":
        return content.delete.ko;
      case "ru":
        return content.delete.ru;
      case "tl":
        return content.delete.tl;
      case "te":
        return content.delete.te;
      case "vi":
        return content.delete.vi;
      default:
        return content.delete.en;
    }
  }

  closeConfigShow = (closeOnEscape) => () => {
    this.setState({ closeOnEscape, open: true });
  }

  close = () => this.setState({ open: false });

  deleteMessageAndClose = () => {
    this.props.deleteMessage({ message: this.props.message, roomId: this.props.roomId })
    this.close();
  }

  render() {
    const { open, closeOnEscape } = this.state;
    return (
      <Modal
        trigger={<span className="cursor" id="delete" onClick={this.closeConfigShow(false, true)}>
          {this.renderDelete(this.props.user?.language)}
        </span>}
        basic
        open={open}
        closeOnEscape={closeOnEscape}
        onClose={this.close}
      >
        <Header content='Delete Message' />
        <Modal.Content>
          <p>Are you sure you want to delete this message?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            negative
            onClick={() => this.deleteMessageAndClose()}>
            <Icon name='remove' />
            {/* {this.renderDeleteMessage(this.props.user?.language)} */}
          </Button>
          <span className="cursor" id="delete" onClick={() => this.deleteMessageAndClose()}></span>
        </Modal.Actions>

      </Modal>
    );
  }
}

export default DeleteMessageModal;




