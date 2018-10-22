import React, { Component } from "react";
import "./App.css";
import * as PropTypes from "prop-types";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import User from "./components/User";

class App extends Component {
  state = {
    users: []
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user]
    }));
  };

  render() {
    const { users } = this.state;
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
              <AddUser users={users} onAddUser={this.createContact} />
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <ListUsers
                users={users}
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
