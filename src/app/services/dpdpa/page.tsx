import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DPDPA Compliance Advisory — Data Protection for NBFCs & Banks | Practice C',
  description: 'DPDPA 2023 compliance advisory for NBFCs, Banks, and SFBs — gap assessment, DPO programme, consent framework, data protection impact assessment, breach notification. CPD Certified DPO.',
  keywords: ['DPDPA compliance India', 'Data Protection Officer NBFC', 'DPDPA 2023 advisory', 'data privacy compliance India', 'GDPR NBFC', 'digital personal data protection act', 'DPO programme BFSI'],
  alternates: { canonical: 'https://gyaanpravaha.in/services/dpdpa' },
}

const COVERAGE = [
  { title: 'DPDPA Readiness Assessment', desc: 'Gap assessment of current data processing activities against DPDPA obligations — identifying high-risk gaps and building a sequenced remediation roadmap.' },
  { title: 'DPO Programme Design', desc: 'Building and operationalising the Data Protection Officer role — mandate, reporting lines, board visibility, and regulatory interface.' },
  { title: 'Consent Framework', desc: 'Consent mechanism design, consent records management, withdrawal of consent workflows, and purpose limitation controls.' },
  { title: 'Data Principal Rights', desc: 'Right to access, right to correction, right to erasure, and right to nominate — process design and turnaround time compliance.' },
  { title: 'Vendor & Data Processor Contracts', desc: 'Review of vendor agreements for data processing clauses, processor obligations, sub-processor controls, and cross-border data transfer provisions.' },
  { title: 'Breach Notification Programme', desc: 'Incident detection, internal escalation, CERT-In notification, Data Protection Board notification, and data principal communication.' },
  { title: 'DPIA Framework', desc: 'Data Protection Impact Assessment — when to conduct, how to document, and board/committee review process.' },
  { title: 'Children\'s Data Provisions', desc: 'Age verification, parental consent, and restrictions on processing children\'s personal data under Section 9 of the Act.' },
]

const PENALTIES = [
  { label: 'Failure to implement security safeguards', value: '₹250 Crore' },
  { label: 'Failure to notify breach', value: '₹200 Crore' },
  { label: 'Non-fulfilment of data principal rights', value: '₹50 Crore' },
  { label: 'Violation of children\'s data provisions', value: '₹200 Crore' },
]

export default function DPDPAPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice C</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>DPDPA 2023 / Data Protection Advisory</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>Advisory from India's early data protection practitioners — CPD Certified DPO, former Designated Data Protection Officer at Piramal Finance, GDPR Practitioner (ISACA).</p>
          <Link href="/contact" className="btn-primary">Request DPDPA Advisory</Link>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">What This Service Covers</div>
          <h2 className="section-title">DPDPA Compliance — End to End</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {COVERAGE.map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid #6c3483' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalty exposure */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner">
          <div className="section-label">Why It Matters</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '2rem' }}>Penalty Exposure Under DPDPA</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {PENALTIES.map(p => (
              <div key={p.label} style={{ background: 'rgba(108,52,131,0.12)', border: '1px solid rgba(108,52,131,0.3)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem', lineHeight: 1.5 }}>{p.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#c9a84c' }}>Up to {p.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '2rem', maxWidth: '700px' }}>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>The right starting point is a structured gap assessment — mapping your current data processing activities against DPDPA obligations, identifying the highest-risk gaps, and building a sequenced remediation roadmap. This is not a legal exercise alone. It requires someone who understands your LOS, your vendor contracts, your bureau data pipelines, and your RBI compliance obligations simultaneously.</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center', borderTop: '1px solid var(--border-dark)' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Assess Your DPDPA Readiness</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>A 30-minute discovery call will identify your highest-priority DPDPA gaps.</p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
