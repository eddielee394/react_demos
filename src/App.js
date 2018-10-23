import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: []
  };

  //when the component mounts, we make our ajax call
  componentDidMount() {
    //first we call the getAll() method from the ContactsAPI.  We use `.then` to return the promise from the api and we pass the function contacts back
    ContactsAPI.getAll().then(contacts => {
      //now we can update the component state with the contacts from the api
      this.setState(() => ({
        contacts
      }));
    });
  }

  //takes in contact
  removeContact = contact => {
    //now we can modify the state of the component functional setState
    this.setState(currentState => ({
      //Filters a specific contact and return a new array after removing the contact passed in
      contacts: currentState.contacts.filter(c => {
        //check for the contact id we want to filter/remove
        return c.id !== contact.id;
      })
    }));

    //to remove the contact from the actual database, pass the contact to the api remove() method.
    ContactsAPI.remove(contact);
  };

  // render the ListContacts component if the state is set to 'list', or render the CreateContact component if the state is set to 'create'
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
