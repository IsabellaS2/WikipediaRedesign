import React from "react";
import "./styling/Home.css";
import Navbar from "./components/Navbar.jsx";
import HomeCards from "./components/HomeCards.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar bgColor="#F5F5F5" borderColor="#6BA8A9"/>

      <div className="homeContainer">
        <div className="leftContainer">
          <h1 className="mainHeadertitle">Wikipedia</h1>
          <h3>Connecting You to the World’s Knowledge, One Search at a Time</h3>
          <div className="searchSection">
            <input
              className="searchBar"
              type="text"
              placeholder="Searching Wikipedia..."
            />
            <a href="#">
              <img
                className="searchIcon"
                src="./main/public/assets/searchIcon.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="globeIconContainer">
          <img
            className="globeIcon"
            src="./main/public/assets/globeIcon.png" /* Add the correct path to your globe icon */
            alt="Globe Icon"
          />
        </div>

        <div className="homeCardSection">
          <div className="topCard">
            <HomeCards
              imgSrc="./main/public/assets/apples.jpg"
              title="Apples"
              text="Apples are a popular and nutritious fruit from the apple tree known for their crisp texture and sweet or tart flavor."
              link="#"
            />{" "}
          </div>

          <div className="bottomCard">
            <HomeCards
              imgSrc="./main/public/assets/apples.jpg"
              title="Apples"
              text="Apples are a popular and nutritious fruit from the apple tree known for their crisp texture and sweet or tart flavor."
              link="#"
            />{" "}
          </div>
        </div>
        
        
      </div>
      <Footer bgColor="#4F8787" />

    </React.Fragment>
  );
}
