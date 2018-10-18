import React, { Component } from "react";
import UserProfile from "./UserProfile";

class ListUserProfiles extends Component {
  render() {
    //assign the movies and users objects to the this.props, so we have full access to both objects
    const { profiles, movies, users } = this.props;

    //ES6 destructured function with key mapping by profile id
    const userProfiles = Object.keys(profiles).map(id => (
      <UserProfile
        key={id}
        profile={profiles[id]}
        users={users}
        movies={movies}
      />
    ));

    return <div className="row">{userProfiles}</div>;
  }
}

export default ListUserProfiles;
