import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: 'RBI Scale-Based Regulation — Complete Compliance Guide for Middle and Upper Layer NBFCs',
  description: 'RBI is reviewing the Scale-Based Regulation framework for NBFCs. Middle Layer (₹1,000Cr+) and Upper Layer obligations — CCO mandate, large exposure framework, ICAAP, compensation policy, and what the SBR review means for compliance planning.',
  keywords: ['NBFC scale based regulation 2026', 'NBFC middle layer compliance', 'NBFC upper layer RBI', 'SBR framework NBFC obligations', 'chief compliance officer NBFC', 'ICAAP NBFC RBI'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/rbi-scale-based-regulation-middle-upper-layer-nbfc' },
}

export default function SBRArticle() {
  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "RBI Scale-Based Regulation \u2014 Complete Compliance Guide for Middle and Upper Layer NBFCs", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/rbi-scale-based-regulation-middle-upper-layer-nbfc"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>SBR</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>May 2026 · 12 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>RBI Scale-Based Regulation — Complete Compliance Guide for Middle and Upper Layer NBFCs</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>RBI is actively reviewing the SBR framework amid growing concerns about NBFC-bank interconnectedness and rising unsecured credit. Middle Layer and Upper Layer NBFCs face the most demanding compliance obligations in the sector — and the review is likely to tighten them further.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Four-Layer Structure — Where You Sit and What It Means</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#0d1b2e' }}>{['Layer', 'Criteria', 'Asset Share', 'Key Trigger'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  { layer: 'Base Layer (NBFC-BL)', criteria: 'Non-deposit NBFCs, assets < ₹1,000Cr; P2P; Account Aggregators', share: '5.2%', trigger: 'Asset growth past ₹1,000Cr triggers ML classification' },
                  { layer: 'Middle Layer (NBFC-ML)', criteria: 'All deposit-taking NBFCs; non-deposit NBFCs ≥ ₹1,000Cr; HFCs; CICs; IFCs; SPDs', share: '64.6%', trigger: 'RBI identification / group asset threshold' },
                  { layer: 'Upper Layer (NBFC-UL)', criteria: 'Top 10 eligible NBFCs by asset size + RBI-identified systemic entities', share: '30.2%', trigger: 'Annual RBI scoring and identification' },
                  { layer: 'Top Layer (NBFC-TL)', criteria: 'Extreme systemic risk — ideally empty', share: '0%', trigger: 'RBI discretionary classification from UL' },
                ].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600, color: '#0d1b2e', lineHeight: 1.4 }}>{r.layer}</td>
                    <td style={{ padding: '9px 12px', fontSize: '0.82rem', lineHeight: 1.4 }}>{r.criteria}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', color: '#c9a84c', fontWeight: 700 }}>{r.share}</td>
                    <td style={{ padding: '9px 12px', fontSize: '0.82rem', lineHeight: 1.4 }}>{r.trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Middle Layer — The Six Non-Negotiable Compliance Obligations</h2>
          {[
            { n: '1', title: 'Chief Compliance Officer (CCO)', desc: 'NBFC-ML must have a designated CCO at the senior management level — reporting directly to the MD/CEO, with a dotted line to the Board Audit Committee. The CCO cannot be a shared role. RBI inspections specifically test the independence and seniority of the CCO.' },
            { n: '2', title: 'Internal Capital Adequacy Assessment Process (ICAAP)', desc: 'NBFC-ML must maintain an ICAAP framework — a Board-approved internal assessment of capital adequacy covering all material risks: credit, market, operational, liquidity, and concentration. ICAAP must be reviewed annually and stress-tested.' },
            { n: '3', title: 'Large Exposure Framework', desc: 'Single counterparty exposure must not exceed 25% of Tier 1 capital. Group exposure must not exceed 40% of Tier 1 capital. Real-time monitoring of large exposures must be reported to RBI in the prescribed format.' },
            { n: '4', title: 'Compensation Policy for KMPs', desc: 'Board-approved compensation policy for Key Managerial Persons and senior management is mandatory for NBFC-ML (excluding government-owned entities). Policy must link variable pay to risk-adjusted performance and include claw-back provisions.' },
            { n: '5', title: 'Core Financial Services Solution (CFSS)', desc: 'NBFC-ML entities with assets above ₹500Cr must implement a Core Financial Services Solution — a technology infrastructure equivalent to core banking. This addresses concerns about system fragmentation and data integrity in larger NBFCs.' },
            { n: '6', title: '90-Day NPA Norm', desc: 'Already applicable to all NBFC-ML entities prior to the glide path that Base Layer NBFCs are now meeting. NBFC-ML must also maintain standard asset provisioning at 0.40% and have Board-approved provisioning policies with no deviation.' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: '#c9a84c', flexShrink: 0, lineHeight: 1 }}>{item.n}</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Upper Layer — What Changes at the Top</h2>
          <p style={{ marginBottom: '1.25rem' }}>NBFC-UL entities face all NBFC-ML obligations plus enhanced supervisory engagement. RBI identifies Upper Layer NBFCs annually through a scoring methodology that considers asset size, interconnectedness with the banking system, nature and complexity of liabilities, and group structure. Being placed in the Upper Layer is not permanent — entities can move out if their risk profile changes.</p>
          <p style={{ marginBottom: '1.25rem' }}>The most significant additional obligation for NBFC-UL is the expectation of near bank-like governance — including more intensive RBI supervisory reviews, enhanced capital requirements including Common Equity Tier 1, leverage ratio monitoring, and more granular regulatory reporting.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What the SBR Review Means for Compliance Planning</h2>
          <p style={{ marginBottom: '2rem' }}>RBI initiated a review of the SBR framework in late 2025, driven by concerns about the growing systemic role of NBFCs and rising interconnectedness with banks. The review is expected to tighten concentration risk norms, enhance reporting requirements, and potentially revisit the layer classification criteria. NBFC-ML and NBFC-UL entities should be building compliance frameworks that exceed current minimum requirements — because the minimums are moving.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/nbfc-npa-90-days-base-layer-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>90-Day NPA Classification — What Every Base Layer NBFC Must Do Now</div>
              </a>              <a href="/insights/nbfc-internal-ombudsman-directions-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>RBI</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>NBFC Internal Ombudsman Directions 2026 — Who Must Appoint</div>
              </a>              <a href="/insights/rbi-cybersecurity-compliance-nbfc-cert-in" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CYBER</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Cybersecurity for NBFCs — CERT-In Audit and ISO 27001</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Navigating Middle or Upper Layer compliance obligations?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A structured compliance gap assessment will identify where your NBFC stands against current SBR obligations — and what the review is likely to add.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
