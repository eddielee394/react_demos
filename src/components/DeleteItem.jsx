import React from "react";
import PropTypes from "prop-types";

const DeleteItem = props => {
  const handleDeleteItem = event => {
    props.onDeleteItem();
  };
  return (
    <button onClick={handleDeleteItem} disabled={props.buttonDisabled}>
      Delete Last Item{" "}
    </button>
  );
};

DeleteItem.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default DeleteItem;
