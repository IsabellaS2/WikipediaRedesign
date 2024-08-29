import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Home.jsx";
// import "./styling/index.css"; // Updated path to reflect the new location
import "./styling/index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
