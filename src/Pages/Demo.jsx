import React from "react";
import "../styles/Demo.css";
import couple1 from "../assets/Demo1.png"; // replace with your image
import { Router } from "react-router-dom";

export default function TemplatePage() {
  return (
    <div className="template-page">
      {/* Top Bar */}
      {/* <div className="top-bar">
        <span>Call Us : +91 8658888979</span>
      </div> */}

      {/* Header
      <header className="header">
        <div className="logo">ecovite</div>
        <nav className="nav">
          <a href="#">DEMO</a>
          <a href="#">Subscription</a>
          <a href="#">How to use</a>
          <a href="#">Offers</a>
        </nav>
        <button className="profile-btn">Profile</button>
      </header> */}

      {/* Product Section */}
      <section className="product">
        <div className="product-left">
          <img src={couple1} alt="Elegant Floral" className="main-img" />

          <div className="thumbnail-row">
            <img src={couple1} alt="thumb" />
            <img src={couple1} alt="thumb" />
            <img src={couple1} alt="thumb" />
          </div>
        </div>

        <div className="product-right">
          <h2>Wedding Invitation</h2>
          <h1>Elegant Floral</h1>

          <div className="tags">
            <span>Wedding</span>
            <span>Floral</span>
            <span>Elegant</span>
            <span>Formal</span>
            <span>Digital</span>
            <span>Romantic</span>
          </div>

          <p className="desc">
            A beautifully designed digital wedding invitation featuring delicate
            floral illustrations and classic typography. Perfect for a romantic
            and timeless celebration. Easily customize text, colors, and photos
            to match your theme.
          </p>

          <div className="buttons">
            <button className="btn customize">Customize</button>
            <button className="btn demo">View Demo</button>
            <button className="btn cart">Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Explore Other Designs */}
      <section className="explore">
  <h2>Explore Other Designs</h2>
  <p>Take a look at our other signature templates.</p>

  <div className="explore-grid">
    <div className="explore-card">
      <img src={couple1} alt="design" />
      <p>Welcome to Aarav & Meera's Wedding</p>
    </div>
    <div className="explore-card">
      <img src={couple1} alt="design" />
      <p>Save the Date - Vishal & Sneha</p>
    </div>
    <div className="explore-card">
      <img src={couple1} alt="design" />
      <p>Welcome to Aarav & Meera's Wedding</p>
    </div>
  </div>
<p>Need help choosing?</p>
  {/* Two buttons below all cards */}
  <div className="button-group">
    <button className="btn">Contact Us</button>
    <p>Or</p>
    <button className="btn">Request a Custom Design</button>
  </div>
</section>

    </div>
  );
}
