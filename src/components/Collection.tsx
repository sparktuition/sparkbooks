import { useState } from 'react'
import './Collection.css'

export default function Collection() {
  const books = [
    {
      title: 'Echoes of the Void',
      desc: 'A thrilling science fiction epic following humanity’s first journey beyond the solar system.',
      details: 'Formats & Pricing: Hardcover: $29.99 · Paperback: $19.99 · eBook: $9.99. Rating: 4.6 (2,300+ reviews). Publication: Zenith Press, Dec 2022. ISBN: 978-1-23456-789-0',
      img: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
    {
      title: 'The Last Vestal',
      desc: 'Transport yourself to ancient Rome in this meticulously researched historical novel.',
      details: 'Formats & Pricing: Hardcover: $26.99 · Paperback: $16.99 · eBook: $8.99. Rating: 4.5 (1,800+ reviews). Publication: Pantheon Books, March 2022. ISBN: 978-1-23456-789-1',
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
    {
      title: 'City of Whispers',
      desc: 'A heartwarming contemporary romance about two strangers who find love amid the chaos of the city.',
      details: 'Formats & Pricing: Hardcover: $24.99 · Paperback: $14.99 · eBook: $6.99. Rating: 4.4 (900+ reviews). Publication: Bluebird Press, Aug 2023. ISBN: 978-1-23456-789-2',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
    {
      title: 'The Silent Patient\'s Echo',
      desc: 'A gripping psychological thriller that delves into the darkest corners of the human mind.',
      details: 'Formats & Pricing: Hardcover: $27.99 · Paperback: $17.99 · eBook: $7.99. Rating: 4.7 (4,100+ reviews). Publication: Shadow Grove Publishing, Jan 2024. ISBN: 978-1-23456-789-3',
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
    {
      title: 'Whispers of the Sunstone',
      desc: 'Embark on an epic fantasy adventure into a realm teeming with magic and ancient secrets.',
      details: 'Formats & Pricing: Hardcover: $31.99 · Paperback: $21.99 · eBook: $11.99. Rating: 4.8 (5,200+ reviews). Publication: Ember & Ash, Nov 2022. ISBN: 978-1-23456-789-4',
      img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
    {
      title: 'The Art of Being Present',
      desc: 'A transformative guide to mindful living, offering practical techniques and gentle wisdom.',
      details: 'Formats & Pricing: Hardcover: $22.99 · Paperback: $12.99 · eBook: $5.99. Rating: 4.3 (800+ reviews). Publication: Riverstone Publishing, Apr 2023. ISBN: 978-1-23456-789-5',
      img: 'https://images.unsplash.com/photo-1526318472351-c75fcf0700d9?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="collection-section">
      <div className="collection-inner">
        <h2 className="collection-title">Explore Our Full Collection</h2>
        <p className="collection-intro">Dive into a curated selection of our most acclaimed works. Each book offers a unique literary journey, crafted with passion and precision. Find your next favorite read and connect with stories that resonate deeply.</p>

        <div className="collection-grid">
          {books.map((b, i) => {
            const open = openIndex === i
            return (
              <article className={`collection-card ${open ? 'open' : ''}`} key={i}>
                <div className="card-media" style={{ backgroundImage: `url(${b.img})` }} />
                <div className="card-body">
                  <h3 className="card-title">{b.title}</h3>
                  <p className="card-desc">{b.desc}</p>

                  <div className={`card-details ${open ? 'visible' : ''}`} aria-hidden={!open}>
                    <p>{b.details}</p>
                  </div>

                  <div className="card-actions">
                    <button className="btn-read" onClick={() => setOpenIndex(open ? null : i)} aria-expanded={open}>{open ? 'Show less' : 'Read more'}</button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
