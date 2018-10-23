import React from "react";
import * as PropTypes from "prop-types";

const Messages = props => {
    const {messages, user} = props;
    return (<ul className="message-list">
            {messages.map((message, index) => (<li key={index} className={message.username === user.username ? 'message sender' : 'message recipient'}>
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>))}
        </ul>);
};

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

export default Messages;