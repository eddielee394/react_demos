import React, {Component} from "react";
import PropTypes from 'prop-types';

class User extends Component {
    state = {
        showGamesPlayed: true
    };
    
    //OnClick handler to display games played
    handleToggleGamesPlayed = () => {
        this.setState(prevState => ({
            showGamesPlayed: !prevState.showGamesPlayed,
        }));
    };
    
    render() {
        const {showGamesPlayed} = this.state;
        return (
            <div className="card user-card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="user-avatar-container rounded-circle my-3">
                    <img src="http://i.pravatar.cc/150" className="rounded-circle"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.user.username}</h5>{ showGamesPlayed ? <p className="card-text">
                    {this.props.user.username} has played {this.props.user.numGamesPlayed} games </p> : ('')}
                    <div className="card-footer">
                        <div className="show-game-button-container my-3">
                            <button className="btn btn-outline-info" onClick={this.handleToggleGamesPlayed}>
                                {showGamesPlayed ? 'Hide Games Played' : 'Show Games Played'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
