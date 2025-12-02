import './Stats.css'

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        <h3 className="stats-title">Literary Excellence at a Glance</h3>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Published Works</div>
            <div className="stat-desc">Spanning fiction, poetry, and philosophy across multiple languages</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">20K+</div>
            <div className="stat-label">Devoted Readers</div>
            <div className="stat-desc">A growing community of book enthusiasts worldwide</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Literary Awards</div>
            <div className="stat-desc">Recognition from prestigious institutions and critics</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">12</div>
            <div className="stat-label">Years Writing</div>
            <div className="stat-desc">A decade of crafting memorable stories and characters</div>
          </div>
        </div>
      </div>
    </section>
  )
}
