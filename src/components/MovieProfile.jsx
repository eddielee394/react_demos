import React from "react";
import UserList from "./UserList";

//ES6 function with implicit return
const MovieProfile = props => (
  <div className="col-12 col-lg-4" key={props.movieInfo.id}>
    <div className="flip-box">
      <div className="flip flip_horizontal flip-box__multiply">
        <div className="flip__front d-flex flex-column justify-content-center">
          <div className="flip-box__multiply-title  font-weight-bold text-center text text-uppercase pl-lg-5 pr-lg-5 pl-3 pr-3">
            <h2>{props.movieInfo.name}</h2>
          </div>
          <div
            className="flip-box__multiply-decoration mx-auto mb-3"
            style={{
              backgroundImage: `url(/images/movies/movie_${
                props.movieInfo.id
              }.jpg)`,
              backgroundSize: "cover"
            }}
          />
          <div className="row">
            <div className="col col-12">
              <h4 className="text-center">Liked By: </h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-8">
              <UserList
                usersWhoLikedMovie={props.usersWhoLikedMovie}
                users={props.users}
              />
            </div>
          </div>
        </div>
        <div
          className="flip__back  flip-box__bg flip-box__bg_overlay d-flex flex-column justify-content-center"
          style={{
            backgroundImage: `url(/images/movies/movie_${
              props.movieInfo.id
            }.jpg)`
          }}
        />
      </div>
    </div>
  </div>
);

export default MovieProfile;
