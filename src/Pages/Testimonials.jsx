import React from "react";
import "../styles/CardPage.css";
import user1 from "../assets/couple1.png"; 
import { Link } from "react-router-dom";
import temp1 from "../assets/story1.png"; 
import temp2 from "../assets/story2.png"; 
import temp3  from "../assets/story3.png"; 

export default function Couple() {
  return (
    <section className="stories-section">
      {/* Heading */}
      <div className="stories-header">
        <h2>Real Stories, Real Celebrations</h2>
        <p>
          See how Ecovite made moments special for couples and families across India.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-box">
          <h3>500+</h3>
          <p>Indian Weddings Made Special</p>
        </div>
        <div className="stat-box">
          <h3>98%</h3>
          <p>User Satisfaction Rate</p>
        </div>
        <div className="stat-box">
          <h3>1200+</h3>
          <p>Happy Couples & Families</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="stories-header">
        <h2>What Our Couples Say</h2>
        <p>
          Real stories from people who made their special moments even more memorable,
          the eco-friendly way.
        </p>
      </div>

      <div className="testimonial-grid">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div className="testimonial-card" key={id}>
            {/* Left */}
            <div className="testimonial-left">
              <p>
                Ecovite made our wedding invitations unforgettable. It was easy,
                elegant, and we got so many compliments from guests!
              </p>
              <div className="stars">★★★★★</div>
            </div>

            {/* Right */}
            <div className="testimonial-right">
              <img src={user1} alt="user" />
              <h4>Priya & Arjun</h4>
            </div>
          </div>
        ))}
      </div>
<div className="dots">
          <button className="chevron-btn">❮</button>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
            <button className="chevron-btn">❯</button>
        </div>
      
      
        {/* ----------- NEW SECTION (Screenshot Wala) ----------- */}
      <div className="watch-stories">
        <h2>Watch their stories</h2>

        <div className="watch-cards">
          <div className="watch-card">
            <img src={temp1} alt="Priya & Arjun" />
            <p>How they found the perfect invitation.</p>
            <h3>Priya & Arjun</h3>
          </div>

          <div className="watch-card">
            <img src={temp2} alt="The Singh Family" />
            <p>Sharing their wedding planning experience.</p>
            <h3>The Singh Family</h3>
          </div>

          <div className="watch-card">
            <img src={temp3} alt="Anjali & Rohan" />
            <p>Their favorite design journey.</p>
            <h3>Anjali & Rohan</h3>
          </div>
        </div>

        {/* dots niche bilkul screenshot jaise */}
        <div className="dots">
          <button className="chevron-btn">❮</button>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
            <button className="chevron-btn">❯</button>
        </div>
      </div>
      <div className="button-container">
        <h1>Over 500 love stories started here. Design yours now.</h1>
        <button className="browse">Browse Templates</button>
          <button className="see">See Plans</button>
      </div>
    </section>
  );
}
