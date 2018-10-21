import React, { Component } from "react";
import PropTypes from "prop-types";
//stateless function
class ListContacts extends Component {
  state = {
    query: ""
  };

  /*
   input field state update query
    - The user enters text into the input field.
    - The onChange event listener invokes the updateQuery() function.
    - updateQuery() then calls setState(), merging in the new state to update the component's internal state.
    - Because its state has changed, the ListContacts component re-renders.
   */
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };

  /*
  Resets the input form by using the updateQuery method to pass an empty string to the state query.
  */
  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    //Destructure the variables
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    //filter contacts on search functionality.
    const showingContacts =
      //if query is empty just return contacts
      query === ""
        ? contacts
        : //filter contacts by query
          contacts.filter(c =>
            //only include contacts by name (lowercase), in the query after it's been normalized to lower case also.
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* bind input field to state in the onChange param */}
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {/* if the returned results are not equal to ALL results, then display the showing-contacts div */}
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
              <button onClick={this.clearQuery}>Show all</button>
            </span>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };
}

export default ListContacts;
