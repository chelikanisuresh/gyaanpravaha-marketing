import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIC Advisory — CICRA, RBI Credit Information Circulars | Practice E',
  description: 'Expert CIC advisory for NBFCs, Banks, and SFBs — CICRA 2005, 21 RBI circulars on credit information, bureau submission quality, TUDF/Metro 2 format, dispute resolution.',
  keywords: ['CIC advisory India', 'CICRA compliance', 'RBI credit information circulars', 'CIBIL compliance NBFC', 'bureau submission TUDF Metro2', 'credit information reporting RBI'],
  alternates: { canonical: 'https://gyaanpravaha.in/services/cic' },
}

export default function CICPage() {
  const coverage = [
    { title: '21 RBI Circulars on Credit Information', desc: 'Systematic mapping of all 21 RBI circulars — obligation-by-obligation, circular-wise status, and action register.' },
    { title: 'CICRA 2005 Compliance', desc: 'Credit Information Companies (Regulation) Act compliance — member obligations, data quality standards, and dispute resolution framework.' },
    { title: 'Bureau Submission Quality Audit', desc: 'LMS-to-CIC pipeline audit — TUDF/Metro 2 format accuracy, rejection root cause analysis, and remediation plan.' },
    { title: 'Multi-Bureau Management', desc: 'CIBIL, Experian, Equifax, and CRIF Highmark — submission pipeline, format mapping, and reconciliation.' },
    { title: 'Dispute Resolution Framework', desc: 'Customer dispute handling, TAT compliance, correction reporting to bureaus, and internal SLA management.' },
    { title: 'RBI CIC Master Direction 2025', desc: 'New obligations under the November 2025 Master Direction on Credit Information Companies — gap assessment and mapping.' },
  ]
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice E</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>CIC Advisory — Credit Information & CICRA Compliance</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>Deep working knowledge of CICRA 2005, all 21 RBI credit information circulars, and data submission standards for CIBIL, Experian, Equifax, and CRIF Highmark — combined with direct LMS experience to close the submission pipeline gap most institutions overlook.</p>
          <Link href="/contact" className="btn-primary">Request CIC Advisory</Link>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">What This Service Covers</div>
          <h2 className="section-title">CIC & Credit Information Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {coverage.map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid #1f618d' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Close Your CIC Compliance Gaps</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>A 30-minute call will identify your highest-priority CIC compliance gaps against the 21 RBI circulars.</p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
