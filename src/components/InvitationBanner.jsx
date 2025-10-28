import React from "react";
import "../styles/InvitationBanner.css";

export default function InvitationBanner() {
  return (
    <div className="invitation-banner-wrapper">
      <h1 className="main-heading">Make Invitations Your Way</h1> {/* New heading */}
      <p>Smart design, ready to use.</p>
    <section className="invitation-banner">
      <h2 className="banner-heading">Design Invitations That Reflect Your Story Beautifully and Sustainably.</h2>
      <p className="banner-subheading">Your moments deserve more than paper. Start designing with Ecoovite today. Elegant, effortless, and eco-conscious.</p>
      <button className="stamp-btn">Start Designing Now</button>
    </section>
    </div>
  );
}
