import './AuthorDetails.css'

export default function AuthorDetails() {
  const items = [
    {
      key: 'education',
      title: "Background & Education",
      desc: "A journey from academic pursuits in comparative literature to honing the craft through independent study and workshops. This foundation in diverse storytelling traditions deeply informs the nuanced narratives created today.",
    },
    {
      key: 'philosophy',
      title: "Writing Philosophy",
      desc: "Driven by a belief in the power of empathy, the author meticulously crafts stories that explore the human condition, seeking to illuminate universal truth through individual experience and transformative arcs.",
    },
    {
      key: 'process',
      title: "Creative Process",
      desc: "The writing process blends meticulous research with intuitive storytelling. It often begins with extensive outlines, followed by an organic exploration of character and theme, culminating in rigorous revision cycles.",
    },
    {
      key: 'awards',
      title: "Awards & Recognition",
      desc: "With literary awards and numerous nominations, the author's work has been consistently celebrated by critics and readers alike for its depth, originality, and profound impact on contemporary literature.",
    },
    {
      key: 'influences',
      title: "Key Influences",
      desc: "Influences range from classical literary masters who championed psychological depth to modern philosophers exploring existential questions, alongside a profound appreciation for global folktales and myth.",
    },
    {
      key: 'personal',
      title: "Personal Interests",
      desc: "Away from writing, the author enjoys hiking in natural parks, exploring historical sites, and practicing narrative photography, all of which often spark inspiration for new settings and character arcs.",
    },
  ]

  return (
    <section className="author-section">
      <div className="author-inner">
        <h2 className="author-title">A Deeper Look: The Author's Journey & Craft</h2>

        <div className="author-list">
          {items.map((it, idx) => (
            <div className="author-item" key={idx}>
              <div className="author-icon" aria-hidden="true">
                {renderIcon(it.key)}
              </div>

              <div className="author-content">
                <h3 className="author-item-title">{it.title}</h3>
                <p className="author-item-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderIcon(key: string) {
  switch (key) {
    case 'education':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'philosophy':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3S9 7.343 9 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21c0-4 6-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'process':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'awards':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l2.5 5.5L20 9l-4 3.5L17 20l-5-2.5L7 20l1-7.5L4 9l5.5-1.5L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'influences':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'personal':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}
