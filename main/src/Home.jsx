import React, { useEffect, useState } from "react";
import "./styling/Home.css";
import Navbar from "./components/Navbar.jsx";
import HomeCards from "./components/HomeCards.jsx";
import Footer from "./components/Footer.jsx";
import Axios from "axios";

export default function Home() {
  const [catData, setCatData] = useState([]);

  // Move these constants outside of the useEffect
  const baseURL = "https://api.thecatapi.com/v1/images/search"; // Base URL
  const apikey = "live_YUQtu7qoUFuzzmPawdXulxfge0eTVlkGdxaLgaI5m0vcROtnGDxSNkSrs3kVvuy3"; // Your API key
  const limit = 10; // Limit for the number of images

  // Constructed API URL with query parameters
  const apiUrl = `${baseURL}?limit=${limit}&api_key=${apikey}`;

  useEffect(() => {
    Axios.get(apiUrl)
      .then((res) => setCatData(res.data)) // Store the array of cat images
      .catch((error) => console.log(error));
  }, [apiUrl]); // Adding apiUrl as a dependency

  // Extract URLs for the first two images, if available
  const catImages = catData.slice(0, 2).map(cat => cat.url);

  return (
    <React.Fragment>
      <Navbar bgColor="#F5F5F5" borderColor="#6BA8A9" />

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
                alt="Search Icon"
              />
            </a>
          </div>
        </div>

        <div className="globeIconContainer">
          <img
            className="globeIcon"
            src="./main/public/assets/globeIcon.png" 
            alt="Globe Icon"
          />
        </div>

        <div className="homeCardSection">
          <div className="topCard">
            <HomeCards
              imgSrc={catImages[0] || "./main/public/assets/defaultCat.jpg"} 
              title="Cat 1" // Soon will be replaced with the actual cat name and lead to cat's Wikipedia page
              text="A cute cat image fetched from the Cat API."
              link="#"
            />
          </div>

          <div className="bottomCard">
            <HomeCards
              imgSrc={catImages[1] || "./main/public/assets/defaultCat.jpg"} 
              title="Cat 2" // Soon will be replaced with the actual cat name and lead to cat's Wikipedia page
              text="Another cute cat image fetched from the Cat API."
              link="#"
            />
          </div>
        </div>
      </div>
      <Footer bgColor="#4F8787" />
    </React.Fragment>
  );
}
