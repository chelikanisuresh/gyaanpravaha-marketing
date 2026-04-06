import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Book a Discovery Call — RBI Compliance Advisory',
  description: 'Book a 30-minute discovery call with Gyaan Pravaha — RBI compliance advisory for NBFCs, SFBs, and Banks. Mumbai. +91-9833823262.',
  alternates: { canonical: 'https://gyaanpravaha.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Contact</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '0.75rem' }}>Start with a Conversation</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.8 }}>
            A 30-minute discovery call is all it takes to identify which practice areas are most relevant to your institution's current priorities.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)' }}>
        <div className="contact-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Get in Touch</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Every advisory engagement starts with a conversation. No obligation. No generic pitch. Just a direct discussion about where your institution is and what would actually help.
            </p>

            {[
              { icon: '📞', label: 'Phone / WhatsApp', value: '+91-9833823262', href: 'tel:+919833823262' },
              { icon: '✉️', label: 'Email', value: 'suresh@gyaanpravaha.com', href: 'mailto:suresh@gyaanpravaha.com' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/sureshchelikani', href: 'https://linkedin.com/in/sureshchelikani' },
              { icon: '📍', label: 'Location', value: 'Mumbai, India', href: undefined },
            ].map(detail => (
              <div key={detail.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '1.2rem', width: '40px', height: '40px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{detail.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{detail.label}</div>
                  {detail.href ? (
                    <a href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}>{detail.value}</a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{detail.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Engagement Models</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>Annual Retainer · Project-Based · Audit Sprint (2–4 weeks) · Per Diem Advisory Days<br /><em>Fees available on request.</em></p>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
