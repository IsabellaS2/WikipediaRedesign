import React from "react";
import "./styling/index.css";
import Navbar from "./components/Navbar.jsx";
import HomeCards from "./components/HomeCards.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div className="homeContainer">
        <h1 className="mainHeadertitle">Wikipedia</h1>
        <h3>Welcome to this page</h3>
        <div className="homecards">
          <HomeCards
            imgSrc="./new-react-vite/public/assets/apples.jpg"
            title="Apples"
            text="Apples are a popular and nutritious fruit from the apple tree known for their crisp texture and sweet or tart flavor."
            link="#"
          />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
