import React from "react";
import "../styles/Aboutus.css";
import aboutImg from "../assets/about.png"; // replace with your image

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* LEFT SIDE */}
        <div className="about-text">
          <h2>About us</h2>
          <h3>
            Rooted in Tradition, Growing <br /> with Purpose
          </h3>
          <p>
            At Ecovite, we blend timeless Indian wedding traditions with
            eco-conscious innovation. Our mission is to help couples celebrate
            their love beautifully, while caring for the planet with every
            invitation sent.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image-box">
          <img src={aboutImg} alt="About Ecovite" />
        </div>
      </div>
    </section>
  );
}
