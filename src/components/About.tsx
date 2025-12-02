import './About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <div className="about-media">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c6e0f3f9d1b5f2d5b1a3d7c6b2a8e3a"
            alt="Author"
          />
        </div>

        <div className="about-copy">
          <h3 className="about-title">About the Author</h3>

          <p className="about-text">
            From humble beginnings scribbling stories in weathered notebooks to becoming a
            celebrated voice in contemporary literature, this journey has been nothing short of
            extraordinary. Every book represents years of dedication, countless revisions, and an
            unwavering commitment to authentic storytelling.
          </p>

          <p className="about-text">
            Inspired by diverse cultures, human resilience, and the beauty found in everyday
            moments, the work explores themes of identity, belonging, and transformation. Each
            narrative is meticulously crafted to resonate with readers across generations and
            backgrounds.
          </p>
        </div>
      </div>
    </section>
  )
}
