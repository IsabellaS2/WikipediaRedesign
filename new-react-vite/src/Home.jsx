import React from "react";
import "./styling/index.css";
import Navbar from "./components/Navbar.jsx";
import HomeCards from "./components/HomeCards.jsx";

function App() {
  return (
    <>
      <Navbar />

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
              <img className="searchIcon" src="./new-react-vite/public/assets/searchIcon.png" alt="" />
            </a>
          </div>
        </div>

        <div className="globeIconContainer">
        <img
            className="globeIcon"
            src="./new-react-vite/public/assets/globeIcon.png" /* Add the correct path to your globe icon */
            alt="Globe Icon"
          />

        </div>

        <div className="homeCardSection">
          <div className="topCard">
            <HomeCards
              imgSrc="./new-react-vite/public/assets/apples.jpg"
              title="Apples"
              text="Apples are a popular and nutritious fruit from the apple tree known for their crisp texture and sweet or tart flavor."
              link="#"
            />{" "}
          </div>

          <div className="bottomCard">
            <HomeCards
              imgSrc="./new-react-vite/public/assets/apples.jpg"
              title="Apples"
              text="Apples are a popular and nutritious fruit from the apple tree known for their crisp texture and sweet or tart flavor."
              link="#"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
