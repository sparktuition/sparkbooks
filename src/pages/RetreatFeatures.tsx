import React from 'react'
import './RetreatFeatures.css'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog'

const RetreatFeatures: React.FC = () => {
  return (
    <section className="retreat-features retreat-section">
      <div className="retreat-features-inner retreat-inner">
        <h2 className="retreat-features-title">A Sanctuary for Your Creative Soul</h2>

        <div className="sanctuary-cta">
          <a className="sanctuary-cta-btn" href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">Register for the Retreat</a>
        </div>

        <div className="sanctuary-grid">
          <div className="sanctuary-row">
            <img className="sanctuary-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&q=80" alt="Luxury Villa" />
            <div className="sanctuary-item">
              <h3 className="sanctuary-heading">Luxury Villa</h3>
              <p className="sanctuary-text">A private, silent retreat space surrounded by Himalayan greenery with panoramic mountain views</p>
            </div>
          </div>
          <div className="sanctuary-row">
            <img className="sanctuary-img" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop&q=80" alt="Serene Surroundings" />
            <div className="sanctuary-item">
              <h3 className="sanctuary-heading">Serene Surroundings</h3>
              <p className="sanctuary-text">Immerse yourself in nature's tranquillity, where birdlife and mountain air fuel inspiration</p>
            </div>
          </div>
          <div className="sanctuary-row">
            <img className="sanctuary-img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80" alt="Exquisite Dining" />
            <div className="sanctuary-item">
              <h3 className="sanctuary-heading">Exquisite Dining</h3>
              <p className="sanctuary-text">Fresh, hygienic, delicious meals prepared with care to nourish body and mind</p>
            </div>
          </div>
          <div className="sanctuary-row">
            <img className="sanctuary-img" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop&q=80" alt="Creative Freedom" />
            <div className="sanctuary-item">
              <h3 className="sanctuary-heading">Creative Freedom</h3>
              <p className="sanctuary-text">Open, pressure-free writing time in dedicated spaces both indoors and outdoors</p>
            </div>
          </div>
        </div>

        <p className="retreat-features-note">This is the same enchanting region where legendary ornithologist <strong>Salim Ali</strong> walked to study the colourful migratory birds arriving from Europe — a true paradise for nature lovers and creators alike.</p>
      </div>
    </section>
  )
}

export default RetreatFeatures
