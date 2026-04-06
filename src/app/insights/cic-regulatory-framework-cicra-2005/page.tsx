import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIC Regulatory Framework — CICRA 2005 and 21 Instruments Every CIC Must Know',
  description: 'A practitioner\'s guide to the complete regulatory corpus for Credit Information Companies in India — CICRA 2005, CIC Rules and Regulations 2006, Master Directions 2025, and Amendment Directions. 21 instruments confirmed as at February 2026.',
  keywords: ['CICRA 2005 compliance', 'Credit Information Companies regulatory framework', 'CIC Master Directions 2025', 'RBI credit information companies directions', 'CIBIL Experian Equifax CRIF compliance', 'CIC regulatory obligations India'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/cic-regulatory-framework-cicra-2005' },
  openGraph: {
    title: 'CIC Regulatory Framework — CICRA 2005 and 21 Instruments Every CIC Must Know',
    description: 'Complete regulatory corpus for Credit Information Companies in India — 21 instruments confirmed as at February 2026.',
    type: 'article',
    url: 'https://gyaanpravaha.com/insights/cic-regulatory-framework-cicra-2005',
  },
}

const INSTRUMENTS = [
  { num: '01', name: 'Credit Information Companies (Regulation) Act, 2005 (CICRA)', date: 'June 23, 2005', tier: 'Primary Legislation' },
  { num: '02', name: 'Credit Information Companies Rules, 2006', date: 'December 14, 2006', tier: 'Subordinate Legislation' },
  { num: '03', name: 'Credit Information Companies Regulations, 2006', date: 'December 14, 2006', tier: 'Subordinate Legislation' },
  { num: '04', name: 'Data Format for Furnishing Credit Information — Uniform CRF & DQI Framework', date: 'June 27, 2014', tier: 'Master Circular' },
  { num: '05', name: 'Monthly CI-Level DQI Reporting', date: 'January 15, 2015', tier: 'Circular' },
  { num: '06', name: 'Free Full Credit Report (FFCR) to Individuals', date: 'September 1, 2016', tier: 'Circular' },
  { num: '07', name: 'Issue of Comprehensive Credit Information Reports', date: 'August 2, 2017', tier: 'Circular' },
  { num: '08', name: 'Data Format — COVID-19 Restructuring', date: 'March 12, 2021', tier: 'Circular' },
  { num: '09', name: 'Mandatory Relationship Segment (RS) Data Reporting', date: 'October 14, 2021', tier: 'Circular' },
  { num: '10', name: 'Strengthening of Customer Service — CIR Alerts & Grievance', date: 'October 27, 2023', tier: 'Circular' },
  { num: '11', name: 'Compensation Framework for Delayed Grievance Resolution', date: 'October 27, 2023', tier: 'Circular' },
  { num: '12', name: 'MD — Treatment of Wilful Defaulters and Large Defaulters', date: 'July 16, 2024', tier: 'Master Direction' },
  { num: '13', name: 'Fortnightly Credit Information Reporting — Enhanced Timelines', date: 'August 8, 2024', tier: 'Circular' },
  { num: '14', name: 'Credit Information Reporting Post-Licence Cancellation of CI', date: 'October 10, 2024', tier: 'Circular' },
  { num: '15', name: 'MD — RBI (Credit Information Reporting) Directions, 2025', date: 'January 6, 2025', tier: 'Master Direction' },
  { num: '16', name: 'MD — RBI (Credit Information Companies) Directions, 2025', date: 'November 28, 2025', tier: 'Master Direction' },
  { num: '17 🆕', name: 'MD — RBI (ARC–Credit Information Reporting) Directions, 2025', date: 'November 28, 2025', tier: 'Master Direction — NEW' },
  { num: '18', name: 'RBI (CIC) Amendment Directions, 2025 — 4-Reference-Date Reporting', date: 'December 4, 2025', tier: 'Amendment Direction' },
  { num: '19 🆕', name: 'RBI (ARC–CIR) Amendment Directions, 2025 — CKYC & 4-Date Regime', date: 'December 4, 2025', tier: 'Amendment Direction — NEW' },
  { num: '20', name: 'RBI (CIC–Internal Ombudsman) Directions, 2026', date: 'January 16, 2026', tier: 'Direction' },
  { num: '21', name: 'Reserve Bank–Integrated Ombudsman Scheme 2026 & Co-Lending Arrangements Directions 2025', date: 'Jan 14, 2026 / Aug 6, 2025', tier: 'Scheme / Direction' },
]

export default function CICRegulatoryFrameworkArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'CIC Regulatory Framework — CICRA 2005 and 21 Instruments Every CIC Must Know',
        author: { '@type': 'Person', name: 'Chelikani Veera Venkata Suresh Babu', url: 'https://gyaanpravaha.com/about' },
        publisher: { '@type': 'Organization', name: 'Gyaan Pravaha', url: 'https://gyaanpravaha.com' },
        datePublished: '2026-04-01',
        keywords: 'CICRA 2005, CIC compliance, RBI credit information, Master Directions 2025',
        mainEntityOfPage: 'https://gyaanpravaha.com/insights/cic-regulatory-framework-cicra-2005',
      })}} />

      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(31,97,141,0.3)', color: '#7fc4ff', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>CIC</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 12 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            CIC Regulatory Framework — CICRA 2005 and the 21 Instruments Every Credit Information Company Must Know
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            A complete regulatory corpus for Credit Information Companies in India spans 21 instruments — from primary legislation in 2005 through to Amendment Directions issued in January 2026. Most CICs are operating against an incomplete picture of their obligations.
          </p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Three-Tier Regulatory Hierarchy</h2>
          <p style={{ marginBottom: '1.25rem' }}>The regulatory framework for Credit Information Companies in India operates across three distinct tiers, each building on the one below. Understanding this hierarchy is not merely academic — it determines the legal weight of each obligation and how conflicts between instruments are resolved.</p>

          <div style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
              {[
                { tier: 'Tier 1 — Primary Legislation', desc: 'CICRA 2005, CIC Rules 2006, CIC Regulations 2006. These have statutory force — no RBI circular can override them. Any compliance programme that does not start here is built on incomplete foundations.' },
                { tier: 'Tier 2 — Master Directions', desc: 'Consolidating instruments that supersede all prior circulars on a subject. Three Master Directions now govern CICs: the MD on Credit Information Reporting (January 2025), MD on Credit Information Companies (November 2025), and MD on ARC–Credit Information Reporting (November 2025).' },
                { tier: 'Tier 3 — Standalone Circulars & Amendment Directions', desc: 'Updating specific provisions of the Master Directions. The Amendment Directions of December 2025 and the Internal Ombudsman Directions of January 2026 are the most consequential recent additions.' },
              ].map(t => (
                <div key={t.tier} style={{ borderLeft: '3px solid #c9a84c', paddingLeft: '1rem' }}>
                  <div style={{ fontWeight: 700, color: '#0d1b2e', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{t.tier}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Why 21 Instruments — Not 3</h2>
          <p style={{ marginBottom: '1.25rem' }}>The consolidation of Master Directions in November 2025 was a landmark event. For the first time, CIC obligations were brought together under a structured framework. However, the Master Directions do not stand alone — they must be read alongside 18 other instruments that either predate them, operate in parallel, or amend them.</p>
          <p style={{ marginBottom: '1.25rem' }}>A February 2026 sanity check against RBI's published notification register identified five gaps relative to prior compliance frameworks being used by CICs. Four have been confirmed and incorporated. One — circular RBI/2025-26/74 (DoR.MCS.REC.47) — has been identified on RBI's register but requires direct website verification for full subject matter before obligations can be mapped.</p>
          <p style={{ marginBottom: '2rem' }}>The two most significant new instruments are Instrument 17 (MD on ARC–Credit Information Reporting Directions, 2025) and Instrument 19 (RBI (ARC–CIR) Amendment Directions, 2025) — both of which create new obligations for Asset Reconstruction Companies as Credit Institutions reporting to CICs, which had not been captured in earlier compliance frameworks.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>The 21 Instruments — Complete Index</h2>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#0d1b2e' }}>
                  {['#', 'Instrument', 'Date', 'Type'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INSTRUMENTS.map((inst, i) => (
                  <tr key={inst.num} style={{ background: inst.num.includes('🆕') ? 'rgba(201,168,76,0.06)' : i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.8rem', color: inst.num.includes('🆕') ? '#c9a84c' : '#8a9ab0', whiteSpace: 'nowrap' }}>{inst.num}</td>
                    <td style={{ padding: '9px 12px', color: '#0d1b2e', lineHeight: 1.4, fontWeight: inst.num.includes('🆕') ? 600 : 400 }}>{inst.name}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.78rem', color: '#8a9ab0', whiteSpace: 'nowrap' }}>{inst.date}</td>
                    <td style={{ padding: '9px 12px', fontSize: '0.78rem', color: inst.tier.includes('NEW') ? '#c9a84c' : '#5a6a7a', whiteSpace: 'nowrap' }}>{inst.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What This Means for CIC Compliance Officers</h2>
          <p style={{ marginBottom: '1.25rem' }}>The practical implication of the three-tier, 21-instrument framework is that CIC compliance cannot be managed against any single document. The November 2025 Master Directions — MD on Credit Information Companies — is the most comprehensive statement of CIC obligations, but it must be read alongside the Amendment Directions issued just weeks later in December 2025, the Internal Ombudsman Directions of January 2026, and the CICRA Rules and Regulations that predate all of them.</p>
          <p style={{ marginBottom: '1.25rem' }}>The single most important compliance date in the recent history of CIC regulation is July 1, 2026 — when the 4-Reference-Date reporting regime, uniform reporting standards, ARC CKYC reporting, and the revised DQI framework all come into force simultaneously. CICs that have not begun preparation for this transition by now are already at risk of non-compliance.</p>
          <p style={{ marginBottom: '2rem' }}>A structured gap assessment against all 21 instruments — not just the Master Directions — is the essential starting point for any CIC that wants to approach the July 2026 deadline with confidence.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/cic-compliance-july-2026-deadline" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CIC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>July 1, 2026 — The Most Consequential CIC Compliance Deadline in a Decade</div>
              </a>              <a href="/insights/cic-data-quality-index-rbi" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DQI</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI's Data Quality Index for Credit Information — What Every Credit Institution Must Know</div>
              </a>              <a href="/insights/21-rbi-circulars-credit-information-nbfc" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CIC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>The 21 RBI Circulars on Credit Information Every NBFC Must Know</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Need a gap assessment against all 21 instruments?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify where your CIC compliance framework has gaps — and what to prioritise before July 2026.</p>
            <Link href="/contact" className="btn-primary">Book a CIC Compliance Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
