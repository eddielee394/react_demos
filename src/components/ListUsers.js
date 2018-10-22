import React from "react";
import User from "./User";
import PropTypes from 'prop-types';

function ListUsers(props) {
    const {users} = props;
    
    return (<div className="user-list-container">
        <div className="user-container">
            <h2 className="section-title my-3">All Users</h2>
            <div className="card-columns">
                {users.map(user => (<User user={user} key={user.username}/>))}
            </div>
        </div>
    </div>);
}

ListUsers.propTypes = {
    users: PropTypes.array.isRequired
};

export default ListUsers;
