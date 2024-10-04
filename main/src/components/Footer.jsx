import React from "react";
import "../styling/Footer.css";

function Footer({ bgColor }) {
  return (
    <div className="footerDiv" style={{ backgroundColor: bgColor }}>
      <h1 className="footerNameText">
        © 2024 Designed and Developed by Isabella Sulisufi
      </h1>
    </div>
  );
}

export default Footer;
