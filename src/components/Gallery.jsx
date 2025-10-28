import React from "react";
import "../styles/Gallery.css";
import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";
import img8 from "../assets/gallery8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>From Our Celebrations</h2>
        <h3>#EcoviteMoments</h3>
        <p>
          Real stories, real celebrations — eco-friendly and beautifully crafted.
          Join our journey from moments to milestones.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className={`gallery-card card-${index + 1}`}>
            <img src={img} alt={`moment-${index + 1}`} />
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
