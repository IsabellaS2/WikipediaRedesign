import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar({ bgColor, borderColor }) {
  return (
    <div
      className="navBar"
      style={{
        backgroundColor: bgColor, 
        borderBottom: `1px solid ${borderColor}`, 
      }}
    >
      <Link id="iconLogo" to="/">Wikipedia</Link>
      <Link className="NavText" to="/infopage1">Search</Link>
      <Link className="NavText" id="leftSection" to="#">About Us</Link>
    </div>
  );
}

Navbar.propTypes = {
  bgColor: PropTypes.string.isRequired,     
  borderColor: PropTypes.string.isRequired, 
};

export default Navbar;