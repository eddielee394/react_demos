import React, { Component } from "react";
import PropTypes from "prop-types";

class AddUser extends Component {
    //create the initial state of the user and validation
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: ''
        },
        userExists: false
    };
    
    //validate if the input field is unique, defaults to check the username field
    inputIsUnique = (input, key='username') => {
        const users = this.props.users;
        for (let user of users) {
            if(user[key] === input) {
                return true;
            }
        }
        return false
    };
    
    //check if input is empty
    inputIsEmpty = () => {
        const {firstName, lastName, username} = this.state.user;
        return firstName === '' || lastName === '' || username === '';
    };
    
    handleSubmit = event => {
        //stop the default submit event from firing
        event.preventDefault();
        //now we can check if the input is unique or not
        const userExists = this.inputIsUnique(this.state.user.username);
        console.log(userExists);
        
        if(!userExists) {
            this.props.onAddUser(this.state.user);
        }
        //now we have to set the state
        this.setState(() => ({
            userExists
        }))
    };
    
    //handle the logic to set the state when onChange event fires for each input
    handleInputChange = event => {
        const {name, value} = event.target;
        //compare the current state with the input value
        this.setState(currState => ({
            //use the spread operator to get all of the params in the user array from the state
            ...currState, user: {
                ...currState.user, [name]: value,
            },
        }))
    };
    
    render() {
        const {firstName, lastName, username} = this.state.user;
        return (
            <div className="add-user-container my-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col col-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col col-6 justify-content-center align-self-center">
                            { this.state.userExists ?
                                <div className="alert alert-danger" role="alert">
                                    Input must be unique
                                </div> : ('')}
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={this.inputIsEmpty()}
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired, users: PropTypes.array.isRequired,
};

export default AddUser;
