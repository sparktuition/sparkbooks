import React from 'react'
import './RetreatFeatures.css'

const RetreatFeatures: React.FC = () => {
  return (
    <section className="retreat-features retreat-section">
      <div className="retreat-features-inner retreat-inner">
        <h2 className="retreat-features-title">A Sanctuary for Your Creative Soul</h2>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7v7c0 5 4 9 9 9s9-4 9-9V7l-9-5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="feature-title">Luxury Villa</h3>
            <p className="feature-text">A private, silent retreat space surrounded by Himalayan greenery with panoramic mountain views</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.2"/></svg>
            </div>
            <h3 className="feature-title">Serene Surroundings</h3>
            <p className="feature-text">Immerse yourself in nature's tranquillity, where birdlife and mountain air fuel inspiration</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="feature-title">Exquisite Dining</h3>
            <p className="feature-text">Fresh, hygienic, delicious meals prepared with care to nourish body and mind</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="1.2"/></svg>
            </div>
            <h3 className="feature-title">Creative Freedom</h3>
            <p className="feature-text">Open, pressure-free writing time in dedicated spaces both indoors and outdoors</p>
          </article>
        </div>

        <p className="retreat-features-note">This is the same enchanting region where legendary ornithologist <strong>Salim Ali</strong> walked to study the colourful migratory birds arriving from Europe — a true paradise for nature lovers and creators alike.</p>
      </div>
    </section>
  )
}

export default RetreatFeatures
