import React, { Component } from "react";

class UserList extends Component {
  render() {
    //destructure the const's
    const { users, usersWhoLikedMovie } = this.props;

    //if there are no users that liked this movie
    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0) {
      return <p>None of the current users liked this movie.</p>;
    }

    //loop through the users that liked this movie
    const listOfUsers = usersWhoLikedMovie.map(id => (
      <li key={id}>
        <p>{users[id].name}</p>
      </li>
    ));

    //return the list of users that liked the movie
    return <ul>{listOfUsers}</ul>;
  }
}

export default UserList;
