import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="card user-card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="user-avatar-container rounded-circle my-3">
          <img src="http://i.pravatar.cc/150" className="rounded-circle" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.user.username}</h5>
          <p className="card-text">
            This user has played {this.props.user.numGamesPlayed} games{" "}
          </p>
          <div className="card-footer">
            <div className="show-game-button-container my-3">
              <button className="btn btn-outline-info">
                Hide Games Played
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
