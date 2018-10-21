import React, { Component } from "react";
import * as PropTypes from "prop-types";

class AddItem extends Component {
  state = {
    value: ""
  };

  //set the component state value to the input value on the onChange event
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  //add the item event
  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  //checks if the input is empty
  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </React.Fragment>
    );
  }
}

AddItem.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onAddItem: PropTypes.func.isRequired
};

export default AddItem;
