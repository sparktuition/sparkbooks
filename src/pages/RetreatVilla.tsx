import React from 'react'
import './RetreatVilla.css'

const RetreatVilla: React.FC = () => {
  const villaImages = [
    { id: 1, alt: 'Modern villa exterior with mountain view' },
    { id: 2, alt: 'Luxury bedroom with mountain vista' },
    { id: 3, alt: 'Outdoor terrace with seating area' },
    { id: 4, alt: 'Living room with fireplace' },
    { id: 5, alt: 'Balcony overlooking mountains' },
    { id: 6, alt: 'Dining area with mountain views' },
  ]

  const features = [
    'Modern luxury villa surrounded by pristine Himalayan greenery and natural beauty',
    'Quiet, peaceful, and completely private surroundings designed for deep creative work',
    'Clean, premium rooms with thoughtful amenities and exceptional attention to detail',
    'Panoramic mountain views from terraces, balconies, and intimate writing nooks',
    'Beautiful outdoor spaces for contemplation, inspiration, and creative breakthroughs',
    'Hygienic, freshly prepared meals that nourish both body and creative spirit',
  ]

  return (
    <section className="retreat-villa retreat-section">
      <div className="retreat-villa-inner retreat-inner">
        <h2 className="villa-title">The Villa: Your Creative Sanctuary</h2>

        {/* Gallery Section */}
        <div className="villa-gallery">
          {villaImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-placeholder"></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="villa-features">
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>

          {/* Authenticity Box */}
          <div className="authenticity-box">
            <div className="authenticity-icon">✓</div>
            <div className="authenticity-content">
              <h3 className="authenticity-title">Authenticity Guaranteed:</h3>
              <p className="authenticity-text">
                Every photograph on our website is genuine villa photography, ensuring complete
                transparency and trust. What you see is precisely what you'll experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatVilla
