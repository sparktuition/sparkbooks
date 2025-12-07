import React from 'react';
import './RetreatSeats.css';

const RetreatSeats: React.FC = () => (
  <section className="retreat-seats-section parallax-bg" data-aos="zoom-in" data-aos-duration="900">
    <div className="retreat-seats-inner">
      <h2 className="retreat-seats-title">Limited Seats Available – Reserve Your Spot Now!</h2>
      <div className="retreat-seats-content">
        <p className="retreat-seats-desc">
          We have a limited number of seats to ensure a cozy, personalized experience—a maximum of <span className="seats-highlight">20 participants</span> in total.
        </p>
        <div className="retreat-seats-offer">
          <div className="seats-offer-block">
            <span className="seats-fee-label">Full Course Fee:</span>
            <span className="seats-fee strike">₹1,20,000</span>
          </div>
          <div className="seats-offer-block">
            <span className="seats-fee-label special">Early Bird Offer:</span>
            <span className="seats-fee special">₹1,00,000</span>
          </div>
        </div>
        <p className="retreat-seats-note">
          <strong>First-come, first-served!</strong> Secure your place soon and join us for this unique and enriching writing journey.
        </p>

        <div className="retreat-seats-payment">
          <div className="retreat-seats-payment-text">
            <h3>Pay via Google Pay</h3>
            <p>Pay using this QR and share the payment screenshot with us.</p>
          </div>
          <div className="retreat-seats-payment-qr">
            <img src="/SparkWritersRetreat/Gpay.jpeg" alt="Google Pay QR" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RetreatSeats;
