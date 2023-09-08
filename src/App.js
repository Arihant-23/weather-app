import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">Download Source Code</a> | Developed by{" "}
        <a target="" href="Portfoliowebsitetobemade">
          Arihant Shokeen
        </a>{" "}
      </div>
    </>
  );
}

export default App;
