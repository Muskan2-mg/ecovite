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
    { id: 1, title: "मुहूर्त पूजा", time: "०७:००", desc: "मांगलिक विधी व पूजाअर्चा करून शुभ मुहूर्ताची सुरुवात." },
    { id: 2, title: "गणपती पूजन", time: "११:३०", desc: "विघ्नहर्त्याला वंदन करून विवाह सोहळ्याची सुरुवात." },
    { id: 3, title: "लग्न सोहळा", time: "०१:००", desc: "मंगलाष्टकांच्या गजरात वधू–वरांचा पवित्र विवाहबंधनाचा सोहळा.." },
    { id: 4, title: "जेवण", time: "०२:३०", desc: "महाराष्ट्रीय स्वादिष्ट जेवणाचा आस्वाद घेण्याचा प्रसंग." },
    { id: 5, title: "वरात", time: "०५:३०", desc: "ढोल‑ताशा, नाच‑गाणी यांच्या गजरात वधू‑वराचे  आगमन." },
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
              <p className="prefix">सुश्री</p>
              <h2 className="name">प्रिया</h2>
            </div>
            <div className="name-block">
              <p className="prefix">ची.</p>
              <h2 className="name">अर्जुन</h2>
            </div>
          </div>

         

          <div className="wedding-text">
            <p className="small-text">यांचा</p>
            <h3 className="title">शुभ विवाह </h3>
            
          </div>
        </div>
      </div>
</div>
      {/* -------------------- VENUE -------------------- */}
      <div className="wedding-container">
        <div className="wedding-card">
          <section className="venue-section">
            <h2 className="venue-heading">विवाह स्थल</h2>
            <div className="venue-details">
              <p className="venue-name">आमच्या लग्न समारंभाला आपले मनःपूर्वक </p>
              <p className="venue-address">
                स्वागत आहे
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
             गूगल मॅप्सवर पहा
            </a>
          </section>
        </div>
      </div>

      {/* -------------------- WEDDING SCHEDULE -------------------- */}
      <div className="wedding-container">
        <div className="wedding-card">
          <h2 className="schedule-title">विवाह कार्यक्रम</h2>
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
          <h2 className="gallery-title">फोटो गैलरी</h2>
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
          <p className="rsvp-subtitle">कृपया १ मे, २०२४ पर्यंत उत्तर द्या.</p>
          <p className="rsvp-question">आपण उपस्थित राहणार का?</p>

          <div className="rsvp-options">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
              />
              <span>होय</span>
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
              />
              <span>नाही</span>
            </label>
          </div>

          <form className="rsvp-form">
            <label> नाम</label>
            <input type="text" placeholder="Enter your name" />

            <label>मोबाइल क्रमांक</label>
            <input type="tel" placeholder="Enter your mobile number" />

            <label>ईमेल</label>
            <input type="email" placeholder="Enter your email" />

            <label>अतिथींची संख्या</label>
            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>

            <label>जेवणाची पसंती</label>
            <select>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>

            <label>संदेश </label>
            <input
              type="text"
              placeholder="Share your wishes for the happy couple..."
            />

            <button type="submit" className="submitt-btn">
             सबमिट
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
