import React from "react";
import "../styling/Navbar.css";

function Navbar() {
   return (
      <div className="navBar">
            <a id="iconLogo" href="/">Wikipedia</a>
            <a className="NavText" href="#">Search</a>
            <a className="NavText" id="leftSection" href="#">About Us</a>
      </div>
   );
}

export default Navbar;
