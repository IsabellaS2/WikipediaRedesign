import React from "react";
import "../styling/Navbar.css";

function Navbar() {
   return (
      <div className="navBar">
         <div className="leftSection">
            <a id="iconLogo" href="/">Wikipedia</a>
            <a className="NavText" href="#">Search</a>
         </div>
         <div className="rightSection">
            <a className="NavText" href="#">About Us</a>
         </div>
      </div>
   );
}

export default Navbar;
