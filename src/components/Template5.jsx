import React, { useState } from "react";
import "../styles/Template4.css";

// === Assets ===
import coupleborderImg from "../assets/frame6.png";
import coupleImg from "../assets/coupleimg.png"; 
import rsvpbottom from "../assets/rsvpbottom.png";
import rsvphead from "../assets/rsvphead.png";
import gallery1 from "../assets/invite1.png";
import gallery2 from "../assets/invite2.png";
import gallery3 from "../assets/invite3.png";
import gallery4 from "../assets/invite4.png";
import gallery5 from "../assets/invite5.png";
export default function WeddingSchedule() {
  const [attending, setAttending] = useState("yes");

  const schedule = [
    { id: 1, title: "Muhurta Pooja", time: "7:00 AM", desc: "Rituals and prayers to begin the wedding day." },
    { id: 2, title: "Ganpati Poojan", time: "11:30 AM", desc: "Prayers to Lord Ganesha for blessings." },
    { id: 3, title: "Wedding Ceremony", time: "1:00 PM", desc: "Sacred rituals and mangalāṣṭakas uniting the couple." },
    { id: 4, title: "Lunch", time: "2:30 PM", desc: "Traditional Maharashtrian wedding feast." },
    { id: 5, title: "Varat", time: "5:30 PM", desc: "Bride and groom’s grand entry with music and dancing." },
  ];

  return (
    <>
      {/* -------------------- COUPLE IMAGE (Top Section) -------------------- */}
       <div className="wedding-container">
      <div className="border-wrapper">
        <img src={coupleborderImg} alt="Border" className="border-bg" />

        {/* Everything overlays on top of border */}
        <div className="overlay-content">
          <div className="couple-border">
            <img src={coupleImg} alt="Couple" className="couple-photo" />
          </div>

          <div className="names-row">
            <div className="name-block">
              <p className="prefix">Miss</p>
              <h2 className="name">Priya</h2>
            </div>
            <div className="name-block">
              <p className="prefix">Mr.</p>
              <h2 className="name">Arjun</h2>
            </div>
          </div>

         

          <div className="wedding-text">
            <p className="small-text">Their</p>
            <h3 className="title">Auspicious</h3>
            <h3 className="title">Wedding</h3>
          </div>
        </div>
      </div>
 </div>
      {/* -------------------- VENUE -------------------- */}
      <div className="wedding-container">
        <div className="wedding-card">
          <section className="venue-section">
            <h2 className="venue-heading">Venue</h2>
            <div className="venue-details">
              <p className="venue-name">The Orchid Hotel, Pune</p>
              <p className="venue-address">
                Near Balewadi Stadium, Pune–Bangalore Highway, Pune 411045
              </p>
            </div>

            <iframe
              title="Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.445!2d73.767!3d18.567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c41d1f04f1f9%3A0x7b9cfe2b7b54!2sThe%20Orchid%20Hotel%2C%20Pune!5e0!3m2!1sen!2sin!4v1697290000000!5m2!1sen!2sin"
              className="venue-map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <a
              href="https://www.google.com/maps/place/The+Orchid+Hotel,+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              View on Google Maps
            </a>
          </section>
        </div>
      </div>

      {/* -------------------- WEDDING SCHEDULE -------------------- */}
      <div className="wedding-container">
        <div className="wedding-card">
          <h2 className="schedule-title">Wedding Schedule</h2>
          <div className="timeline">
            {schedule.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className="time-block">
                  <h4>{item.title}</h4>
                  <span>{item.time}</span>
                </div>
                <div className="circle">
                  <span>{item.id}</span>
                </div>
                <div className="desc-block">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------- GALLERY -------------------- */}
      <div className="wedding-container">
        <div className="wedding-card">
          <h2 className="gallery-title">Photo <br></br>Gallery</h2>
          <div className="gallery-grid">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery5].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="gallery-image"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* -------------------- RSVP -------------------- */}
      <div className="wedding-container">
        <div className="rsvp-card">
          <div className="rsvp-img-wrap">
            <img src={rsvphead} alt="RSVP Top" className="rsvp-top-img" />
          </div>

          <h2 className="rsvp-title">RSVP</h2>
          <p className="rsvp-subtitle">Please respond by May 1st, 2024</p>
          <p className="rsvp-question">Will you be attending?</p>

          <div className="rsvp-options">
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

          <form className="rsvp-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter your mobile number" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Number of Guests</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>

            <label>Meal Preference</label>
            <select>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>

            <label>Special Notes (optional)</label>
            <input
              type="text"
              placeholder="Share your wishes for the happy couple..."
            />

            <button type="submit" className="submitt-btn">
              Submit
            </button>

            <div className="rsvp-img-wrap">
              <img
                src={rsvpbottom}
                alt="RSVP Bottom"
                className="rsvp-bottom-img"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
