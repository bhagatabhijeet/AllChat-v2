import React, { Component } from "react";
import { Message, Button, Icon } from "semantic-ui-react";
import moment from 'moment';
import { connect } from 'react-redux';
import "./style.css";
import { translateMessage } from "../../actions/api";
require("dotenv").config();
const { Translate } = require('@google-cloud/translate').v2;


const projectId = process.env.GOOGLE_PROJECT_ID;

// Instantiates a client
const translate = new Translate({
  projectId,
  keyFilename: "./AllChatKey.json",
});


class MessageContainer extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.userJoin !== prevProps.userJoin && this.props.userJoin !== "") {
      //margin auto
      const div = document.createElement("div");
      div.className = "joined";
      div.textContent = `-----${this.props.userJoin}-----`;
      document.getElementById('message-container').append(div);
    }
    if (this.props.userLeft !== prevProps.userLeft && this.props.userLeft !== "") {
      const div = document.createElement("div");
      div.className = "left";
      div.textContent = `-----${this.props.userLeft}-----`;
      document.getElementById('message-container').append(div);
    }
  }

  render() {
    return (
        <div className="ui message" id="message-container">
          {this.props.room.messages?.map((message, index) =>
            <div id="message" key={index}>
              <p id="timeStamp">
                <span id="date">{moment(message.dateCreated).format('l, h:mm a')}</span>
              </p>
              
              <Message.Header> <p id="message-text"><small>{message.firstName}&nbsp;{message.lastName}:&nbsp;{message.text}</small></p></Message.Header>
              <Button id="translate-btn" size='mini' onClick={() => this.props.translateMessage(message, this.props.user.language)}>See translation</Button>
              <Button
                id="delete-message-btn"
                size='mini'
                onClick={() => this.props.deleteMessage({ message, roomId: this.props.room._id })}>
                <Icon name='trash alternate' /> 
              </Button>
              </div>)}
        </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.auth.currentUser,

  }
}

export default connect(mapStateToProps, { translateMessage })(MessageContainer)
// export default MessageContainer;
