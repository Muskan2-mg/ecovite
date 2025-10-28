import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/about.png"; // Replace with your image path
import { FaBullhorn } from "react-icons/fa";
import bhopu from "../assets/sound.png";


export default function About() {
  return (
    <div className="about-page">
      {/* Hero Image */}
      <div className="about-hero">
        <img src={aboutImage} alt="About Ecovite" />
      </div>

      


    <section className="about-page">
      <div className="about-container">
        <h2 className="about-title">About Ecovite</h2>
        <h3 className="about-subtitle">Designs That Celebrate Every Moment</h3>

        <div className="about-paragraphs">
          <p>
            At Ecovite, we believe that every special moment deserves to be beautifully
            shared. We're a digital platform built for modern couples and event organizers,
            offering customizable wedding and event templates that are both elegant and
            effortless to use.
          </p>
          <p>
            Our journey began with a vision: to make high-quality, personalized E-invites
            accessible to everyone. Whether you're planning a wedding, birthday, baby shower,
            or corporate launch, Ecovite empowers you to design and share your story with grace
            and style.
          </p>
          <p>
            With soft aesthetics, a clean UI, and an intuitive editing experience, Ecovite helps
            you focus on the celebration—not the stress. From photo galleries and RSVP forms to
            personalized schedules, your digital invites are just a few clicks away.
          </p>
          <p>
            We’re just getting started. Beyond weddings, we’re expanding into birthday parties,
            housewarmings, festive celebrations, and professional events—bringing the same
            simplicity and charm to every kind of gathering.
          </p>
        </div>
      </div>
    </section>
  




     
      <section className="why-choose">
        <h2>Why Choose Ecovite?</h2>
        <div className="choose-grid">
          <div className="choose-card">Tailored for Every Occasion 
            <p>Whether it’s a wedding, birthday, or corporate launch, our templates are thoughtfully designed to match the tone, theme, and emotions of your special day.</p>
          </div>
          <div className="choose-card">Seamless Sharing & Mobile Ready
            <p>Every design is optimized for mobile and desktop. Share your invites instantly via email, WhatsApp, or social media—no apps or downloads required.</p>
          </div>
          <div className="choose-card">Elegant, Minimal Aesthetic
            Our clean layouts, soft palettes, and romantic design elements help your story shine—without unnecessary clutter.
          </div>
          <div className="choose-card">Effortless Customization
            No design experience needed. Our intuitive editor lets you personalize everything—from colors and fonts to content and layout—with just a few clicks.
          </div>
          <div className="choose-card">Built-in RSVP & Event Tools
            Collect responses, display schedules, and add photo galleries—all within your digital invite. It’s event communication, simplified.
          </div>
          <div className="choose-card">Future-Ready & Ever-Growing
            We’re constantly evolving. With new templates, categories, and smart features on the way, Ecovite grows with you—whatever you’re celebrating next.
          </div>
        </div>
      </section>

      {/* What's Coming Next */}
   <section className="whatsnext">
  <div className="whatsnext-left">
    <div className="bhopu-box">
      <img src={bhopu} alt="Announcement" className="bhopu-img" />
    </div>
    <h2>What's Coming Next</h2>
    <p>
      We are continuously innovating! Expect new templates, AI-based
      design suggestions, photo galleries, gift registry integrations,
      and even more eco-friendly features. Our goal is to make
      celebrations effortless and memorable while maintaining sustainability.
    </p>
  </div>

  <div className="whatsnext-right">
    <div className="next-card">Eco-Friendly & Sustainable</div>
    <div className="next-card">Beautiful & Customizable Templates</div>
    <div className="next-card">Easy Event Management</div>
    <div className="next-card">Cost Effective & Paperless</div>
    <div className="next-card">24/7 Customer Support</div>
  </div>
</section>

     <footer className="footer">
      <h1>Copyright Notice</h1>
  <p>© 2025 Ecovite. All rights reserved.
    
    
    </p>
  <p> Ecovite™ and all associated template designs are copyright protected.</p>
  <p> Templates may not be reproduced, distributed, or resold without written consent</p>
  <p> Designed with love, for events that matter</p>
</footer>

     
    </div>
  );
}
