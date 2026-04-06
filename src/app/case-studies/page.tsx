import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies — BFSI Advisory Engagements | Gyaan Pravaha',
  description: 'Advisory engagement case studies from Gyaan Pravaha — RBI compliance, LOS/LMS implementation, DPDPA readiness, and CIC advisory across Banks, NBFCs, and SFBs.',
  alternates: { canonical: 'https://gyaanpravaha.com/case-studies' },
}

const CASE_STUDIES = [
  {
    id: 1,
    badge: 'RBI COMPLIANCE',
    institution: 'Mid-Size NBFC-ML',
    assets: '₹4,200 Crore AUM',
    title: 'RBI Inspection Readiness — Closing 47 Compliance Gaps in 8 Weeks',
    challenge: 'A Middle Layer NBFC with assets above ₹4,000 crore received an RBI inspection notice with a 10-week lead time. Internal compliance review had identified 47 open items across credit policy, NPA classification, Board governance, and DNBS reporting. The compliance team lacked the bandwidth and technical depth to close all items within the window.',
    approach: 'Gyaan Pravaha conducted a rapid gap assessment across all 47 items — prioritising by inspection risk and regulatory materiality. Items were categorised into: Board approvals required, policy document updates, system-level changes, and operational process corrections. A week-by-week closure plan was built with ownership assigned to specific internal teams.',
    outcome: 'All 47 items closed within 7 weeks. RBI inspection completed with no major adverse findings. The NPA classification transition to 90-day norm was documented with Board approval and auditor certification. DNBS returns for the preceding 4 quarters were reconciled and a clean submission trail established.',
    tags: ['RBI Compliance', 'SBR', 'NPA Classification', 'Board Governance'],
  },
  {
    id: 2,
    badge: 'CIC ADVISORY',
    institution: 'Housing Finance Company',
    assets: 'Regulated by NHB',
    title: 'CIC Reporting Overhaul — DQI Improvement from 61% to 94% in One Quarter',
    challenge: "An HFC with a retail mortgage portfolio was receiving low Data Quality Index scores from CIBIL — 61% against an industry benchmark of 85%+. The low DQI was triggering supervisory queries from NHB and creating friction in co-lending partnerships where data quality was a contractual requirement.",
    approach: "Gyaan Pravaha conducted a full audit of the HFC's CIC reporting pipeline — from loan origination system data capture through to the monthly submission format. Root causes identified: 14% of records had incomplete address data, Days Past Due calculations were inconsistent with the FFCR standard, and write-off accounts were not being reported as required under the July 2026 framework.",
    outcome: 'Three-month improvement programme closed all data quality gaps. DQI improved from 61% to 94% — above the industry benchmark. The HFC established a monthly DQI monitoring dashboard and a pre-submission validation checklist that has maintained scores above 90% since implementation.',
    tags: ['CIC', 'Data Quality', 'DQI', 'NHB', 'FFCR'],
  },
]

const PLACEHOLDER_STUDIES = [
  { badge: 'DPDPA', title: 'DPDPA Readiness Assessment — Phase 1 Compliance for a Scheduled Commercial Bank', status: 'Coming Soon' },
  { badge: 'LOS/LMS', title: 'LOS Implementation Advisory — Digital Lending Platform for an NBFC-ML', status: 'Coming Soon' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Case Studies</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}>
            Advisory Engagements
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.8 }}>
            Illustrative case studies drawn from advisory experience across Banks, NBFCs, HFCs, and SFBs. Institution names are anonymised.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.id} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Header */}
                <div style={{ background: 'var(--navy)', padding: '2rem 2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', fontSize: '0.6rem', letterSpacing: '0.15em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>{cs.badge}</span>
                      <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', fontFamily: 'monospace' }}>{cs.institution} · {cs.assets}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#fff', lineHeight: 1.3 }}>{cs.title}</h2>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', color: 'rgba(201,168,76,0.15)', fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>0{cs.id}</div>
                </div>

                {/* Body */}
                <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                  {[
                    { label: 'The Challenge', text: cs.challenge },
                    { label: 'The Approach', text: cs.approach },
                    { label: 'The Outcome', text: cs.outcome },
                  ].map(section => (
                    <div key={section.label}>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold)', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{section.label}</div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{section.text}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ padding: '1rem 2.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {cs.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--text-light)', background: 'var(--cream)', padding: '0.2rem 0.6rem', borderRadius: '2px', fontFamily: 'monospace' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholders */}
            {PLACEHOLDER_STUDIES.map((p, i) => (
              <div key={i} style={{ background: '#fff', border: '1px dashed var(--border)', borderRadius: '8px', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.15em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace', flexShrink: 0 }}>{p.badge}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{p.title}</div>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontFamily: 'monospace', flexShrink: 0 }}>{p.status}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ color: 'var(--navy)', fontWeight: 600, marginBottom: '0.5rem' }}>Working through a similar challenge?</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Every engagement starts with a 30-minute discovery call — no obligation, no generic pitch.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
