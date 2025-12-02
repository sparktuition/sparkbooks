import React, { useState } from 'react'
import './ContactSection.css'
import { addContactSubmission } from '../lib/firebase'

const ContactSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    try {
      await addContactSubmission({ name, email, message })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setShowForm(false)
    } catch (err) {
      // Log detailed error information for debugging
      console.error('[contact] submission failed', {
        error: err,
        payload: { name, email, message },
      })
      // If error has a code or message, log explicitly
      try {
        // @ts-ignore
        if (err && (err.code || err.message)) {
          // @ts-ignore
          console.error('[contact] error.code:', err.code, 'error.message:', err.message)
        }
      } catch (e) {
        // ignore
      }
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

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
            <button className="subscribe-btn">Subscribe to Newsletter</button>
            <button className="events-btn" onClick={() => setShowForm(true)}>Contact for Events</button>
          </div>

          {status === 'success' && <div className="contact-success">Thank you — your message was submitted.</div>}
          {status === 'error' && <div className="contact-error">Submission failed. Please try again later.</div>}
        </div>
        <div className="contact-visual">
          <img src="https://picsum.photos/seed/contactdesk/420/320" alt="desk and books" className="contact-img" />
        </div>
      </div>

      {showForm && (
        <div className="contact-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Message
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required />
              </label>

              <div className="form-actions">
                <button type="button" className="btn-outline" onClick={() => setShowForm(false)} disabled={loading}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactSection