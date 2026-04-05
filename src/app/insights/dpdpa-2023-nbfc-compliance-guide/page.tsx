import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified',
  description: 'A practitioner\'s guide to DPDPA 2023 compliance for NBFCs — consent framework, DPO mandate, vendor data contracts, breach notification, and building readiness before the Rules are notified.',
  keywords: ['DPDPA 2023 NBFC', 'Digital Personal Data Protection Act compliance', 'NBFC data protection', 'DPO NBFC India', 'DPDPA Rules India', 'data privacy NBFC India'],
  alternates: { canonical: 'https://gyaanpravaha.in/insights/dpdpa-2023-nbfc-compliance-guide' },
  openGraph: { title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified', type: 'article' },
}

export default function DPDPAArticle() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(108,52,131,0.2)', color: '#a855f7', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px' }}>DPDPA</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>February 2026 · 10 min read</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>The Digital Personal Data Protection Act 2023 is now law. The Rules are expected shortly. NBFCs that wait for the Rules before acting will not have enough time to build a compliant data processing framework.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1rem' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2rem' }}>The DPDPA Is Already Law</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Digital Personal Data Protection Act 2023 received Presidential assent on 11 August 2023. Unlike many Indian laws that take years to become operative, the enforcement mechanism and the Data Protection Board are being operationalised rapidly. The Rules under Section 40 of the Act are expected to be notified in 2026.</p>
          <p style={{ marginBottom: '1.25rem' }}>For NBFCs, the compliance challenge is significant. As financial institutions, you are one of the largest processors of personal data — loan applications, KYC documents, credit bureau enquiries, transaction data, and more. Every step of your customer lifecycle involves personal data processing, and the DPDPA's notice and consent requirements apply to virtually all of it.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What NBFCs Must Do Now</h2>
          <p style={{ marginBottom: '1.25rem' }}>The first step is a comprehensive data processing inventory — mapping every category of personal data you collect, where it comes from, how it is used, with whom it is shared, and for how long it is retained. This is not a one-page form; it is a structured exercise that typically takes 4-6 weeks for a mid-sized NBFC.</p>
          <p style={{ marginBottom: '1.25rem' }}>The second step is a consent framework. The DPDPA requires that consent be free, specific, informed, unconditional, and unambiguous. Most NBFCs currently collect consent through a one-line tick-box buried in a loan application form. This will not meet the DPDPA standard.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The DPO Mandate</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Act provides for a Data Protection Officer. While the exact categories of organisations required to appoint a DPO will be specified in the Rules, it is expected that significant data fiduciaries — which will include larger NBFCs — will be required to appoint a DPO with board-level access and regulatory interface responsibility.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Penalty Exposure Is Not Theoretical</h2>
          <p style={{ marginBottom: '2rem' }}>Failure to implement adequate security safeguards carries a penalty of up to ₹250 Crore. Failure to notify a data breach carries up to ₹200 Crore. These are per-incident penalties, not annual caps. For an NBFC with thousands of customer records, a single breach event can create exposure that threatens the institution's capital adequacy.</p>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>Ready to assess your DPDPA readiness?</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your highest-priority DPDPA gaps.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
