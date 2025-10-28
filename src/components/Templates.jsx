import React from "react";
import "../styles/Templates.css";
import img1 from "../assets/invitationcard1.png"; // replace with your images
import img2 from "../assets/invitationcard2.png";
import img3 from "../assets/invitationcard1.png";
import { Link } from "react-router-dom";

export default function TemplatesSection() {
  return (
    <section className="templates-section">
      <h2>Explore Our Beautiful Invitation Templates</h2>
      <p className="subtitle">
        Choose from modern, eco-friendly designs tailored for weddings, and more
        which are easy to customize, easy to love.
      </p>

      <div className="templates-grid">
        {/* Card 1 */}
        <div className="template-card">
          <img src={img1} alt="Elegant Floral" className="template-img" />
          {/* <h3>Elegant Floral</h3> */}
          <p>
            {/* Soft watercolor florals and gentle serif typography make this perfect
            for romantic garden weddings and timeless celebrations. */}
          </p>
          <button className="details-btn">See Details</button>
        </div>

        {/* Card 2 */}
        <div className="template-card">
          <img src={img2} alt="Elegant Floral" className="template-img" />
          {/* <h3>Elegant Floral</h3> */}
          <p>
            {/* Soft watercolor florals and gentle serif typography make this perfect
            for romantic garden weddings and timeless celebrations. */}
          </p>
          <Link to="/Demo">
          <button className="details-btn">See Details</button></Link>
        </div>

        {/* Card 3 */}
        <div className="template-card">
          <img src={img3} alt="Elegant Floral" className="template-img" />
          {/* <h3>Elegant Floral</h3> */}
          <p>
            {/* Soft watercolor florals and gentle serif typography make this perfect */}
            {/* for romantic garden weddings and timeless celebrations. */}
          </p>
          <button className="details-btn">See Details</button>
        </div>
      </div>
    </section>
  );
}
