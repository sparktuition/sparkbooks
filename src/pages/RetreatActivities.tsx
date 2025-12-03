import React from 'react';
import './RetreatActivities.css';

const RetreatActivities: React.FC = () => (
  <section className="retreat-activities-section parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-activities-inner">
      <h2 className="retreat-activities-title">Rejuvenating Activities & Local Exploration</h2>
      <div className="retreat-activities-content">
        <p>
          In addition to our immersive writing sessions, we’ve planned some rejuvenating activities for you. Enjoy peaceful <span className="activities-highlight">Vipassana training sessions</span> to clear your mind, and take short walks to soak in the fresh mountain air.
        </p>
        <p>
          One day is dedicated to a delightful <span className="activities-highlight">sightseeing tour of Dalhousie</span> and its surroundings. You’ll visit charming local spots and might even witness the arrival of migratory birds from Europe, making the landscape a writer’s paradise.
        </p>
      </div>
    </div>
  </section>
);

export default RetreatActivities;
