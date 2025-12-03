import React from "react";
import "./RetreatEssentials.css";

const RetreatEssentials: React.FC = () => (
  <section className="retreat-essentials-section theme-amber parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-essentials-inner">
      <h2 className="retreat-essentials-title">What to Bring</h2>
      <ul className="essentials-list stagger-list">
        <li className="float-icon"><strong>Warm Clothing:</strong> Since Dalhousie can be chilly, please pack thermal wear, warm jackets, scarves, and layers to keep cozy.</li>
        <li className="float-icon"><strong>Comfortable Shoes:</strong> Bring sturdy walking shoes for our nature walks and sightseeing day.</li>
        <li className="float-icon"><strong>Writing Materials:</strong> Feel free to bring a notebook, pens, and of course your laptop; the Alps Resort offers reliable internet access.</li>
      </ul>
      <h2 className="retreat-essentials-title" style={{marginTop: '2.5rem'}}>Do’s and Don’ts</h2>
      <ul className="dos-list stagger-list">
        <li className="float-icon">Do dress in layers and stay warm.</li>
        <li className="float-icon">Do respect the peaceful environment and fellow participants.</li>
        <li className="float-icon">Do participate actively in all sessions and make the most of the experience.</li>
        <li className="float-icon">Don’t forget to bring any personal medications or essentials you may need.</li>
        <li className="float-icon">Don’t worry about connectivity; we have you covered with Wi-Fi.</li>
      </ul>
    </div>
  </section>
);

export default RetreatEssentials;
