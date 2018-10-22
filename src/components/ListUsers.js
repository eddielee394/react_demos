import React, { Component } from "react";
import PropTypes from "prop-types";

class ListUsers extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="user-list-container">
        <div className="user-container">
          <h2 className="section-title my-3">All Users</h2>
          <div className="card-columns">{users.map(this.props.callbackfn)}</div>
        </div>
      </div>
    );
  }
}

ListUsers.propTypes = {};

export default ListUsers;
