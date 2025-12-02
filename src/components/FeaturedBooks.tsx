import './FeaturedBooks.css'

export default function FeaturedBooks() {
  const books = [
    {
      title: 'Whispers of Yesterday',
      desc: 'A haunting tale of memory, loss, and redemption set against the backdrop of a forgotten coastal town. Winner of the National Fiction Award.',
    },
    {
      title: 'Between the Lines',
      desc: 'A celebrated collection of poetry exploring themes of identity, belonging, and the quiet moments that define our existence.',
    },
    {
      title: 'The Weight of Words',
      desc: 'Philosophical essays examining how language shapes reality, consciousness, and human connection in the digital age.',
    },
  ]

  return (
    <section className="featured-section">
      <div className="featured-inner">
        <h2 className="featured-title">Featured Book Collection</h2>
        <p className="featured-sub">Explore a diverse catalogue of thought-provoking narratives, from heart-wrenching fiction to illuminating philosophical essays. Each work offers a unique perspective on the human condition.</p>

        <div className="featured-grid">
          {books.map((b, i) => (
            <article className="featured-card" key={i}>
              <h3 className="book-title">{b.title}</h3>
              <p className="book-desc">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
