import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">The Spark Books</h1>
          <h2 className="hero-sub">Stories That Inspire Humanity</h2>
          <p className="hero-desc">
            Welcome to a literary journey where words transform into worlds, and every
            page turns into an unforgettable experience. Discover award-winning
            narratives that touch hearts, challenge minds, and celebrate the human spirit.
          </p>

          <div className="hero-actions">
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Latest Book</button>
              <button className="btn btn-outline">Upcoming Events</button>
            </div>
            <div className="hero-pill" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
