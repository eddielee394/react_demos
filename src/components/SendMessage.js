import React, {Component} from "react";
import * as PropTypes from "prop-types";

class SendMessage extends Component {
    render() {
        return <div>
            <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..."/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.props.disabled}>
                        SEND
                    </button>
                </div>
            </form>
        </div>;
    }
}

SendMessage.propTypes = {disabled: PropTypes.bool};

export default SendMessage;