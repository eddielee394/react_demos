import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./components/ChatWindow";

//Leave the constant users
const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
    state = {
        messages: []
    };
    
    //update the message state when a new message is sent
    onMessage = (username,message) => {
        //create the new message object
        const newMessage = {
            'username': username,
            'text': message
        };
        
        //now we set the state by concatenating the new message to the state.messages object;
        this.setState(currState => {
            currState.messages.concat([newMessage])
        });
    };

    render() {
        const {messages} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    {users.map(user =>(
                            <ChatWindow key={user.username} user={user} messages={messages} onMessage={this.onMessage}/>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default App;
