import React, {Component} from "react";
import * as PropTypes from "prop-types";

class Message extends Component {
    render() {
        const {messages, user} = this.props;
        return (
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
        );
    }
}

Message.propTypes = {callbackfn: PropTypes.func};

export default Message;