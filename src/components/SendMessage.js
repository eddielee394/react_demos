import React, {Component} from "react";
import * as PropTypes from "prop-types";

class SendMessage extends Component {
    state = {
        message: '',
    };
    
    //input event handler
    handleInputChange = event => {
        const {value} = event.target;
        this.setState(() => ({
            message: value
        }))
    };
    
    //Submit event handler
    handleSubmit = event => {
        //since this is a button, need to stop the default event from firing
        event.preventDefault();
        
        //now we can call the callback function
        this.props.onMessage(this.state.message);
    };
    
    //if the message is empty, disable
    isDisabled = () => {
        //get the state.message object
        const {message} = this.state;
        
        //if message is empty return true
        return message === '';
    };
    
    render() {
        //Destructure the message object
        const {message} = this.state;
        return <div>
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={message} onChange={this.handleInputChange} />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </div>;
    }
}

SendMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default SendMessage;