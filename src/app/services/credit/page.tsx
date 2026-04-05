import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Credit & Institutional Advisory — Credit Policy, Risk Modelling | Practice D',
  description: 'Credit policy design, ML scorecard implementation, underwriting automation, portfolio quality management for NBFCs and Banks. 10 years at Axis Bank managing ₹3L+ Crore retail book.',
  alternates: { canonical: 'https://gyaanpravaha.in/services/credit' },
}

export default function CreditPage() {
  const coverage = [
    { title: 'Credit Policy Design', desc: 'Board-approved credit policy — product-wise lending norms, exposure limits, approval matrices, and review calendar.' },
    { title: 'ML Scorecard Implementation', desc: 'Application scorecard build & validation, behaviour scorecard, collection scorecard — from data to deployment.' },
    { title: 'Underwriting Automation', desc: 'Rule engine logic design, credit workflow automation, STP (Straight-Through Processing) for retail loans.' },
    { title: 'Portfolio Quality Management', desc: 'Early warning signals, vintage analysis, delinquency tracking, and portfolio health dashboards.' },
    { title: 'Risk Appetite & Governance', desc: 'Risk appetite statement, governance council structure, risk register, control matrix, and audit interface.' },
    { title: 'Regulatory Reporting Accuracy', desc: 'SMA reporting, CRILC reporting, large exposure reporting, and supervisory return accuracy.' },
  ]
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice D</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>Credit & Institutional Advisory</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>Credit policy, underwriting automation, and portfolio management — from someone who managed a ₹3,00,000+ Crore retail lending book at Axis Bank across five product lines.</p>
          <Link href="/contact" className="btn-primary">Request Credit Advisory</Link>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">What This Service Covers</div>
          <h2 className="section-title">Credit & Institutional — End to End</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {coverage.map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid #145a32' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Strengthen Your Credit Framework</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>A 30-minute call will identify the highest-priority gaps in your credit policy and portfolio management framework.</p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
