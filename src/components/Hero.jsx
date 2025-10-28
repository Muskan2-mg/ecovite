import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/home.png"; // replace with your image

export default function Home() {
  return (
    <div>
      {/* Green background section with image */}
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </section>
    </div>
  );
}
