import React, { useState } from "react";
import "../styles/Template1.css";

import coupleImg from "../assets/couple.png";
import heartImg from "../assets/heart.png";
import dresscodeImg from "../assets/dresscode.png";
import designImg from "../assets/design.png";

// ================= RSVPForm Component =================
const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="T4rsvp-container">
      <form className="T4rsvp-form" onSubmit={handleSubmit}>
        <h2 className="T4title">RSVP</h2>
        <p className="T4subtitle">
          Please let us know if you will be with us <br /> on this special day.
        </p>

        <label className="T4label">Name :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="T4label">Will you attend?</label>
        <div className="T4attendance-options">
          <button
            type="button"
            className={`T4option-btn ${
              formData.attendance === "yes" ? "T4active" : ""
            }`}
            onClick={() => setFormData({ ...formData, attendance: "yes" })}
          >
            Yes, with joy
          </button>
          <button
            type="button"
            className={`T4option-btn ${
              formData.attendance === "no" ? "T4active" : ""
            }`}
            onClick={() => setFormData({ ...formData, attendance: "no" })}
          >
            Sorry, can't attend
          </button>
        </div>

        <label className="T4label">Number of guests :</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="0"
        />

        <label className="T4label">Message for us :</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
        />

        <p className="T4note">Submit your response by: 05 August 2024</p>

        <button type="submit" className="T4submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

// ================= EventSchedule Component =================
const events = [
  {
    time: "11:00",
    title: "Registration",
    description: "Guests arrive and register with welcome drinks.",
  },
  {
    time: "15:00",
    title: "Photo Session",
    description: "Join the couple for photos on the decorated zone.",
  },
  {
    time: "17:00",
    title: "Banquet",
    description: "Enjoy a grand feast with curated dishes.",
  },
  {
    time: "19:00",
    title: "Cake Cutting",
    description: "The couple cuts the wedding cake together.",
  },
  {
    time: "20:00",
    title: "First Dance",
    description: "The couple’s first dance on the open dance floor.",
  },
];

const EventSchedule = () => {
  return (
    <div className="T4schedule-container">
      <h2 className="T4schedule-title">Event Schedule</h2>
      <div className="T4schedule-list">
        {events.map((event, index) => (
          <div className="T4schedule-item" key={index}>
            <div className="T4time">{event.time}</div>
            <h3 className="T4event-title">{event.title}</h3>
            <p className="T4event-desc">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ================= Calendar Component =================
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(22);

  const days = [
    ["27", "28", "1", "2", "3", "4"],
    ["5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16"],
    ["17", "18", "19", "20", "21", "22"],
    ["23", "24", "25", "26", "27", "28"],
    ["29", "30", "31", "1", "2", "3"],
  ];

  return (
    <div className="T4calendar-container">
      <div className="T4calendar-header">
        <span>March</span>
        <span>2025</span>
      </div>

      <div className="T4calendar-grid">
        {days.map((week, i) => (
          <div key={i} className="T4calendar-row">
            {week.map((day, j) => {
              const isPrevMonth = i === 0 && ["27", "28"].includes(day);
              const isNextMonth = i === 5 && ["1", "2", "3"].includes(day);
              const isSelected = parseInt(day) === selectedDate;

              return (
                <div
                  key={j}
                  className={`T4calendar-day ${
                    isPrevMonth || isNextMonth ? "T4faded" : ""
                  } ${isSelected ? "T4selected" : ""}`}
                  onClick={() => {
                    if (!isPrevMonth && !isNextMonth) {
                      setSelectedDate(parseInt(day));
                    }
                  }}
                >
                  {isSelected ? (
                    <div className="T4heart-day">
                      <img src={heartImg} alt="heart" className="T4heart-icon" />
                      <span className="T4heart-text">{day}</span>
                    </div>
                  ) : (
                    <span>{day}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// ================= Invitation Component =================
function Invitation() {
  return (
    <div className="T4invitation">
      {/* Couple Image */}
      <div className="T4card">
        <div className="T4header-image">
          <img src={coupleImg} alt="Couple" />
          <div className="T4overlay-text">
            <p className="T4date-text">23-03-2025</p>
            <h1 className="T4names-text">
              <span className="T4line1">Aarav</span>
              <span className="T4amp">&amp;</span>
              <span className="T4line2">Meera</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Save the Date */}
      <div className="T4image-container">
        <img src={designImg} alt="design" className="T4image" />
        <div className="T4overlay-text">save the date</div>
      </div>

      {/* Calendar Section */}
      <div className="T4calendar-section">
        <Calendar />
      </div>

      {/* Venue Section */}
      <div className="T4image-container">
        <img src={designImg} alt="design" className="T4image" />
        <div className="T4overlay-text">
          <h>VENUE</h>
          <p className="T4text">
            The Regal Banquet Hall <br />
            Hotel Sea Princess, Juhu Tara Road, Juhu, <br />
            Mumbai 400049
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="T4map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3136788159634!2d-4.038028384244615!3d55.819653980572235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884f0f00c4b58b%3A0x7b167b3b13e3f9a9!2sRegal%20Hall!5e0!3m2!1sen!2sin!4v1695484321321!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120705.87163423894!2d72.70041494335936!3d19.017144200000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedc3c3da153%3A0x92cb5bdd0c15c626!2sRegal%20Hall!5e0!3m2!1sen!2sin!4v1758631886986!5m2!1sen!2sin"
          target="_blank"
          rel="noopener noreferrer"
          className="T4map-button"
        >
          View on Google Maps
        </a>
      </div>

      {/* Event Schedule */}
      <EventSchedule />

      {/* Dress Code */}
      <div className="T4dresscode-section">
        <img src={designImg} alt="design" className="T4design-img" />
        <img src={dresscodeImg} alt="dresscode" className="T4dresscode-img" />
      </div>

      {/* RSVP Form */}
      <RSVPForm />
    </div>
  );
}

export default Invitation;
