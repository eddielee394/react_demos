import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Message from "./Message";
import SendMessage from "./SendMessage";

class ChatWindow extends Component {
  handleMessage = message => {};
  
  render() {
      const {messages, user} = this.props;
      return <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>
    
          <Message messages={messages} user={user}/>
    
          <SendMessage disabled={this.props.disabled}/>
      </div>;
  }
}

ChatWindow.propTypes = {
  callbackfn: PropTypes.func,
  disabled: PropTypes.bool
};

export default ChatWindow;