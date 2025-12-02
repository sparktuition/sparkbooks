
import React from 'react';
import './RetreatVilla.css';

const villaImageFiles = [
  "jpeg (8).jpeg",
  "jpg (1).jpg", "jpg (2).jpg", "jpg (3).jpg", "jpg (4).jpg", "jpg (5).jpg", "jpg (6).jpg",
  "jpg (7).jpg", "jpg (8).jpg", "jpg (9).jpg", "jpg (10).jpg", "jpg (11).jpg", "jpg (12).jpg",
  "jpg (13).jpg", "jpg (14).jpg", "jpg (15).jpg", "jpg (16).jpg", "jpg (17).jpg", "jpg (18).jpg",
  "jpg (19).jpg", "jpg (21).jpg", "jpg (22).jpg", "jpg (23).jpg", "jpg (24).jpg", "jpg (25).jpg",
  "jpg (26).jpg", "jpg (27).jpg", "jpg (28).jpg", "jpg (29).jpg"
];

const features = [
  'Modern luxury villa surrounded by pristine Himalayan greenery and natural beauty',
  'Quiet, peaceful, and completely private surroundings designed for deep creative work',
  'Clean, premium rooms with thoughtful amenities and exceptional attention to detail',
  'Panoramic mountain views from terraces, balconies, and intimate writing nooks',
  'Beautiful outdoor spaces for contemplation, inspiration, and creative breakthroughs',
  'Hygienic, freshly prepared meals that nourish both body and creative spirit',
];

const RetreatVilla: React.FC = () => {



  return (
    <section className="retreat-villa retreat-section">
      <div className="retreat-villa-inner retreat-inner">
        <h2 className="villa-title">The Villa: Your Creative Sanctuary</h2>

        {/* Gallery Section */}
        <div className="villa-gallery">
          {villaImageFiles.map((filename, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={`/SparkWritersRetreat/${filename}`}
                alt={`Villa view ${idx + 1}`}
                className="villa-img"
              />
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
  );
};

export default RetreatVilla;
