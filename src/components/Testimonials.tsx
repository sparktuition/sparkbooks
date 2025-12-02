import React from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    title: 'Literary Brilliance',
    quote: `"Every page resonates with authenticity and emotional depth. This author understands the human heart like few others. A masterpiece that will stay with you long after the final page."`,
    by: 'Sarah Mitchell, The Literary Review'
  },
  {
    title: 'Captivating Storytelling',
    quote: `"Beautifully crafted narratives that transport readers to worlds both familiar and extraordinary. The character development is exceptional, making every story feel deeply personal."`,
    by: "James Anderson, Reader's Digest"
  },
  {
    title: 'Transformative Reading',
    quote: `"These books changed how I view the world. The prose is elegant, the themes profound, and the stories unforgettable. Highly recommend to anyone seeking meaningful literature."`,
    by: 'Emma Thompson, Book Club Enthusiast'
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-hero">
      <div className="testimonials-inner">
        <h2>What Readers Are Saying</h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="testimonial-card">
              <div className="quote-mark top">“</div>
              <h4 className="t-title">{t.title}</h4>
              <p className="t-quote">{t.quote}</p>
              <p className="t-by">— {t.by}</p>
              <div className="quote-mark bottom">”</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
