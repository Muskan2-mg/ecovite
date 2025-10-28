import React from "react";
import "../styles/WeddingInvite.css";
import "../assets/frame.png";
import couple from "../assets/coupleimg.png";
import user1 from "../assets/invite1.png";  
import user2 from "../assets/invite2.png";
import user3 from "../assets/invite3.png";  
import user4 from "../assets/invite4.png";
import user5 from "../assets/invite5.png";  
import user6 from "../assets/invite6.png"; 

import map from "../assets/map.png";

export default function WeddingCard() {
  return (
    <div className="wedding-container">
      {/* HEADER */}
      <section className="header-frame">
  <div className="frame-content">
    <div className="photo-frame">
      <img src={couple} alt="Couple" />
    </div>

    <div className="couple-names">
      <div className="name">
        <p>मि.सा.कु</p>
        <h3>प्रिया</h3>
      </div>
      <span className="heart">❤️</span>
      <div className="name">
        <p>मि.</p>
        <h3>अर्जुन</h3>
      </div>
    </div>

    <h2 className="wedding-title">|| शुभ विवाह ||</h2>
  </div>
</section>


      {/* MAP SECTION */}
      <section className="map-section">
        <h3>विवाहस्थळ</h3>
        <p>आपल्या लग्न समारंभाला आपले मनःपूर्वक स्वागत आहे</p>
        <img src={map} alt="map" />
        <button>Google नकाशावर पहा</button>
      </section>

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <h3>विवाह कार्यक्रम</h3>
        <div className="timeline">
          <div className="event">
            <div className="circle">1</div>
            <div className="details">
              <h4>मूर्हुत पूजा</h4>
              <p>सकाळी ०८:००</p>
            </div>
          </div>

          <div className="event">
            <div className="circle">2</div>
            <div className="details">
              <h4>गणपती पूजन</h4>
              <p>सकाळी ११:३०</p>
            </div>
          </div>

          <div className="event">
            <div className="circle">3</div>
            <div className="details">
              <h4>लाग्न सोहळा</h4>
              <p>दुपारी ०२:३०</p>
            </div>
          </div>

          <div className="event">
            <div className="circle">4</div>
            <div className="details">
              <h4>स्वागत</h4>
              <p>संध्याकाळी ०४:३०</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <h3>आनंदाचे क्षण</h3>
        <div className="gallery">
          <img src={user1} alt="img1" />
          <img src={user4} alt="img2" />
          <img src={user3} alt="img3" />
          
          <img src={user6} alt="img6" />
          <img src={user4} alt="img4" />
          <img src={user4} alt="img4" />
          <img src={user5} alt="img5" />
          <img src={user6} alt="img6" />
          
          
         
        </div>
      </section>
      {/* RSVP FORM SECTION */}
<section className="rsvp-section">
  <h3>आपली उपस्थिती नोंदवा</h3>
  <p>आपण लग्नाला उपस्थित राहणार आहात का?</p>

  <div className="rsvp-form">
    <div className="radio-group">
      <label>
        <input type="radio" name="attend" /> होय
      </label>
      <label>
        <input type="radio" name="attend" /> नाही
      </label>
    </div>

    <form>
      <input type="text" placeholder="नाव" />
      <input type="text" placeholder="मोबाइल क्रमांक" />
      <input type="email" placeholder="ईमेल" />

      <select>
        <option>1 Guest</option>
        <option>2 Guests</option>
        <option>3 Guests</option>
      </select>

      <select>
        <option>Veg</option>
        <option>Non-Veg</option>
      </select>

      <textarea placeholder="आपल्या शुभेच्छा लिहा..."></textarea>

      <button type="submit">सबमिट</button>
    </form>
  </div>
</section>

    </div>
  );
}
