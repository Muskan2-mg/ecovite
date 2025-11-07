import React, { useState } from "react";
import "../styles/Template2.css";
import "../index.css";
import venueBg from "../assets/venuebg.png";
 import venueLine from "../assets/venueline.png";
import haldiImg from "../assets/haldi.png";
import iconImg from "../assets/icon.png";
import cardImage from "../assets/card.png";
import welcomeImg from "../assets/welcome.png";
import andImg from "../assets/and.png";
import lineImg from "../assets/line.png";
import lineeImg from "../assets/linee.png";
import locationImg from "../assets/location.png";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
import image6 from "../assets/img6.png";
import image7 from "../assets/img7.png";
import image8 from "../assets/img8.png";
import image9 from "../assets/img9.png";

function Invitation() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getClassForIndex = (index) => {
    if (index === 8) return "T9gallery-item T9large-image";
    return `T9gallery-item T9small-image-${index + 1}`;
  };

  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  function Gallery() {
    return (
      <div className="T9gallery-container">
        {imageUrls.map((url, index) => (
          <div key={index} className={getClassForIndex(index)}>
            <img src={url} alt={`Wedding gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    meal: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (
      type === "checkbox" &&
      ["Vegetarian", "Non-Vegetarian", "Vegan"].includes(value)
    ) {
      setFormData((prev) => ({
        ...prev,
        meal: checked ? value : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.guests.trim()) newErrors.guests = "Guest count is required.";
    if (!formData.meal) newErrors.meal = "Please select a meal preference.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("🎉 RSVP Submitted Successfully!");
      console.log("RSVP Data:", formData);
    }
  };

  return (
    <div className="T9invitation">
      <div className="T9language-select">
        <select>
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="pa">Punjabi</option>
        </select>
      </div>

      <div className="T9upper-bg">
        <div className="T9card">
          <img src={cardImage} alt="Card Frame" className="T9card-frame" />
          <img src={welcomeImg} alt="Welcome" className="T9overlay T9welcome" />
          <img src={andImg} alt="and" className="T9overlay T9and" />
          <img src={lineImg} alt="and" className="T9overlay T9line" />
          <img src={lineeImg} alt="and" className="T9overlay T9linee" />

          <div className="T9overlay-text">
            <h1 className="T9names-text">
              <span className="T9line1">Aarav</span>
              <span className="T9line2">Meera</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="T9lower-bg">
        <div className="T9icon" id="icon">
          <img src={iconImg} alt="icon" />
        </div>

        <div className="T9nav-buttons">
          <button onClick={() => scrollToSection("venue")}>Venue Details</button>
          <button onClick={() => scrollToSection("event-schedule")}>
            Event Schedule
          </button>
          <button onClick={() => scrollToSection("gallery")}>
            Photo Gallery
          </button>
          <button onClick={() => scrollToSection("map")}>Location Map</button>
          <button onClick={() => scrollToSection("rsvp")}>RSVP</button>
        </div>

        <div className="T9section-divider"></div>
        <div className="T9section-divider"></div>

        <section className="T9story">
          <h2>Our Story</h2>
          <p>
            We met in the most unexpected way at a bookstore on a rainy afternoon.
            I was sitting on the floor flipping through a poetry book when he noticed me from the next aisle.
            He later told me he almost walked away, but something made him stop and ask, “Is that Rumi?” I looked up and without thinking said, “Want to read it together?”
            We ended up reading quietly for nearly half an hour, right there on the floor.
            That moment turned into coffee, coffee turned into long walks, shared playlists, endless book exchanges, and eventually, love.
            A year later, he brought me back to the same bookstore, handed me a copy of that same poetry book, and inside it was a ring tucked between the pages.
            He asked me to marry him with the words, “Let’s keep reading our story together.”
            And now, standing here on our wedding day, I still can’t believe that a quiet afternoon and a simple question led us all the way here.
          </p>
        </section>

        <div className="T9header-image" id="haldi">
          <img src={haldiImg} alt="Haldi" />
        </div>

        <div className="T9venue-section" id="venue">
          <div className="T9venue-bg">
            <img src={venueBg} alt="Venue Background" className="T9venue-bg-img" />
            <img src={venueLine} alt="Venue Background" className="T9venue-line-img" />

            <div className="T9venue-content">
              <h2 className="T9venue-title">VENUE</h2>

              <p className="T9venue-address">
                The Regal Banquet Hall <br />
                Hotel Sea Princess, Juhu Tara Road, Juhu, <br />
                Mumbai 400049
              </p>

              <div className="T9venue-date">
                <div className="T9venue-day">Saturday</div>
                <div className="T9divider"></div>
                <div className="T9venue-center">
                  <span className="T9venue-date-number">23</span>
                  <span className="T9venue-month">July</span>
                </div>
                <div className="T9divider"></div>
                <div className="T9venue-year">2025</div>
              </div>

              <p className="T9venue-time">
                Ceremony: 6:30 PM <br />
                Reception & Dinner: 8:00 PM onwards
              </p>

              <p className="T9venue-landmark">
                LANDMARK <br />
                Opp. Juhu Beach, near ISKCON Temple <br />
                Valet Parking Available
              </p>
            </div>
          </div>
        </div>

        <section className="T9event-schedule" id="event-schedule">
          <h2>EVENT SCHEDULE</h2>
          <div className="T9schedule-grid">
            <article className="T9schedule-item">
              <h3>
                <span>★</span> Wedding Ceremony
              </h3>
              <time>Time: 4:00 PM - 5:30 PM</time>
              <p>Join us as we exchange our vows and begin this beautiful journey together.</p>
            </article>

            <article className="T9schedule-item">
              <h3>
                <span>★</span> Couple Photoshoot
              </h3>
              <time>Time: 5:30 PM - 6:00 PM</time>
              <p>A special moment to capture memories with our loved ones and beautiful backdrops.</p>
            </article>

            <article className="T9schedule-item">
              <h3>
                <span>★</span> Reception Party
              </h3>
              <time>Time: 6:30 PM - 10:00 PM</time>
              <p>Celebrate with us in an evening filled with laughter, good food, and heartfelt toasts.</p>
            </article>

            <article className="T9schedule-item">
              <h3>
                <span>★</span> Dinner & Dance
              </h3>
              <time>Time: 7:00 PM - 10:00 PM</time>
              <p>Enjoy a delightful dinner followed by dancing the night away on the dance floor.</p>
            </article>

            <article className="T9schedule-item">
              <h3>
                <span>★</span> After Party
              </h3>
              <time>Time: 10:30 PM - 1:00 AM</time>
              <p>Let’s keep the celebration going with drinks, music, and a rooftop view to remember!</p>
            </article>

            <article className="T9schedule-item">
              <h3>
                <span>★</span> Farewell Brunch
              </h3>
              <time>Time: 10:00 AM - 12:00 PM</time>
              <p>Before we say goodbye, join us for a relaxed brunch to share smiles and stories.</p>
            </article>
          </div>
        </section>

        <section className="T9photo-gallery" id="gallery">
          <h2>PHOTO GALLERY</h2>
          <Gallery />
        </section>

        <div className="T9card-map" id="map">
          <h3 className="T9map-title">LOCATION MAP</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14512.434679764357!2d73.7125763!3d24.5854456!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1758204869500!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
          <a
            href="https://www.google.com/maps/place/The+Fern+Garden/@24.5854456,73.7125763,15z"
            target="_blank"
            rel="noreferrer"
            className="T9map-btn"
          >
            <img src={locationImg} alt="Location Img" className="T9map-icon" />
            View on Google Map
          </a>
        </div>

        <div className="T9container" id="rsvp">
          <form className="T9rsvp-form" onSubmit={handleSubmit}>
            <h2>RSVP</h2>

            <div className="T9section">
              <label>Guest Information</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="T9error">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="T9error">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="T9error">{errors.phone}</p>}
            </div>

            <div className="T9section">
              <label>How many guests?</label>
              <input
                type="number"
                name="guests"
                placeholder="+1 or family"
                min="1"
                value={formData.guests}
                onChange={handleChange}
              />
              {errors.guests && <p className="T9error">{errors.guests}</p>}
            </div>

            <div className="T9section T9meal-preference">
              <div className="T9checkbox-group">
                <p className="T9checkbox-title">Meal Preference</p>
                <label className="T9checkbox-label">
                  <input
                    type="checkbox"
                    value="Vegetarian"
                    checked={formData.meal === "Vegetarian"}
                    onChange={handleChange}
                  />
                  <span className="T9custom-checkbox"></span>
                  Vegetarian
                </label>
                <label className="T9checkbox-label">
                  <input
                    type="checkbox"
                    value="Non-Vegetarian"
                    checked={formData.meal === "Non-Vegetarian"}
                    onChange={handleChange}
                  />
                  <span className="T9custom-checkbox"></span>
                  Non-Vegetarian
                </label>
                <label className="T9checkbox-label">
                  <input
                    type="checkbox"
                    value="Vegan"
                    checked={formData.meal === "Vegan"}
                    onChange={handleChange}
                  />
                  <span className="T9custom-checkbox"></span>
                  Vegan
                </label>
                {errors.meal && <p className="T9error">{errors.meal}</p>}
              </div>
            </div>

            <button type="submit" className="T9submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
