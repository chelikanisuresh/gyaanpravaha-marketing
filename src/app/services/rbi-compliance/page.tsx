import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RBI Regulatory Compliance Advisory for NBFCs & SFBs — Practice B',
  description: 'Expert RBI compliance advisory — Master Directions mapping, inspection readiness, KYC/AML, Digital Lending Guidelines, NPA/IRACP, Fair Practices Code. 25+ years institutional experience. Mumbai.',
  keywords: ['RBI compliance advisory', 'NBFC RBI compliance', 'Master Directions mapping', 'RBI inspection readiness', 'Digital Lending Guidelines compliance', 'KYC AML compliance India', 'NPA IRACP compliance', 'Fair Practices Code NBFC'],
  alternates: { canonical: 'https://gyaanpravaha.in/services/rbi-compliance' },
  openGraph: {
    title: 'RBI Regulatory Compliance Advisory for NBFCs & SFBs | Gyaan Pravaha',
    description: 'Master Directions mapping, RBI inspection readiness, Digital Lending Guidelines, KYC/AML — practitioner-grade advisory from someone who has led RBI inspection readiness at Piramal Finance.',
    url: 'https://gyaanpravaha.in/services/rbi-compliance',
  },
}

const COVERAGE = [
  { ref: 'MD 2025', title: 'RBI Master Directions 2025 — Full Mapping', desc: 'Obligation-by-obligation mapping of all 25 Master Directions issued November 2025 for NBFCs, HFCs, and other regulated entities.' },
  { ref: 'DL Guidelines', title: 'Digital Lending Guidelines (LSP / FLDG / KFS)', desc: 'End-to-end compliance with the 2022 Digital Lending Guidelines — LSP onboarding, FLDG caps, Key Fact Statement, digital loan agreement requirements.' },
  { ref: 'KYC/AML', title: 'KYC / AML / CFT Programme', desc: 'Board-approved KYC policy, customer risk categorisation, ongoing transaction monitoring, STR/CTR filing, and FATF jurisdiction compliance.' },
  { ref: 'IRACP', title: 'NPA Classification & IRACP Alignment', desc: 'Income Recognition and Asset Classification compliance — DPD triggers, provisioning policy, upgrade/downgrade criteria, restructured asset treatment.' },
  { ref: 'Inspection', title: 'RBI Inspection Readiness', desc: 'Pre-inspection gap assessment, document trail preparation, management information systems, and on-site inspection response.' },
  { ref: 'FPC', title: 'Fair Practices Code Implementation', desc: 'Interest rate transparency, EMI schedule disclosure, prepayment charges, grievance redressal, and internal ombudsman framework.' },
  { ref: 'Co-Lending', title: 'Co-Lending / FLDG Compliance', desc: 'Master Direction on Co-Lending — structure, documentation, reporting, and RBI notification requirements.' },
  { ref: 'Governance', title: 'Board Governance & Compliance Committees', desc: 'Board-level compliance frameworks, policy registers, compliance officer mandate, and audit committee charter.' },
]

const OUTCOMES = [
  'RBI inspection readiness — led organisation-wide at Piramal Finance',
  'Master Directions obligation register — built from scratch, circular-by-circular',
  'KYC/AML programme — aligned to 2025 Master Directions and FATF standards',
  'Digital Lending Guidelines — full LSP, FLDG, KFS compliance rollout',
  'Fair Practices Code — board-approved, branch-embedded, audit-evidenced',
]

export default function RBICompliancePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice B</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>
            RBI Regulatory Compliance Advisory for NBFCs, SFBs & Banks
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            From Master Directions mapping to RBI inspection readiness — practitioner-grade advisory from someone who has led RBI compliance at board level inside a regulated institution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request RBI Compliance Advisory</Link>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">What This Service Covers</div>
          <h2 className="section-title">RBI Compliance — End to End</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.7 }}>
            Every recommendation comes from having personally executed these mandates inside regulated institutions — including leading RBI inspection readiness across Piramal Finance.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {COVERAGE.map(item => (
              <div key={item.ref} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid var(--gold)' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.ref}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Signature Outcomes</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '2rem' }}>Delivered Inside Regulated Institutions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {OUTCOMES.map((o, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c9a84c', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>{o}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '12px', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9a84c', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key RBI Regulations Covered</h3>
              {[
                'RBI Master Directions 2025 — All 25 NBFC Directions',
                'Digital Lending Guidelines 2022',
                'Master Direction on KYC 2025',
                'IRACP Master Direction',
                'Fair Practices Code for NBFCs',
                'Co-Lending Master Direction',
                'Fraud Risk Management Directions',
                'IT Governance & Cyber Security Master Direction',
              ].map(r => (
                <div key={r} style={{ padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}>
                  → {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO content block */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner" style={{ maxWidth: '780px' }}>
          <div className="section-label">Why This Matters</div>
          <h2 className="section-title">RBI Compliance Is Not a Checklist Exercise</h2>
          <div style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.98rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>The RBI's November 2025 consolidation of 25 Master Directions for NBFCs, HFCs, and other regulated entities marked a fundamental shift in how compliance obligations are structured. Each direction is no longer a standalone circular — it is part of an integrated regulatory architecture that spans governance, prudential norms, conduct, and reporting.</p>
            <p style={{ marginBottom: '1.25rem' }}>Most NBFCs and SFBs are currently relying on legacy compliance programmes that were built against old circulars and have not been systematically remapped to the new Master Direction structure. The risk is not theoretical — the RBI's off-site surveillance function is already monitoring regulated entities for gaps in digital lending, KYC, and IRACP compliance.</p>
            <p style={{ marginBottom: '1.25rem' }}>RBI inspection readiness is not about preparing a document repository two weeks before an inspection. It is about building a compliance culture, an obligation register, a monitoring framework, and an audit trail that survives scrutiny at any point in time.</p>
            <p>That is what this practice delivers — not from a template, but from having built and operated these frameworks inside Piramal Finance, one of India's largest and most closely supervised NBFCs.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Ready to Map Your RBI Compliance?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>A 30-minute discovery call will identify your highest-priority compliance gaps against the 2025 Master Directions.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Request a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
