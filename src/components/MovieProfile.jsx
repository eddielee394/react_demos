import React, { Component } from "react";
import UserList from "./UserList";

class MovieProfile extends Component {
  render() {
    //Destructure the props
    const { users, usersWhoLikedMovie, movieInfo } = this.props;

    return (
      <div className="col-12 col-lg-4" key={movieInfo.id}>
        <div className="flip-box">
          <div className="flip flip_horizontal flip-box__multiply">
            <div className="flip__front d-flex flex-column justify-content-center">
              <div className="flip-box__multiply-title  font-weight-bold text-center text text-uppercase pl-lg-5 pr-lg-5 pl-3 pr-3">
                <h1>{movieInfo.name}</h1>
              </div>
              <div
                className="flip-box__multiply-decoration mx-auto"
                style={{
                  backgroundImage: `url(/images/movies/movie_${
                    movieInfo.id
                  }.jpg)`,
                  backgroundSize: "cover"
                }}
              />
              <span className="btn btn-outline-info font-weight-bold shadow-lg p-3 flip-box__multiply-btn mt-5 align-self-center">
                <span className="text">Hover Me!!!</span>
              </span>
            </div>
            <div
              className="flip__back  flip-box__bg flip-box__bg_overlay d-flex flex-column justify-content-center"
              style={{
                backgroundImage: `url(/images/movies/movie_${movieInfo.id}.jpg)`
              }}
            />
            <div className="flip-box__position  text-center">
              <h1 className="flip-box__multiply-h4  font-weight-bold">
                {/*{movies[profile.favoriteMovieID].name}*/}
              </h1>
              <button className="btn btn-outline-info font-weight-bold shadow-lg p-3 flip-box__multiply-btn mt-5">
                <span className="text text-white">
                  {/*View {users[profile.userID].userName}*/}
                  's Profile
                </span>
              </button>
            </div>

            {/*<div className="flip-box__position  text-center">*/}
            {/*<h3>Liked by: </h3>*/}
            {/*<UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieProfile;
