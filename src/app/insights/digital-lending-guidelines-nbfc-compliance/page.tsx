import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant',
  description: 'A practitioner\'s analysis of NBFC compliance with RBI\'s Digital Lending Guidelines — LSP governance gaps, FLDG structure issues, KFS implementation failures, and what to do now.',
  keywords: ['Digital Lending Guidelines NBFC compliance', 'RBI Digital Lending 2022', 'LSP compliance NBFC', 'FLDG RBI guidelines', 'Key Fact Statement KFS', 'digital loan agreement RBI'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/digital-lending-guidelines-nbfc-compliance' },
  openGraph: {
    title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant',
    description: 'Practitioner analysis of Digital Lending Guidelines compliance gaps — LSP governance, FLDG caps, KFS, and digital loan agreements.',
    type: 'article',
  },
}

export default function DigitalLendingArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant',
        author: { '@type': 'Person', name: 'Chelikani Veera Venkata Suresh Babu', url: 'https://gyaanpravaha.com/about' },
        publisher: { '@type': 'Organization', name: 'Gyaan Pravaha', url: 'https://gyaanpravaha.com' },
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: 'Digital Lending Guidelines, NBFC compliance, RBI, LSP, FLDG, KFS',
        mainEntityOfPage: 'https://gyaanpravaha.com/insights/digital-lending-guidelines-nbfc-compliance',
      })}} />

      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px' }}>RBI</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>March 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>The RBI's Digital Lending Guidelines have been in force since 2022. Yet most NBFCs still have significant gaps in LSP governance, FLDG structure, Key Fact Statement implementation, and digital loan agreement requirements.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2rem' }}>The State of Compliance — Two Years In</h2>
          <p style={{ marginBottom: '1.25rem' }}>The RBI's Digital Lending Guidelines (September 2022) were among the most consequential regulatory interventions in recent years. They fundamentally changed how NBFCs must structure their relationships with Lending Service Providers (LSPs), how they must disclose loan terms to borrowers, and what they can and cannot do with digital channels.</p>
          <p style={{ marginBottom: '1.25rem' }}>Two years on, the compliance picture is uneven. Most NBFCs have made some changes — updated their loan agreements, revised LSP contracts, started displaying APR instead of flat interest rates. But the deeper structural changes that the Guidelines require are frequently missing.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Gap 1 — LSP Governance</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Guidelines require that an NBFC maintain a board-approved list of LSPs, conduct due diligence before onboarding, and take direct responsibility for the LSP's conduct with borrowers. In practice, many NBFCs treat LSPs as commercial partners rather than regulated extensions of their own operations.</p>
          <p style={{ marginBottom: '1.25rem' }}>The specific gaps we find most commonly: LSP agreements that do not include the mandatory clauses on grievance redressal, data sharing, and fair practice; LSP due diligence that is confined to a commercial term sheet; and no ongoing monitoring of LSP conduct with borrowers.</p>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', borderRadius: '4px', padding: '1.5rem', marginBottom: '2rem' }}>
            <strong style={{ color: 'var(--text-dark)', display: 'block', marginBottom: '0.5rem' }}>What the RBI expects:</strong>
            <p style={{ margin: 0 }}>The NBFC is responsible for all actions of the LSP in relation to borrowers. This is not a standard commercial outsourcing relationship — it is a regulatory extension of the lender's own conduct obligations.</p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Gap 2 — FLDG Structure</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Guidelines cap First Loan Default Guarantees (FLDG) at 5% of the loan portfolio at the time of origination. Many NBFCs either do not know the exact FLDG exposure with each LSP partner, or have structures that embed credit enhancement in ways that effectively exceed the 5% cap.</p>
          <p style={{ marginBottom: '1.25rem' }}>This is a material compliance gap. The RBI is scrutinising FLDG structures in off-site supervision, and NBFCs that cannot demonstrate cap compliance risk regulatory action.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Gap 3 — Key Fact Statement (KFS)</h2>
          <p style={{ marginBottom: '1.25rem' }}>The KFS must be provided before loan disbursement, must use the standardised format specified by the RBI, and must include the Annual Percentage Rate (APR) calculated in the prescribed manner. Most NBFCs have a KFS — but the APR calculation methodology is frequently wrong, either excluding certain fees or using a calculation basis that does not match the RBI's specification.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What to Do Now</h2>
          <p style={{ marginBottom: '1.25rem' }}>A structured compliance review of your digital lending operations should cover: LSP agreement audit against the mandatory clauses, FLDG exposure calculation and cap verification, KFS format and APR calculation review, digital loan agreement content check, and grievance redressal integration with LSP operations.</p>
          <p style={{ marginBottom: '2rem' }}>This is not a one-time exercise. The RBI's Digital Lending Guidelines require ongoing monitoring and annual board-level review of your digital lending compliance posture.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/dpdpa-consent-management-digital-lending" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DPDPA</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>DPDPA Consent Management for Digital Lending</div>
              </a>              <a href="/insights/kyc-master-direction-2025-nbfc-changes" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>KYC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>KYC Master Direction 2025 — What Changed</div>
              </a>              <a href="/insights/nbfc-npa-90-days-base-layer-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>90-Day NPA Classification — What Every Base Layer NBFC Must Do Now</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>Ready to review your Digital Lending Guidelines compliance?</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your highest-priority gaps.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
