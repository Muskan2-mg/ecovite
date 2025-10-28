import React from "react";
import { Link } from "react-router-dom";

import "../styles/FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  const faqs = [
    "How do I sign up?",
    "What is the refund policy?",
    "Can I change my plan later?",
    "How secure is my data?",
    "Do you offer support?",
    "Are there any hidden fees?",
    "Can I cancel anytime?",
    "How do referrals work?",
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((question, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-question">
              <span>{question}</span>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="faq-arrow" />
          </div>
        ))}
      </div>
      <Link to="/Blogs">
      <h4>Still have questions?</h4></Link>
      <Link to="/Contact">
  <button className="faq-button">Contact us</button>
</Link>

      
    </section>
  );
}
