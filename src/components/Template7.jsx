// Invitation.jsx
import React, { useState } from "react";
import "../styles/Template7.css";

import couplenamebg from "../assets/2couplenamebg.png";
import locationicon from "../assets/2locationicon.png";
import img1 from "../assets/2gallery.png";
import img2 from "../assets/2gallery.png";
import img3 from "../assets/2gallery.png";
import borderline from "../assets/2borderline.png";
import emailicon from "../assets/2emailicon.png";
import galleryicon from "../assets/2galleryicon.png";
import eventicon from "../assets/2eventicon.png";
import flower from "../assets/2flower.png";

// ✅ Gallery data & component (merged in same file)
const galleryImages = [
  { alt: "Couple 1", src: img1 },
  { alt: "Couple 2", src: img2 },
  { alt: "Couple 3", src: img3 },
];

const galleryTitles = ["photo gallery", "Engagement Day", "Pre-Wedding Shoot"];

const GallerySection = () => (
  <section className="t2gallery-section">
    {galleryTitles.map((title, index) => (
      <div key={index} className="t2gallery-row">
        <p className="t2gallery-title">{title}</p>
        <div className="t2gallery-images">
          <img
            className="t2side-image"
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            loading="lazy"
          />
          <img
            className="t2main-image"
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            loading="lazy"
          />
          <img
            className="t2side-image"
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </section>
);

export default function Invitation() {
  const couple = {
    date: "07",
    month: "FEBRUARY",
    year: "2025",
    time: "12:00 pm onwards",
    venue: "THE ",
    venue1: " Lotus Courtyard",
    venue2: "JAIPUR",

    address: "125 Any Street,",
    address1: " Any City, India",
  };

  const [formData, setFormData] = useState({
    attending: "",
    name: "",
    email: "",
    mobile: "",
    guests: "",
    meal: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.attending) validationErrors.attending = "Please select Yes or No.";
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Invalid email address.";
    if (!formData.mobile.trim()) validationErrors.mobile = "Mobile number is required.";
    if (!formData.guests) validationErrors.guests = "Please select number of guests.";
    if (!formData.meal) validationErrors.meal = "Please select meal preference.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("RSVP submitted successfully!");
      setFormData({
        attending: "",
        name: "",
        email: "",
        mobile: "",
        guests: "",
        meal: "",
        notes: "",
      });
    }
  };

  return (
    <div className="t2invite-container">
      {/* Header over image */}
      <div className="t2invite-header" style={{ backgroundImage: `url(${couplenamebg})` }}>
        <div className="t2invite-header-overlay">
          <p className="t2invite-subtitle">
            Together<br />with their families
          </p>
          <h1 className="t2invite-names">PRIYA</h1>
          <span className="t2and-symbol">&amp;</span>
          <h1 className="t2invite-names">ARJUN</h1>
          <p className="t2invite-text">
            joyfully invite you to<br />celebrate their wedding
          </p>
          <img src={flower} alt="Flower Decoration" className="t2flower-img" />
        </div>
      </div>

      <img src={borderline} alt="Border" className="t2borderline-image" />

      {/* Invite details */}
      <div className="t2invite-details">
        <h3 className="t2date-month">{couple.month}</h3>
        <div className="date1-divider"></div>
        <h1 className="t2date-day">{couple.date}</h1>
          <div className="date-divider"></div>
        <h3 className="t2date-year">{couple.year}</h3>
        <p className="t2invite-daytime">Sunday | {couple.time}</p>
      </div>

      <img src={borderline} alt="Border" className="t2borderline-image" />

      {/* Venue */}
      <div className="t2invite-venue">
        <p className="t2venue-label">VENUE</p>
        <img src={locationicon} alt="location Icon" className="t2email-icon" />
        <div className="t2cherished-divider"></div>
        <h2 className="t2venue-name">{couple.venue}</h2>
        <h2 className="t2venue1-name">{couple.venue1}</h2>
        <h2 className="t2venue2-name">{couple.venue2}</h2>
        <p className="t2venue-address">{couple.address}</p>
        <p className="t2venue-address">{couple.address1}</p>
      </div>

      {/* Map Section */}
      <div className="t2map-card-wrapper">
        <div className="t2map-card">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23324.418402961896!2d-5.133!3d55.789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1685580000000"
            loading="lazy"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps?q=55.789,-5.133"
          target="_blank"
          rel="noopener noreferrer"
          className="t2view-button"
        >
          View on Google Maps
        </a>
      </div>

      <img src={borderline} alt="Border" className="t2borderline-image" />

      {/* Events Section */}
      <div className="t2events-section">
        <h2 className="t2events-title">EVENTS</h2>
        <div className="t2cherished-icon">
          <img src={eventicon} alt="Event icon" />
        </div>

        <div className="t2events-grid">
          <div className="t2event-card">
            <h3 className="t2event-name">Baraat <br></br>Arrival</h3>
            <p className="t2event-desc">
              The groom’s grand procession<br></br> with dhol and dance.
            </p>
            <p className="t2event-time">4:30 PM</p>
          </div>
          <div className="t2event-card">
            <h3 className="t2event-name">Saat<br></br> Pheras</h3>
            <p className="t2event-desc">Sacred vows around the holy<br></br> fire.</p>
            <p className="t2event-time">5:30 PM</p>
          </div>
          <div className="t2event-card">
            <h3 className="t2event-name">Cocktail <br></br>Hour</h3>
            <p className="t2event-desc">Drinks & appetizers before the<br></br> reception.</p>
            <p className="t2event-time">6:30 PM</p>
          </div>
          <div className="t2event-card">
            <h3 className="t2event-name">Dinner &<br></br> Dancing</h3>
            <p className="t2event-desc">Drinks & appetizers before the<br></br> reception.</p>
            <p className="t2event-time">7:30 PM</p>
          </div>
        </div>
      </div>

      <img src={borderline} alt="Border" className="t2borderline-image" />

      {/* Cherished Section */}
      <section className="t2cherished-section">
        <h2 className="t2cherished-title">CHERISHED MOMENTS</h2>
        <div className="t2cherished-icon">
          <img src={galleryicon} alt="Gallery icon" />
        </div>
        <div className="t2cherished-divider"></div>
        <h1 className="t2cherished-names">Priya &amp; Arjun</h1>
        <h1 className="t2cherished-s">
          A journey of love captured in<br></br>timeless moments.
        </h1>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      <img src={borderline} alt="Border" className="t2borderline-image" />

      {/* RSVP Section */}
      <div className="t2rsvp-section">
        <h2 className="t2rsvp-title">RSVP</h2>
        <img src={emailicon} alt="Email Icon" className="t2email-icon" />
        <div className="t2cherished-divider"></div>

        <p className="t2rsvp-subtext">
          Please respond by <span>May 1st, 2024</span>
        </p>

        <form className="t2rsvp-form" onSubmit={handleSubmit}>
          <div className="t2attending-group">
            <label>Will you be attending</label>
            <div className="t2radio-group">
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="Yes"
                  checked={formData.attending === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="No"
                  checked={formData.attending === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
            {errors.attending && <p className="t2error">{errors.attending}</p>}
          </div>

          <div className="t2form-row">
            <div className="t2form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="t2error">{errors.name}</p>}
            </div>
            <div className="t2form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                placeholder="Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="t2error">{errors.mobile}</p>}
            </div>
          </div>

          <div className="t2form-row">
            <div className="t2form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="t2error">{errors.email}</p>}
            </div>
            <div className="t2form-group">
              <label>Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
              </select>
              {errors.guests && <p className="t2error">{errors.guests}</p>}
            </div>
          </div>

          <div className="t2form-group">
            <label>Meal Preference</label>
            <select name="meal" value={formData.meal} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            {errors.meal && <p className="t2error">{errors.meal}</p>}
          </div>

          <div className="t2form-group">
            <label>Special Notes (optional)</label>
            <input
              type="text"
              name="notes"
              placeholder="Share your wishes..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="t2submit-btn">
            Submit
          </button>
        </form>
      </div>

      <img src={borderline} alt="Border" className="t2borderline-image" />
    </div>
  );
}
