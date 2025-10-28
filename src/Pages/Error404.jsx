import React from "react";
import "../styles/Error404.css";
import { Router } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error404-container">
      <div className="error404-content">
        <div className="error404-bg">
          <h1 className="error404-title">404</h1>
        </div>

        <p className="error404-line">“You Found a Love, Not the Page.”</p>
        <p className="error404-subtext">
          We’ll help you find your way — just like we do with weddings.
        </p>

        <div className="error404-buttons">
          <button className="btn-primary">Back to Home</button>
          <button className="btn-outline">Explore Templates</button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
