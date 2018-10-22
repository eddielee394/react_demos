import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./components/ChatWindow";

//Leave the constant users
const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
    state = {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    };
  /*
   If the user did not type anything, he/she should not be
   allowed to submit.
   */
    isDisabled = () => {
        return false;
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
