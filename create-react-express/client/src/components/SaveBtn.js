import React from "react";
import "../styles/SaveBtn.css";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span
      className="save-btn"
      onClick={e => props.handleSaveButton(e, props.id)}
      role="button"
      tabIndex="0"
    >
      <button type="save-button" className="btn btn-primary">
        Save
      </button>
    </span>
  );
}

export default SaveBtn;
