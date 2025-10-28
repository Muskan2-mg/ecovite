import React from "react";
import "../styles/plan.css";

export default function ChoosePlan() {
  const plans = [
    { name: "Basic", price: "₹499", buttonText: "Get Started" },
    { name: "Pro", price: "₹999", buttonText: "Get Started" },
    { name: "Custom", price: "Contact Us", buttonText: "Get Started" },
  ];

  return (
    <section className="choose-plan-section">
      <div className="container">
        <h2 className="section-heading">Choose Your Plan</h2>
        <p className="section-subheading">Simple and suitable for your niche</p>
        <div className="plan-cards">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <button className="plan-button">{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
