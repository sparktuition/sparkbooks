import React from 'react'
import './RetreatHeroTwoColumn.css'

const RetreatHeroTwoColumn: React.FC = () => {
  return (
    <section className="retreat-hero retreat-section">
      <div className="retreat-hero-grid retreat-inner">
          <div className="retreat-copy">
          <h1 className="retreat-title">Step Into a World Where Creativity Awakens</h1>

          <p className="retreat-paragraph">
            The <strong>Spark Writers' Retreat 2026</strong> is a transformative seven-day immersive experience hosted in the picturesque hills of <strong>Dalhousie</strong>, where snow-capped peaks meet tranquil valleys.
          </p>

          <p className="retreat-paragraph">
            Designed for writers who seek inspiration, peace, and expert guidance, this retreat offers a rare opportunity to reconnect with your creative spirit in a setting that has inspired countless artists and naturalists throughout history.
          </p>
        </div>

        <div className="retreat-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80&auto=format&fit=crop"
            alt="Mountain landscape"
          />
        </div>
      </div>
    </section>
  )
}

export default RetreatHeroTwoColumn
