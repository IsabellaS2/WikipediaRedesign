import React from 'react';
import "./styling/index.css"; // Updated path to reflect the new location
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="mainHeadertitle">Wikipedia</h1>
      <h3>Welcome to this page</h3>
    </>
  );
}

export default App;
