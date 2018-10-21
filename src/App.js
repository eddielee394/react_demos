import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as PropTypes from "prop-types";
//Declare temporary const for users
const users = [
  {
    firstName: "John",
    lastName: "Smith",
    username: "jsmith1",
    numGamesPlayed: 0,
    userId: 1
  },
  {
    firstName: "Joan",
    lastName: "Jones",
    username: "jjones1",
    numGamesPlayed: 0,
    userId: 2
  },
  {
    firstName: "Andy",
    lastName: "Cage",
    username: "acage1",
    numGamesPlayed: 0,
    userId: 3
  },
  {
    firstName: "Frank",
    lastName: "Travolta",
    username: "ftravolta1",
    numGamesPlayed: "0",
    userId: 4
  },
  {
    firstName: "Sara",
    lastName: "Pitt",
    username: "spitt1",
    numGamesPlayed: 0,
    userId: 5
  },
  {
    firstName: "Abby",
    lastName: "Clooney",
    username: "aclooney1",
    numGamesPlayed: 0,
    userId: 6
  }
];

class ListUsers extends Component {
  render() {
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

ListUsers.propTypes = { callbackfn: PropTypes.func };

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

User.propTypes = { user: PropTypes.any };

class AddUser extends Component {
  render() {
    const inputIsUnique = (input, key) => {
      for (let user of users) {
        return user[key] !== input;
      }
    };

    return (
      <div className="add-user-container my-5">
        <form>
          <div className="row">
            <div className="col col-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col col-6 justify-content-center align-self-center">
              {/* Display alert based on state change */}
              <div className="alert alert-danger" role="alert">
                Input must be unique
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add +
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark text-center justify-content-center">
          <div className="header-container text-white">
            <h1>Header</h1>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <AddUser />
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <ListUsers
                callbackfn={user => <User user={user} key={user.userId} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
