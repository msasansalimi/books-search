import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
//import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="container-fullwidth">
          <Navbar />
          <Route exact path="/" component={Books} />
          <Route exact path="/home" component={Books} />
          <Route exact path="/saved" component={Saved} />
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
