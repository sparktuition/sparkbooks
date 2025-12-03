
import { useEffect } from 'react';
import './Hero.css'


export default function Hero() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-section-inner">
        <div className="hero-section-copy">
          <h1 className="hero-section-title">The Spark Books</h1>
          <h2 className="hero-section-sub">Stories That Inspire Humanity</h2>
          <p className="hero-section-desc">
            Welcome to a literary journey where words transform into worlds, and every
            page turns into an unforgettable experience. Discover award-winning
            narratives that touch hearts, challenge minds, and celebrate the human spirit.
          </p>

          <div className="hero-section-actions">
            <div className="hero-section-buttons">
              <button className="hero-section-btn hero-section-btn-primary">Explore Latest Book</button>
              <button className="hero-section-btn hero-section-btn-outline">Upcoming Events</button>
            </div>
            <div className="hero-section-pill" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
