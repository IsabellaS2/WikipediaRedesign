import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <Link id="iconLogo" to="/">Wikipedia</Link>
      <Link className="NavText" to="/infopage1">Search</Link>
      <Link className="NavText" id="leftSection" to="#">About Us</Link>
    </div>
  );
}

export default Navbar;
