import React from 'react'
import './RetreatHeroLanding.css'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog'

const RetreatHeroLanding: React.FC = () => {
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
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
         
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroLanding
