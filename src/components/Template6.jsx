import React, { useState } from "react";
import "../styles/Template6.css";

// ===== Imports: Images & Assets =====
import coupleImg from "../assets/3couple.png";
import photogallery from "../assets/3photogallery.png";
import titleBg from "../assets/wdtimeline.png";
import circleBg from "../assets/3bgcircle.png";
import heartIcon from "../assets/3hearticon.png";
import img1 from "../assets/3gallery1.png";
import img2 from "../assets/3gallery2.png";
import img3 from "../assets/3gallery3.png";
import img4 from "../assets/3gallery4.png";
import img5 from "../assets/3gallery5.png";
import img6 from "../assets/3gallery6.png";
import img7 from "../assets/3gallery7.png";

function Invitation3() {
  const [attending, setAttending] = useState("yes");

  const events = [
    {
      title: "Baraat Arrival",
      desc: "The groom’s grand procession with dhol and dance.",
      time: "4:30 PM",
    },
    {
      title: "Saat Pheras",
      desc: "Sacred vows around the holy fire.",
      time: "5:30 PM",
    },
    {
      title: "Cocktail Hour",
      desc: "Drinks & appetizers before the reception.",
      time: "6:30 PM",
    },
    {
      title: "Dinner & Dancing",
      desc: "Celebrate with dinner, music, and dancing.",
      time: "7:30 PM",
    },
  ];

  return (
    <div className="T3-invitation">
      {/* ==================== Couple Section ==================== */}
      <div className="T3-invite-container">
        <div className="T3-invite-card">
          <div className="T3-header-image">
            <img src={coupleImg} alt="Couple" />
          </div>

          <p className="T3-quote">“Two hearts, one love, endless dreams”</p>
          <p className="T3-sub-quote">- Our Beginning</p>

          <div className="T3-divider-dots">
            <span className="T3-dot T3-active"></span>
            <span className="T3-dot"></span>
            <span className="T3-dot"></span>
          </div>

          <h1 className="T3-couple-name">
            Priya <span className="T3-and-symbol">&amp;</span> Arjun
          </h1>
          <div className="T3-underline"></div>

          <p className="T3-family-text">Together with our families</p>
          <p className="T3-invite-text">
            Request the honor of your presence at our wedding celebration
          </p>

          <p className="T3-date">Saturday, June 15th, 2025</p>
          <p className="T3-time">4:00 PM</p>
        </div>
      </div>

      {/* ==================== Venue Section ==================== */}
      <section className="T3-invite-container">
        <div className="T3-venue-card">
          <h2 className="T3-venue-title">Venue Details</h2>
          <div className="T3-venue-divider"></div>

          <p className="T3-venue-name">The Fern Garden</p>
          <p className="T3-venue-location">Udaipur, Rajasthan</p>
          <p className="T3-venue-description">
            A serene garden venue surrounded by lush greenery.
          </p>
        </div>
      </section>

      {/* ==================== Map Section ==================== */}
      <div className="T3-card-map">
        <h3>How to Get There</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14512.434679764357!2d73.7125763!3d24.5854456!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1758204869500!5m2!1sen!2sin"
          width="400"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        <a
          href="https://www.google.com/maps/place/The+Fern+Garden/@24.5854456,73.7125763,15z"
          target="_blank"
          rel="noreferrer"
          className="T3-btn"
        >
          View on Google Maps
        </a>
      </div>

      {/* ==================== Timeline Section ==================== */}
      <div className="T3-timeline-section">
        <div className="T3-timeline-card">
          <div
            className="T3-timeline-title"
            style={{ backgroundImage: `url(${titleBg})` }}
          ></div>

          <div className="T3-timeline-content">
            <div className="T3-timeline-line"></div>

            {events.map((event, index) => (
              <div key={index} className="T3-timeline-item">
                <div
                  className="T3-timeline-circle"
                  style={{ backgroundImage: `url(${circleBg})` }}
                >
                  <span>{event.title}</span>
                </div>

                <div className="T3-timeline-details">
                  <img src={heartIcon} alt="heart" className="T3-heart-icon" />
                  <p className="T3-timeline-desc">{event.desc}</p>
                  <p className="T3-timeline-time">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== Gallery Section ==================== */}
      <div className="T3-gallery-section">
        <div
          className="T3-timeline-title"
          style={{ backgroundImage: `url(${photogallery})` }}
        ></div>

        <div className="T3-gallery-grid">
          {[img1, img2, img3, img4, img5, img6, img7].map((img, i) => (
            <div
              key={i}
              className={`T3-gallery-item ${i === 3 || i === 7 ? "T3-wide" : ""}`}
            >
              <img src={img} alt={`Wedding ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ==================== RSVP Section ==================== */}
      <div className="T3-rsvp-card">
        <h2 className="T3-rsvp-title">RSVP</h2>
        <p className="T3-rsvp-subtitle">Please respond by May 1st, 2025</p>

        <div className="T3-rsvp-radio">
          <p>Will you be attending?</p>
          <div className="T3-radio-group">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
              />
              <span>Yes</span>
            </label>

            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <form className="T3-rsvp-form">
          <div className="T3-form-row">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Mobile Number" required />
          </div>

          <div className="T3-form-row">
            <input type="email" placeholder="Email" required />
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          <div className="T3-form-row">
            <select>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Both</option>
            </select>
          </div>

          <div className="T3-form-row">
            <input type="text" placeholder="Special Notes (optional)" />
          </div>

          <button type="submit" className="T3-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Invitation3;
