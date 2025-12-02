import React from 'react'
import './AuthorServices.css'

const AuthorServices: React.FC = () => {
  return (
    <section className="services-hero">
      <div className="services-inner">
        <h1>Elevate Your Craft: Professional Author Services</h1>
        <p className="lead">Beyond the pages of our acclaimed books, our author offers a suite of personalized services designed to support aspiring and established writers alike. From honing your manuscript to inspiring audiences, these offerings provide unparalleled expertise and guidance.</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Writing Workshops</h3>
            <p>Engage in immersive sessions focusing on narrative structure, character development, and genre-specific techniques. Workshops are tailored for groups of 10–20.</p>
            <p className="meta"><strong>Pricing:</strong> Starting from $150 per participant for a half-day session.<br/><strong>Booking:</strong> Check our events calendar or inquire about private group workshops.</p>
          </div>

          <div className="service-card">
            <h3>Manuscript Consultations</h3>
            <p>Receive in-depth feedback on your work-in-progress covering plot, pacing, voice, and marketability. Services range from developmental critiques to line edits.</p>
            <p className="meta"><strong>Pricing:</strong> From $0.05 per word (minimum 20,000 words).<br/><strong>Booking:</strong> Submit your manuscript sample for a custom quote.</p>
          </div>

          <div className="service-card">
            <h3>Speaking Engagements</h3>
            <p>Inspire your audience with captivating talks on the writing process, literary themes, and the journey of authorship. Ideal for conferences, festivals, and educational institutions.</p>
            <p className="meta"><strong>Pricing:</strong> Honorarium starting at $2,500 + travel for a 45–60 minute keynote.<br/><strong>Booking:</strong> Contact our publicist with event details and date preferences.</p>
          </div>

          <div className="service-card">
            <h3>Book Club Visits</h3>
            <p>Enhance your book club discussion with a virtual or in-person visit from the author. Share insights into the work, answer questions, and discuss the literary craft.</p>
            <p className="meta"><strong>Pricing:</strong> Virtual visits are complimentary; in-person visits may include a travel stipend (starting at $500).<br/><strong>Booking:</strong> Schedule your visit directly through our website.</p>
          </div>

          <div className="service-card">
            <h3>Literary Mentorship Programs</h3>
            <p>Embark on a guided journey with personalized one-on-one mentorship. Programs include regular check-ins, goal setting, manuscript development, and career advice over a multi-month period.</p>
            <p className="meta"><strong>Pricing:</strong> Tailored packages starting at $500 per month.<br/><strong>Booking:</strong> Apply through our selective program portal; limited spots available annually.</p>
          </div>

          <div className="service-card">
            <h3>Corporate Writing Services</h3>
            <p>Leverage the author's narrative expertise for your business needs — executive speeches, brand storytelling, and thought leadership content designed to elevate your message.</p>
            <p className="meta"><strong>Pricing:</strong> Project-based; custom quotes available upon consultation.<br/><strong>Booking:</strong> Inquire via email with your project brief for a detailed proposal.</p>
          </div>
        </div>

        <p className="contact-cta">Ready to collaborate or learn more? <a href="#contact">Contact us today</a> to discuss how we can bring your writing aspirations to life.</p>
      </div>
    </section>
  )
}

export default AuthorServices
