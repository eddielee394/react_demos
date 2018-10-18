import React, { Component } from "react";

class ListUserProfiles extends Component {
  render() {
    //assign the movies and users objects to the this.props, so we have full access to both objects
    const { movies, users } = this.props;

    return (
      <div className="row">
        {this.props.profiles.map(profile => (
          <div className="col-12 col-lg-4" key={profile.id}>
            <div className="flip-box">
              <div className="flip flip_horizontal flip-box__multiply">
                <div className="flip__front d-flex flex-column justify-content-center">
                  <div className="flip-box__multiply-title  font-weight-bold text-center text text-uppercase pl-lg-5 pr-lg-5 pl-3 pr-3">
                    <h1>{users[profile.userID].name}</h1>
                  </div>
                  <div
                    className="flip-box__multiply-decoration mx-auto"
                    style={{
                      backgroundImage: `url(/images/users/user_${
                        profile.userID
                      }.jpg)`,
                      backgroundSize: "cover"
                    }}
                  >
                    <i
                      className="fal fa-angle-right font__size-28 font__weight-thin"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="btn btn-outline-info font-weight-bold shadow-lg p-3 flip-box__multiply-btn mt-5 align-self-center">
                    <span className="text">Hover Me!!!</span>
                  </span>
                </div>
                <div
                  className="flip__back  flip-box__bg flip-box__bg_overlay d-flex flex-column justify-content-center"
                  style={{
                    backgroundImage: `url(/images/movies/movie_${
                      profile.favoriteMovieID
                    }.jpg)`
                  }}
                >
                  <div className="flip-box__position  text-center">
                    <h1 className="flip-box__multiply-h4  font-weight-bold">
                      {movies[profile.favoriteMovieID].name}
                    </h1>
                    <button className="btn btn-outline-info font-weight-bold shadow-lg p-3 flip-box__multiply-btn mt-5">
                      <span className="text text-white">
                        View {users[profile.userID].userName}
                        's Profile
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListUserProfiles;
