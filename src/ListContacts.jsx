import React from "react";

//stateless function
function ListContacts(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
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
            //invoke the onDeleteContact function when the button is clicked
            onClick={() => props.onDeleteContact(contact)}
          >
            Remove
          </button>
          {console.log("Props", props)}
        </li>
      ))}
    </ol>
  );
}

export default ListContacts;
