import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="container-fullwidth">
      <nav className="navbar navbar-expand-lg variant=light bg-dark">
        <a className="navbar-brand" href="/">
          Google Books
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
                Saved
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid">
        <h1>(React) Google Books Search</h1>
        <h3>
          Search the books you are interested in, Save them or Delete them from
          your list!{" "}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
