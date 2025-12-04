import React from 'react'
import './RetreatCTA.css'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog'

const RetreatCTA: React.FC = () => {
  return (
    <section className="retreat-cta retreat-section">
      <div className="retreat-cta-inner retreat-inner">
        <h2 className="cta-title">
          <span className="cta-highlight">This retreat brings all of it together — beautifully and powerfully.</span>
        </h2>
      
        <div className="cta-actions">
          <a className="btn btn-primary" href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Reserve My Seat</a>
        </div>
      </div>
    </section>
  )
}

export default RetreatCTA
