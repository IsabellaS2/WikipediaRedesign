import React from "react";
import "../styling/HomeCard.css";

function HomeCards({ imgSrc, title, text, link }) {
   return (
      <div className="homeCardContainer">
         <img className="homeCardImg" src={imgSrc} alt={title} />
         <div className="homeCardTextSection">
            <h4 className="homeCardTitle">{title}</h4>
            <p className="homeCardText">{text}</p>
            <a className="homeCardLink" href={link}>Learn more</a>
         </div>
      </div>
   );
}

export default HomeCards;
