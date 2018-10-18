import React, { Component } from "react";
import MovieProfile from "./MovieProfile";

class ListMovieProfiles extends Component {
  render() {
    //assign the movies and users objects to the this.props, so we have full access to both objects
    const { movies, users, usersByMovie } = this.props;

    //ES6 destructured function with key mapping by id
    const movieProfiles = Object.keys(movies).map(id => (
      <MovieProfile
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

    return <div className="row">{movieProfiles}</div>;
  }
}

export default ListMovieProfiles;
