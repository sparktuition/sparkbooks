import React from 'react'
import './RetreatHeroLanding.css'

const RetreatHeroLanding: React.FC = () => {
  return (
    <section className="retreat-hero-landing retreat-section">
      <div className="retreat-hero-overlay"></div>
      <div className="retreat-hero-landing-content retreat-inner">
        <h1 className="retreat-hero-title">Where Stories Are Born</h1>
        <p className="retreat-hero-description">
          A serene, luxurious writers' retreat set amidst the breathtaking Himalayan ranges — crafted exclusively for aspiring, emerging, and passionate writers seeking transformation.
        </p>
        <div className="retreat-hero-buttons">
          <a
            className="retreat-btn-register"
            href="https://forms.gle/REPLACE_WITH_YOUR_FORM_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
          <button className="retreat-btn-secondary">Discover More</button>
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroLanding
