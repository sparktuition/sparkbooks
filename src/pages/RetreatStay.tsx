import React from "react";
import "./RetreatStay.css";



const RetreatStay: React.FC = () => (
  <section className="retreat-stay-section theme-sand parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-stay-inner">
      <h2 className="retreat-stay-title">Experience a Blissful Stay at the Alps Resort</h2>
      <div className="retreat-stay-content stagger-list">
        <p>
          Nestled amidst the serene and breathtaking Himalayan hills, the Alps Resort offers you a perfect retreat setting. Your stay will be both comfortable and inspiring, with cozy rooms, warm hospitality, and stunning views that will fuel your creativity every single day.
        </p>
      </div>
      
      <h2 className="retreat-stay-title" style={{marginTop: '2.5rem'}}>Payment and Registration</h2>
      <div className="retreat-stay-content stagger-list">
        <p>
          To confirm your spot at the retreat, we’ll provide payment details here. You’ll find all the information you need in the registration form, including options for secure online payment. Once you complete the form and payment, you’ll receive a confirmation email with all the retreat details.
        </p>
      </div>
    </div>
  </section>
);

export default RetreatStay;
