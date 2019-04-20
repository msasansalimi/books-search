import React from "react";
import "../styles/Search.css";

function Search(props) {
  return (
    <div className="card-search">
      <div className="card-header">
        <h3>Search for a book to begin!</h3>
      </div>

      <div className="card-body" />
      <form>
        <input
          onChange={props.handleInputChange}
          className="form-control form-control-lg"
          type="text"
          {...props}
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default Search;
