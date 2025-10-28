import React from "react";
import "../styles/Refer.css";

export default function RewardCard() {
  return (
    <section className="reward-section">
      <div className="reward-heading">
        <h3>Invite & Celebrate</h3>
        <p>Earn sweet rewards by inviting your friends.</p>
      </div>

      {/* Image as background */}
      <div className="reward-image-section">
        <h2>Share the Joy, Earn Rewards</h2>
        <p>
          Spread the word! When you refer a friend, they’ll receive 
          10% off their first invitation, and you’ll earn exclusive 
          discounts on your next order. Celebrate more, spend less.
        </p>
        <button className="reward-btn">Refer a Friend</button>
        <span className="gift-icon"></span>
      </div>
    </section>
  );
}
