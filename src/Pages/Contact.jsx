import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";  // important
import FAQ from "../components/FAQ";
import aboutImage from "../assets/about.png"; 




const Contact = () => {
  return (
     <div className="about-page">
          {/* Hero Image */}
          <div className="about-hero">
            <img src={aboutImage} alt="About Ecovite" />
          </div>
    <section className="lets-talk">
      <div className="talk-content">
        <h2 className="talk-title">Let’s Talk</h2>
        <p className="talk-subtitle">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help
        </p>

        <div className="talk-buttons">
          <button className="btn email">Email</button>
          <button className="btn socials">Socials</button>
          <button className="btn instagram">Instagram</button>
          <button className="btn facebook">Facebook</button>
          <button className="btn twitter">Twitter</button>
        </div>
      </div>
    </section>
  
    <section className="contact-section">
      
      <h2 className="contact-title">Contact Form</h2>
      <form className="contact-form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your Full Name" />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="you@email.com" />
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject">
            <option>Support</option>
            <option>Template Customization Help</option>
            <option>Business or Collaboration</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Write your message here..."></textarea>
        </div>

        {/* File Upload */}
        <div className="form-group">
          <label htmlFor="file">Attach a File</label>
          <input type="file" id="file" />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
   <div>
     
      {/* Other sections */}
      
      {/* FAQ Section */}
      <FAQ />
    </div>
     
    
    </div>
    
  );
}

export default Contact;
