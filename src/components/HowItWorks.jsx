import React from "react";
import "../styles/HowItWorks.css";
import { FaPalette, FaEdit, FaShareAlt } from 'react-icons/fa';

import step1 from "../assets/template1.png";
import step2 from "../assets/template2.png";
import step3 from "../assets/template3.png";

export default function HowItWorks() {
  const steps = [
    {
      img: step1,
      title: "Choose a Template",
      description: "Edit text, change colors, upload your images all online..",
      icon: <FaPalette size={25} color="#0a2540" />
    },
    
    {
      img: step2,
      title: "Customize Your Invitation",
      description: "Print-ready files or share digitally in seconds..",
      icon: <FaEdit size={25} color="#0a2540" />
    },
    {
      img: step3,
      title: "Share & Manage",
      description: "Edit text, change colors, upload your images all online..",
      icon: <FaShareAlt size={25} color="#0a2540" />
    }
  ];
   <div className="right">
        
          
              <button className="profile-btn">Profile</button>
      </div>

  return (
    <section className="how-section">
      <h2>How It Works</h2>
      <p>An easy 3-step process to create your invitation.</p>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`how-card ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <img src={step.img} alt={step.title} />
            <div className="how-text">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              
              
              <button className="step-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
}
