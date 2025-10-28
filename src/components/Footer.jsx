import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo2.png";

import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-main">
         <div className="footer-help">
        <h3>Need a help?</h3>
        <button className="footer-help-btn">Contact Us</button>
      </div>

        <div className="footer-col">
         <div className="footer-logo">
  <img src={logo} alt="Ecoovite Logo" className="footer-logo-img" />Ecovite
</div>

          <p className="footer-text">
            Invitations that care for the planet and your moments
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Subscribe to Ecoovite</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter email address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
