import React from 'react';
import { Link } from 'react-router-dom';
import './TransportPage.css';

const TransportPage: React.FC = () => {
  return (
    <main className="transport-page" data-aos="fade-in" data-aos-duration="700">
      <section className="transport-hero" data-aos="zoom-in" data-aos-duration="900">
        <div className="transport-hero-inner retreat-inner">
          <h1 className="transport-title">Convenient Transport Arrangements</h1>
          <p className="transport-sub">Arrive with ease — we’ve got your pickup covered.</p>
          <div className="transport-hero-actions">
            <Link to="/retreat" className="btn-return">Back to Retreat</Link>
          </div>
        </div>
      </section>

      <section className="transport-details retreat-section" data-aos="fade-up" data-aos-duration="800">
        <div className="transport-card">
          <p>
            We’ve arranged transport for your convenience from <strong>Amritsar Airport</strong> and the <strong>railway station</strong> to the <strong>Alps Resort</strong>.
            Participants should arrange their own <strong>flights</strong> or <strong>train tickets</strong> to Amritsar.
          </p>
          <div className="pickup-grid">
            <div className="pickup-slot" data-aos="flip-up" data-aos-duration="900">
              <h3 className="pickup-title">Pickup Slot</h3>
              <div className="pickup-time">12:40 PM</div>
              <div className="pickup-note">Day 1 — Comfort arrival window</div>
            </div>
            <div className="pickup-slot highlight" data-aos="flip-up" data-aos-duration="900" data-aos-delay="120">
              <h3 className="pickup-title">Pickup Slot</h3>
              <div className="pickup-time">4:00 PM</div>
              <div className="pickup-note">Day 1 — Ideal for later arrivals</div>
            </div>
          </div>
          <p className="transport-note" data-aos="fade-in">Choose the slot that suits your itinerary and we’ll greet you on arrival.</p>
        </div>
      </section>

      <section className="transport-cta" data-aos="zoom-in" data-aos-duration="900">
        <div className="cta-inner retreat-inner">
          <h2 className="cta-title">Need Assistance With Planning?</h2>
          <p className="cta-desc">Our coordination team can help align flight or train timings with the pickup slots.</p>
          <div className="cta-actions">
            <a className="cta-btn primary" href="#contact">Contact Coordinator</a>
            <Link className="cta-btn outline" to="/retreat">Explore Retreat Details</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TransportPage;
