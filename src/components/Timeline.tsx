import './Timeline.css'

export default function Timeline() {
  const items = [
    {
      title: 'Early Beginnings',
      desc: 'First short story published in university literary magazine, sparking a lifelong passion for the written word',
      num: 1,
    },
    {
      title: 'Debut Novel',
      desc: 'Released first full-length novel to critical acclaim, establishing a unique voice in contemporary fiction',
      num: 2,
    },
    {
      title: 'International Recognition',
      desc: 'Won prestigious literary awards and gained translation rights in twelve languages worldwide',
      num: 3,
    },
    {
      title: 'Bestselling Success',
      desc: 'Latest trilogy topped charts, securing position as one of the most influential voices in modern literature',
      num: 4,
    },
  ]

  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        <h2 className="timeline-title">The Journey: A Literary Timeline</h2>

        <div className="timeline-wrap">
          <div className="timeline-center-line" aria-hidden="true"></div>

          <div className="timeline-items">
            {items.map((it, idx) => (
              <div className={`timeline-item ${idx % 2 === 0 ? 'top' : 'bottom'}`} key={it.num}>
                <div className="timeline-content">
                  <h3 className="timeline-item-title">{it.title}</h3>
                  <p className="timeline-item-desc">{it.desc}</p>
                </div>
                <div className="timeline-marker">
                  <span className="marker-circle" aria-hidden="true"></span>
                  <span className="marker-number">{it.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
