import React, { Component } from "react";
import * as PropTypes from "prop-types";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

class ChatWindow extends Component {
    //function that passes the message & username from the Messages component to the parent onMessage event handler
    onMessage = message => {
        this.props.onMessage(this.props.user.username,message)
    };
    
    render() {
        //destructure the props
        const {messages, user} = this.props;
        
        return <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            
            <Messages messages={messages} user={user}/>
            
            <SendMessage onMessage={this.onMessage} />
        </div>;
    }
}

ChatWindow.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    onMessage: PropTypes.func.isRequired
};

export default ChatWindow;