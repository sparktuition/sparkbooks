import './CollectionsShowcase.css'

export default function CollectionsShowcase() {
  const features = [
    {
      title: 'Epic Series & Box Sets',
      desc: 'Immerse yourself fully in sprawling narratives with our complete series collections. Each set contains beautifully packaged volumes and bonus material.',
      example: 'Example: The Eldoria Chronicles — 5-Book Box Set',
    },
    {
      title: 'Special & Limited Editions',
      desc: 'Elevate your collection with exclusive special editions that include bonus content, alternative covers and signed pages where available.',
      example: 'Example: The Silent Patient — Collector’s Edition (limited run)',
    },
    {
      title: 'Rare Collector\'s Items',
      desc: 'For the most dedicated enthusiasts, discover rare first prints, signed copies and numbered editions sourced from trusted partners.',
      example: 'Example: Whispers of the Sunstone — Signed First Edition',
    },
  ]

  const promos = [
    {
      title: 'Bundle & Save Big',
      desc: 'Purchase any two full series and save 20% automatically at checkout.',
    },
    {
      title: 'Subscriber Exclusive',
      desc: 'Sign up for our newsletter to get early notice on limited releases and a 10% subscriber-only code.',
    },
    {
      title: 'Bulk Purchase Rewards',
      desc: 'Receive free standard shipping on orders over $100 and priority handling for limited editions.',
    },
  ]

  return (
    <section className="showcase-section">
      <div className="showcase-inner">
        <h2 className="showcase-title">Discover Our Exclusive Book Series & Collections</h2>
        <p className="showcase-sub">Dive deeper into the worlds you love or embark on new literary adventures with our carefully curated book series and collections. From comprehensive box sets that complete a saga to limited-edition collector's items, we offer a range of options for every avid reader.</p>

        <div className="showcase-grid">
          {features.map((f, i) => (
            <article className="feature-card" key={i}>
              <div className="feature-icon" aria-hidden="true">📚</div>
              <div className="feature-body">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <p className="feature-example">{f.example}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="promo-row">
          {promos.map((p, i) => (
            <div className="promo-card" key={i}>
              <h4 className="promo-title">{p.title}</h4>
              <p className="promo-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
