import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LOS / LMS Technology Advisory — Lending Systems, Cloud Migration | Practice A',
  description: 'Expert LOS/LMS advisory for NBFCs and Banks — lending system architecture, cloud migration, credit decisioning automation, eKYC integration, M&A system integration. Practitioner-led.',
  keywords: ['LOS advisory India', 'LMS migration NBFC', 'lending technology consultant', 'LOS LMS cloud migration', 'credit decisioning automation', 'eKYC NBFC', 'Pennant LMS', 'NBFC technology'],
  alternates: { canonical: 'https://gyaanpravaha.in/services/los-lms' },
}

const COVERAGE = [
  { title: 'LOS Architecture Review', desc: 'Vendor assessment (build vs buy), integration design, scalability planning, and regulatory alignment.' },
  { title: 'Credit Decisioning Automation', desc: 'Rule engine logic, ML scorecard build & validation, risk-based pricing, and approval workflow design.' },
  { title: 'LMS Optimisation', desc: 'NPA logic validation, collections workflow design, regulatory reporting accuracy, and GL reconciliation.' },
  { title: 'Cloud Migration Advisory', desc: 'Phased approach, zero-downtime execution, data integrity validation, and business continuity.' },
  { title: 'M&A System Integration', desc: 'Two platforms, one seamless Day-1 operation — including branch network, product mapping, and data migration.' },
  { title: 'eKYC, Video KYC, CKYC Integration', desc: 'UIDAI licensing advisory through go-live, API integration, fallback handling, and regulatory compliance.' },
  { title: 'MFI Branch Setup', desc: 'End-to-end LOS/LMS integration for MFI branch networks — from centre management to disbursement.' },
  { title: 'Capacity Scaling', desc: 'Production capacity increase without headcount addition — automation, STP, and workflow redesign.' },
]

const OUTCOMES = [
  'DHFL-PCHFL system merger — 150+ branches live on Day 1 with zero operational disruption',
  'Pennant LMS to cloud — completed with zero downtime',
  '3rd NBFC in India to secure UIDAI eKYC licence',
  '35% production capacity increase at Axis Bank — zero headcount addition',
  '30%+ reduction in manual underwriting via ML-based scorecard deployment',
]

export default function LOSLMSPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice A</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>LOS / LMS Technology Advisory & Cloud Migration</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>Build technology that scales with your ambitions — not against your regulations. Practitioner-led advisory on lending systems, automation, and cloud migration with zero-downtime execution.</p>
          <Link href="/contact" className="btn-primary">Request LOS/LMS Advisory</Link>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">What This Service Covers</div>
          <h2 className="section-title">Lending Technology — End to End</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.7 }}>Every recommendation comes from having personally executed these mandates — including the DHFL-PCHFL merger across 150+ branches live on Day 1, Pennant LMS cloud migration with zero downtime, and UIDAI eKYC licensing as the 3rd NBFC in India to achieve it.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {COVERAGE.map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid var(--gold)' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner">
          <div className="section-label">Signature Outcomes</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '2rem' }}>Delivered Inside Regulated Institutions</h2>
          {OUTCOMES.map((o, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{o}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center', borderTop: '1px solid var(--border-dark)' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Ready to Modernise Your Lending Stack?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>A 30-minute discovery call will map your current system gaps to a pragmatic roadmap.</p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
