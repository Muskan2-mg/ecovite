// TopBanner.jsx
import React from "react";
import "../styles/TopBanner.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="banner-left">
        📞 +91 12345 67890
      </div>

      <div className="banner-center">
        <span className="offer-text">Get 20% off on your first invitation!</span>
      </div>

      <div className="banner-right">
        <FaFacebookF className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>
    </div>
  );
}
