'use client'
import { useState } from 'react'

const PRACTICES = [
  'Practice A — LOS / LMS Technology',
  'Practice B — RBI Regulatory Compliance',
  'Practice C — DPDPA / Data Protection',
  'Practice D — Credit & Institutional',
  'Practice E — CIC Advisory',
  'Practice F — Corporate Training',
  'Multiple / Not Sure Yet',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', institution: '', email: '', phone: '', practice: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.institution || !form.email || !form.phone) {
      setError('Please fill in all required fields.'); return
    }
    setStatus('sending'); setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please email us directly at thornleyadvisoryservices@gmail.com')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '4px', fontFamily: 'inherit', fontSize: '0.95rem',
    background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none',
    transition: 'border-color 0.2s',
  }

  if (status === 'sent') {
    return (
      <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>Request Received</h3>
        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>Thank you, {form.name}. We will respond within 1 business day to confirm your discovery call.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '2rem' }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Book a Discovery Call</h3>
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Tell us about your institution — we'll schedule a 30-minute call.</p>

      {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '6px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#f87171', marginBottom: '1rem' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label style={{ color: 'rgba(255,255,255,0.45)' }}>Your Name <span className="req">*</span></label>
          <input style={inputStyle} placeholder="Full name" value={form.name} onChange={update('name')} required />
        </div>
        <div className="form-group">
          <label style={{ color: 'rgba(255,255,255,0.45)' }}>Institution <span className="req">*</span></label>
          <input style={inputStyle} placeholder="Bank / NBFC / SFB name" value={form.institution} onChange={update('institution')} required />
        </div>
        <div className="form-group">
          <label style={{ color: 'rgba(255,255,255,0.45)' }}>Email <span className="req">*</span></label>
          <input style={inputStyle} type="email" placeholder="work@institution.com" value={form.email} onChange={update('email')} required />
        </div>
        <div className="form-group">
          <label style={{ color: 'rgba(255,255,255,0.45)' }}>Phone <span className="req">*</span></label>
          <input style={inputStyle} type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update('phone')} required />
        </div>
      </div>

      <div className="form-group">
        <label style={{ color: 'rgba(255,255,255,0.45)' }}>Practice Area of Interest</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.practice} onChange={update('practice')}>
          <option value="">Select a practice</option>
          {PRACTICES.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label style={{ color: 'rgba(255,255,255,0.45)' }}>Briefly describe your challenge</label>
        <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} placeholder="What's the key problem you're trying to solve?" value={form.message} onChange={update('message')} />
      </div>

      <button type="submit" disabled={status === 'sending'} style={{
        width: '100%', padding: '1rem', borderRadius: '4px', border: 'none',
        background: status === 'sending' ? 'rgba(201,168,76,0.5)' : '#c9a84c',
        color: '#0d1b2e', fontWeight: 700, fontSize: '1rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        letterSpacing: '0.05em', transition: 'background 0.2s',
      }}>
        {status === 'sending' ? 'Sending...' : 'Request Discovery Call →'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.75rem' }}>We respond within 1 business day to confirm the call.</p>
    </form>
  )
}
