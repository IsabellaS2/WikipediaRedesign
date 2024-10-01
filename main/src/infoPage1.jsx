import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./styling/infoPage1.css";
import applesImage from "../public/assets/apples.jpg";
import nutritionIcon from "../public/assets/nutritionIcon.png";

export default function InfoPage1() {
  return (
    <>
      <Navbar />

      <div className="infoPageContainer">
        <div className="infoHeaderSection">
          <div className="imageWrapper">
            <img
              className="primaryImage"
              src={applesImage}
              alt="Picture of apples"
            />
          </div>
          <div className="infoTextSection">
            <h4 className="infoTitle">Apples</h4>
            <p className="infoDescription">Apples are a popular and nutritious fruit from the apple tree (Malus domestica), known for their crisp texture and sweet or tart flavour. Widely cultivated worldwide, they come in thousands of varieties and are enjoyed fresh or used in a diverse range of culinary dishes and beverages.</p>
          </div>
        </div>

        <div className="infoContentSection">
          <div className="headerWithIcon">
            <h4 className="sectionTitle">Apple Consumption</h4>
            <img
              className="nutritionIcon"
              src={nutritionIcon}
              alt="Icon of a woman taking a bite out of an apple"
            />
          </div>

          <div className="textWithImage">
            <div className="descriptionWrapper">
            <p className="detailedDescription">
              Apples are incredibly versatile and can be enjoyed in countless
              ways, from a simple, healthy snack to a star ingredient in various
              recipes. You can eat them fresh and whole, sliced with peanut
              butter or cheese, or chopped into salads for a sweet crunch.
            </p>
            <p className="detailedDescription">
              Apples can be baked into pies, crisps, and cakes, where their
              natural sweetness and tartness shine. They make delicious
              applesauce, apple butter, and even refreshing beverages like apple
              juice and cider.
            </p>
            </div>

            <img
              className="secondaryImage"
              src={applesImage}
              alt="Picture of apples"
            />
          </div>
        </div>
      </div>
    </>
  );
}
