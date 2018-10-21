import React from "react";
import * as PropTypes from "prop-types";

function ItemsList(props) {
  return (
    <div className="item-list-container">
      <p className="items">Items</p>
      <ol className="item-list">{props.items.map(props.callbackfn)}</ol>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  callbackfn: PropTypes.func
};

export default ItemsList;
