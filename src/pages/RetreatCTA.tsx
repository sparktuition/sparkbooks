import React, { useState } from 'react'
import './RetreatCTA.css'
import { addRetreatSubmission } from '../lib/firebase'

const RetreatCTA: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('General inquiry')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    try {
      await addRetreatSubmission({ name, email, phone, interest, notes })
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setInterest('General inquiry')
      setNotes('')
      setShowForm(false)
    } catch (err) {
      console.error('[retreat] submission failed', { error: err, payload: { name, email, phone, interest } })
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="retreat-cta retreat-section">
      <div className="retreat-cta-inner retreat-inner">
        <h2 className="cta-title">
          <span className="cta-highlight">This retreat brings all of it together — beautifully and powerfully.</span>
        </h2>

        <div className="cta-actions">
          <button className="btn btn-primary">Begin Your Transformation</button>
          <button className="btn btn-outline" onClick={() => setShowForm(true)}>Get in Touch</button>
        </div>

        {status === 'success' && <div className="cta-success">Thanks — we received your enquiry.</div>}
        {status === 'error' && <div className="cta-error">Submission failed. Please try again later.</div>}
      </div>

      {showForm && (
        <div className="retreat-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="retreat-modal" onClick={(e) => e.stopPropagation()}>
            <h3>I'm Interested — Reach Out</h3>
            <form className="retreat-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Phone (optional)
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              <label>
                Interest
                <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                  <option>General inquiry</option>
                  <option>Group booking</option>
                  <option>Press / media</option>
                  <option>Partnerships</option>
                </select>
              </label>
              <label>
                Notes
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} />
              </label>

              <div className="retreat-form-actions">
                <button type="button" className="btn-outline" onClick={() => setShowForm(false)} disabled={loading}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send Enquiry'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default RetreatCTA
