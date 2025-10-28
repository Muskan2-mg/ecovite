import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Ecoovite Logo" />
        </Link>
      </div>

      {/* Center: Links */}
      <ul className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li><Link to="/weddinginvite">Invite</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/how-it-works">How it Works</Link></li>
        <li><Link to="/faq">Offers</Link></li>
        <li><Link to="/about">About</Link></li>
         <li><Link to="/error404">site editor</Link></li>
          <li><Link to="/blogpreview">blog preview</Link></li>

        {/* Extra Button for Mobile */}
        
      </ul>

      {/* Right: Profile + Cart */}
      <div className="nav-right">
        <div className="cart-btn">
          🛒 <span className="cart-count"></span>
        </div>
        <button className="profile-btn">Profile</button>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
