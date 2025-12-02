import React from 'react'
import './RetreatFeatures.css'

const RetreatFeatures: React.FC = () => {
  return (
    <section className="retreat-features retreat-section">
      <div className="retreat-features-inner retreat-inner">
        <h2 className="retreat-features-title">A Sanctuary for Your Creative Soul</h2>

        <div className="features-grid">
          <article className="feature-card">
            <h3 className="feature-title">Luxury Villa</h3>
            <p className="feature-text">A private, silent retreat space surrounded by Himalayan greenery with panoramic mountain views</p>
          </article>

          <article className="feature-card">
            <h3 className="feature-title">Serene Surroundings</h3>
            <p className="feature-text">Immerse yourself in nature's tranquillity, where birdlife and mountain air fuel inspiration</p>
          </article>

          <article className="feature-card">
            <h3 className="feature-title">Exquisite Dining</h3>
            <p className="feature-text">Fresh, hygienic, delicious meals prepared with care to nourish body and mind</p>
          </article>

          <article className="feature-card">
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
