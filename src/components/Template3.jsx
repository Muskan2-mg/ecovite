import React, { useState } from "react";
import "../styles/Template3.css";

import coupleImg from "../assets/couple11.png";
import flowerdownImg from "../assets/flowerdown.png";
import flowerupImg from "../assets/flowerup.png";
import borderlineImg from "../assets/11borderline.png";
import galleryImg from "../assets/gallery11.png";

export default function Invitation() {
  // RSVP form validation state and logic
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    guests: "1 Guest",
    food: "Veg",
    attending: "yes",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your RSVP has been submitted successfully.");
  };

  return (
    <div className="invitation-container">
      <div className="invitation-card">

        {/* ================= Couple Section ================= */}
        <div className="couple-section">
          <img src={flowerupImg} alt="Flower Top Decoration" className="flower-image top-flower" />

          <div className="couple-content">
            <h2 className="invitation-title">Wedding Invitation</h2>
            <div className="couple-wrapper">
              <h3 className="bridegroom-name left-name">Arjun Verma</h3>
              <img src={coupleImg} alt="Couple" className="couple-img" />
              <h3 className="bridegroom-name right-name">Meera Iyer</h3>
            </div>
          </div>

          <img src={flowerdownImg} alt="Flower Bottom Decoration" className="flower-image bottom-flower" />
        </div>

        {/* ================= Our Story ================= */}
        <div className="border-image-container">
          <img src={borderlineImg} alt="Our Story" className="border-image" />
          <div className="text-overlay">
            <h3>OUR STORY</h3>
            <p>
              It all began in the winter of 2019 at a wedding they never planned to attend. Aarav, quiet and thoughtful, had been dragged along by a friend, while Meera, vibrant and full of life,
              came with her cousin. In a hall filled with music and celebration, they noticed each other a quick glance, a soft smile, and something unspoken lingered between them.
              Weeks later, fate brought them together again during a weekend trek with mutual friends.
              What started as casual chats turned into hours of conversations, shared jokes,
              music swaps, and long walks. With every moment, they discovered little things about each other from Aarav’s love for quiet mornings to Meera’s obsession with books and street food.<br></br>
              Their bond grew steadily built on understanding, laughter, and daily support.
              From celebrating each other’s wins to standing strong through uncertainties, they became more than just a couple they became home to one another.
              Love for them was never loud,<br></br> but it was deep, consistent, and full of warmth.
              After years of friendship, growth, and countless memories, they knew their journey was meant for forever.
              And now, as they take the next step in love and togetherness, they invite you to be part of the beginning of their forever.
            </p>
          </div>
          <img src={flowerdownImg} alt="Flower Bottom Decoration" className="flower-image bottom-flower" />
        </div>

        {/* ================= Venue ================= */}
        <div className="border-image-container">
          <img src={borderlineImg} alt="Venue" className="border-image" />
          <div className="text-overlay">
            <div className="venue-card">
              <h2 className="section-title">Venue</h2>

              <div className="venue-date">
                <p className="day">Saturday</p>
                <div className="divider"></div>
                <h3 className="date">23 July</h3>
                <div className="divider"></div>
                <p className="month-year">2025</p>
              </div>

              <p className="venue-name">The Orchid Hotel, Pune</p>
              <p className="venue-address">
                Address: Adjacent to Balewadi Stadium,<br></br> Pune–Bengaluru Highway, Pune 411045
              </p>
              <p className="venue-landmark">Landmark: Near Balewadi High Street</p>
              <button className="mmap-btn">View on Google Maps</button>
            </div>
          </div>
        </div>

        {/* ================= Event Schedule ================= */}
        <div className="border-image-container">
          <img src={borderlineImg} alt="Event Schedule" className="border-image" />
          <div className="text-overlay">
            <div className="event-card">
              <h2 className="section-title">Event Schedule</h2>
              <div className="event-list">
                <p><strong>4:00 PM – 5:30 PM</strong> Wedding Ceremony</p>
                <p><strong>5:30 PM – 6:00 PM</strong> Couple Photoshoot</p>
                <p><strong>6:30 PM – 10:00 PM</strong> Reception Party</p>
                <p><strong>7:00 PM – 10:30 PM</strong> Dinner & Dance</p>
                <p><strong>10:30 PM – 01:00 AM</strong> After Party</p>
                <p><strong>10:00 AM – 12:00 PM</strong> Farewell Brunch</p>
              </div>
            </div>
          </div>
          <img src={flowerdownImg} alt="Flower Bottom Decoration" className="flower-image bottom-flower" />
        </div>

        {/* ================= Gallery ================= */}
        <div className="border-image-container">
          <img src={borderlineImg} alt="Gallery" className="border-image" />
          <div className="text-overlay">
            <h3>PHOTO GALLERY</h3>
            <img src={galleryImg} alt="Gallery" className="gallery-image" />
            <button className="view-gallery-btn">View Gallery</button>
          </div>
        </div>

        {/* ================= RSVP ================= */}
        <div className="border-image-container">
          <img src={borderlineImg} alt="RSVP" className="border-image" />
          <div className="rsvp-content">
            <h2 className="rsvp-title">RSVP</h2>
            <p className="rsvp-subtitle">Please respond by <span>May 1st, 2024</span></p>

            <div className="attendance">
              <p>Will you be attending</p>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>

            <form className="rsvpp-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>

              <div className="form-row">
                <select
                  name="food"
                  value={formData.food}
                  onChange={handleChange}
                >
                  <option>Veg</option>
                  <option>Non-Veg</option>
                </select>
              </div>

              <textarea
                name="notes"
                placeholder="Special Notes (optional)"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="ssubmit-btn">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}