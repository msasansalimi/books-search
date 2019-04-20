import React from "react";
import "../styles/DelBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span
      className="delete-btn"
      onClick={event => props.handleDeleteButton(event, props.id)}
      role="button"
      tabIndex="0"
    >
      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </span>
  );
}

export default DeleteBtn;
