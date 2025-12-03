import React from 'react'
import './RetreatHeroLanding.css'

const RetreatHeroLanding: React.FC = () => {
  // Remove forced scrolling — let the page flow naturally so the hero section doesn't
  // cause jumpy or separate scrolling behaviors on small devices.
  return (
    <section className="retreat-hero-main">
      <div className="retreat-hero-content">
        <h1 className="retreat-hero-title">Where Stories Are Born</h1>
        <p className="retreat-hero-desc">
          A serene, luxurious writers' retreat set amidst the breathtaking Himalayan ranges — crafted exclusively for aspiring, emerging, and passionate writers seeking transformation.
        </p>
        <div className="retreat-hero-btns">
          <a
            className="retreat-hero-btn-primary"
            href="https://forms.gle/REPLACE_WITH_YOUR_FORM_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
          <button className="retreat-hero-btn-secondary">Discover More</button>
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroLanding
