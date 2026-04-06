import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icons'

export const metadata: Metadata = {
  title: 'ComplianceOS — RBI Compliance Management Platform for NBFCs',
  description: 'ComplianceOS is the complete RBI compliance management platform for NBFCs and financial institutions. Obligation register, regulatory calendar, circular tracking, audit-ready reporting.',
  keywords: ['RBI compliance software', 'NBFC compliance platform', 'regulatory obligation register', 'ComplianceOS', 'RBI circular tracker', 'compliance management system India'],
  alternates: { canonical: 'https://gyaanpravaha.com/complianceos' },
  openGraph: {
    title: 'ComplianceOS — RBI Compliance Platform for NBFCs | Gyaan Pravaha',
    description: 'The complete RBI compliance management platform. Obligation register, regulatory calendar, circular tracking, audit-ready reporting.',
    url: 'https://gyaanpravaha.com/complianceos',
  },
}

const FEATURES = [
  { icon: 'register' as const, title: 'Obligation Register', desc: '731+ mapped obligations across all RBI Master Directions — section-wise, owner-tagged, frequency-tracked.' },
  { icon: 'calendar' as const, title: 'Regulatory Calendar', desc: '61 compliance deadlines — annual, quarterly, monthly — with institution-type filtering.' },
  { icon: 'browser' as const, title: 'RBI Browser', desc: 'Live index of all Master Directions, Master Circulars, Draft Notifications, and NHB Circulars.' },
  { icon: 'alert' as const, title: 'Upcoming Changes', desc: 'Notifications on amendments and new circulars — never miss a regulatory update again.' },
  { icon: 'monitor' as const, title: 'RBI Monitor', desc: 'Automated weekly check of the RBI website for new Master Directions not yet in the platform.' },
  { icon: 'scales' as const, title: 'Acts & Regulations', desc: 'Obligations under Companies Act, IT Act, DPDPA, SEBI, CICRA, PMLA, RERA, and more.' },
]

const ENTITY_TYPES = ['Banks', 'NBFCs', 'Housing Finance Companies', 'Small Finance Banks', 'Microfinance Institutions', 'Credit Information Companies']

export default function ComplianceOSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '0.3rem 1rem', fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Product by Gyaan Pravaha
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            ComplianceOS
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '620px', margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
            The complete RBI compliance management platform for Banks, NBFCs, and Financial Institutions — built from practitioner experience, not vendor templates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a Demo</Link>
            <Link href="/contact" className="btn-outline">Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border-dark)', padding: '2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { value: '731+', label: 'Mapped Obligations' },
            { value: '61', label: 'Compliance Deadlines' },
            { value: '25+', label: 'Master Directions' },
            { value: '16', label: 'Acts & Regulations' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: '#c9a84c' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Platform Features</div>
          <h2 className="section-title">Everything Your Compliance Team Needs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}><Icon name={f.icon} size={32} color='var(--gold)' /></div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity types */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label">Built For</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '2.5rem' }}>All RBI-Regulated Financial Institutions</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {ENTITY_TYPES.map(et => (
              <span key={et} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px', padding: '0.5rem 1.25rem', fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.08em' }}>{et}</span>
            ))}
          </div>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Request a Demo for Your Institution</Link>
        </div>
      </section>
    </>
  )
}
