import React from 'react'
import './ContactSection.css'

const ContactSection: React.FC = () => {

  return (
    <section className="contact-hero">
      <div className="contact-inner">
        <div className="contact-content">
          <h2>Stay Connected</h2>
          <h3>Join the Literary Community</h3>
          <p>Subscribe to receive exclusive content, early chapter previews, and special offers. Be the first to know about new releases, events, and behind-the-scenes insights into the creative process.</p>

          <div className="newsletter-card">
            <div className="newsletter-icon" aria-hidden>✉️</div>
            <div>
              <strong>Newsletter Benefits:</strong> Monthly writing tips, recommended reading lists, exclusive short stories, and advance notice of book signings in your area.
            </div>
          </div>

          <div className="contact-touch">
            <h4>Get in Touch</h4>
            <p>For speaking engagements, media inquiries, or collaboration opportunities, please reach out. Whether you’re a reader, event organiser, or fellow writer, all thoughtful correspondence is welcome.</p>
          </div>

          <div className="contact-actions">
            <a className="subscribe-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Subscribe to Newsletter</a>
            <a className="events-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe_XC5yOH7QyntgEfZk9uvkpXpkO5aj1rvkjoB4Ihv-hoXfsw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Contact for Events</a>
          </div>
        </div>
        <div className="contact-visual">
          <img src="https://picsum.photos/seed/contactdesk/420/320" alt="desk and books" className="contact-img" />
        </div>
      </div>

      {/* modal removed — contact now uses Google Form link */}
    </section>
  )
}

export default ContactSection