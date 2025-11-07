import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">My Template Gallery</h1>
      <p className="subtitle">Select any template to view it</p>

      <div className="template-grid">
        <Link to="/template1" className="template-card">Template 1</Link>
        <Link to="/template2" className="template-card">Template 2</Link>
        <Link to="/template3" className="template-card">Template 3</Link>
        <Link to="/template4" className="template-card">Template 4</Link>
        <Link to="/template5" className="template-card">Template 5</Link>
        <Link to="/template6" className="template-card">Template 6</Link>
        <Link to="/template7" className="template-card">Template 7</Link>
      </div>
    </div>
  );
};

export default Home;
