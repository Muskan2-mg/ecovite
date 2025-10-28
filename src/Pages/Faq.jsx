import React, { useState } from "react";
import "../styles/Faqn.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // 👈 for arrow icons
import bannerImage from "../assets/aboutmain.png"; // 👈 replace with your actual image path
import { Router } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is an e-invitation?",
      answer:
        "An e-invitation is a digital invitation that you can send online to your guests instead of a traditional printed one.",
    },
    {
      question: "How can I customize my e-invitation?",
      answer:
        "You can easily customize your e-invitation by choosing your preferred colors, fonts, and images. You can add personal details designed specifically for your occasion.",
    },
    {
      question: "Is there an RSVP feature?",
      answer:
        "Yes, our e-invitation templates come with an integrated RSVP feature that allows guests to confirm their attendance.",
    },
    {
      question: "Can I include links to gift registries?",
      answer:
        "Absolutely! You can add links to your gift registries within the invitation, making it easy for guests to find and purchase gifts.",
    },
    {
      question: "Are there mobile-friendly options?",
      answer:
        "All our e-invitations are responsive and work perfectly on both mobile and desktop devices.",
    },
    {
      question: "What if I need help designing my e-invitation?",
      answer:
        "Our support team is available to assist you with customization or troubleshooting whenever needed.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* 🖼️ Top Banner Image */}
      <div className="faq-banner">
        <img src={bannerImage} alt="FAQ banner" className="faq-banner-img" />
      </div>

      {/* Header Section */}
      <div className="faq-header">
        <h2>FAQ</h2>
        <div className="faq-nav">
          <button>Subscription</button>
          <button className="active">Privacy Policy</button>
          <button>Contact</button>
          <button>Testimonials</button>
          <button>Blogs</button>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <h3>Your Queries Answered</h3>
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h4>You still have a question?</h4>
          <p>
            If you cannot find the answer to your question in our FAQ, you can
            always contact us. We will answer you shortly!
          </p>
          <p className="contact-phone">
            <strong>+ (88X) 0936 64 46X</strong>
          </p>
          <span className="help-text">We are always happy to help</span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
