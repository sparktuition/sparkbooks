import React from "react";
import "./TransportArrangements.css";

const TransportArrangements: React.FC = () => (
  <div className="theme-cyan transport-arrangements-page" data-aos="fade-up">
    <div className="transport-arrangements-content">
      <h1 className="transport-title">Convenient Transport Arrangements</h1>
      <p className="transport-desc">
        We’ve arranged transport for your convenience from Amritsar Airport and the railway station to the Alps Resort. Participants should arrange their own flights or train tickets to Amritsar. From there, we offer two pickup slots on the first day: one at <strong>12:40 PM</strong> and another at <strong>4:00 PM</strong>. This way, you can arrive comfortably and settle in with ease.
      </p>
      <div className="transport-slots stagger-list">
        <div className="slot-card float-icon">
          <span className="slot-time">12:40 PM</span>
          <span className="slot-label">Pickup Slot 1</span>
        </div>
        <div className="slot-card float-icon">
          <span className="slot-time">4:00 PM</span>
          <span className="slot-label">Pickup Slot 2</span>
        </div>
      </div>
      <div className="transport-note parallax-bg">
        <span>
          <strong>Note:</strong> Please book your flight or train to Amritsar and share your arrival details with us for a smooth pickup experience.
        </span>
      </div>
    </div>
  </div>
);

export default TransportArrangements;
