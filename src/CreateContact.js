import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends Component {
  //when form is submitted, data is serialized and passed back to the api via url params
  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });

    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }
  };

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button className="btn btn-primary">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

CreateContact.propTypes = {};

export default CreateContact;
