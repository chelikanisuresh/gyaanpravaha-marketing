import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DPDPA Consent Management for Digital Lending — How the Act Redesigns Borrower Onboarding',
  description: 'DPDPA requires purpose-specific, granular consent for every use of borrower data — credit bureau inquiry, bank statement analysis, CKYC, collection activities. How digital lenders must redesign onboarding flows, what legacy LOS systems must be retrofitted for, and the DPDPA-RBI intersection.',
  keywords: ['DPDPA digital lending consent', 'consent management NBFC', 'DPDPA LOS changes', 'borrower data consent DPDPA', 'digital lending onboarding DPDPA', 'NBFC consent framework DPDPA RBI'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/dpdpa-consent-management-digital-lending' },
}

export default function DPDPAConsentArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "DPDPA Consent Management for Digital Lending \u2014 How the Act Redesigns Borrower Onboarding", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/dpdpa-consent-management-digital-lending"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DPDPA</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>June 2026 · 10 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>DPDPA Consent Management for Digital Lending — How the Act Redesigns Borrower Onboarding</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>DPDPA's requirement for purpose-specific, granular, withdrawable consent fundamentally changes how digital lenders onboard borrowers. The bundled, broad consent that most LOS platforms currently collect is not DPDPA-compliant. Every use of borrower data — bureau inquiry, bank statement pull, CKYC, collection — requires separate, specific consent.</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Current State — Why Existing Consent Frameworks Fail DPDPA</h2>
          <p style={{ marginBottom: '1.25rem' }}>Most digital lenders currently collect consent through a single checkbox or screen in the loan application — "I agree to the Terms and Conditions and Privacy Policy." This consent covers, in one sweep, KYC verification, credit bureau inquiry, bank statement analysis, employment verification, collection activities, marketing, and data sharing with partners.</p>
          <p style={{ marginBottom: '1.25rem' }}>DPDPA treats each of these as a separate purpose requiring separate consent. A borrower must be able to consent to KYC verification (mandatory for loan processing) while declining consent for marketing — and the NBFC must be able to honour that choice without refusing the loan.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>The Eight Consent Items a Digital Lender Must Separately Capture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              { item: '1. Identity verification consent', desc: 'Consent to collect and process Aadhaar, PAN, photograph, and address proof for KYC purposes', mandatory: true },
              { item: '2. Credit bureau inquiry consent', desc: 'Explicit consent to make a hard enquiry to CIBIL/Experian/Equifax/CRIF — noting that this affects the credit score', mandatory: true },
              { item: '3. Bank statement analysis consent', desc: 'Consent to access bank statements (via Account Aggregator or net banking) for income and cash flow assessment', mandatory: true },
              { item: '4. CKYC upload consent', desc: 'Consent to upload KYC records to the Central KYC Registry and to fetch CKYC data', mandatory: true },
              { item: '5. Loan servicing consent', desc: 'Consent to process account data (repayments, outstanding balance, overdue status) during the loan tenure', mandatory: true },
              { item: '6. Collection activities consent', desc: 'Consent to contact the borrower (and guarantors) for repayment collection — specifying channels and timing', mandatory: false },
              { item: '7. Credit information reporting consent', desc: 'Consent to report repayment behaviour to all four CICs on an ongoing basis', mandatory: true },
              { item: '8. Marketing and cross-sell consent', desc: 'Consent to use borrower data for marketing, product recommendations, and cross-sell — this is the only truly optional consent', mandatory: false },
            ].map(c => (
              <div key={c.item} style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ display: 'inline-block', fontSize: '9px', padding: '2px 7px', borderRadius: '10px', fontWeight: 700, fontFamily: 'monospace', background: c.mandatory ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.1)', color: c.mandatory ? '#dc2626' : '#059669' }}>{c.mandatory ? 'MANDATORY' : 'OPTIONAL'}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0d1b2e', fontSize: '0.88rem', marginBottom: '2px' }}>{c.item}</div>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.55 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What Legacy LOS Systems Must Be Retrofitted For</h2>
          <p style={{ marginBottom: '1.25rem' }}>The LOS is the primary system where borrower consent is collected in digital lending. Most legacy LOS platforms were not designed with DPDPA's granular consent architecture in mind. The key retrofit requirements are:</p>
          {['Consent screen redesign — separate screens or toggles for each consent item, not a single checkbox', 'Consent audit trail — timestamp, IP address, and consent version stored immutably for each consent given', 'Withdrawal mechanism — a real-time pathway for borrowers to withdraw any non-mandatory consent', 'Conditional processing logic — if a borrower withdraws marketing consent, the system must stop processing for marketing without affecting loan servicing', 'Legacy borrower re-consent — a systematic workflow to refresh consent from existing customers during routine interactions', 'API integration with consent management platform — if consent is managed centrally, the LOS must integrate for real-time consent status checks'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.7rem 0', borderBottom: '1px solid #e4ddd0', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', flexShrink: 0, fontWeight: 700 }}>→</span>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Behavioural Scoring Problem</h2>
          <p style={{ marginBottom: '2rem' }}>Digital lenders that use behavioural signals — device metadata, app usage patterns, location data, social media indicators — for credit scoring face an additional challenge. DPDPA classifies these as processing of personal data for automated decision-making. The borrower must be informed that such signals are used, must consent to their use, and must have the right to seek human review of an automated credit decision. Lenders whose models depend on these signals will need to redesign consent flows and potentially revisit model architecture.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/dpdpa-rules-2025-nbfc-banks-november-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DPDPA</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026</div>
              </a>              <a href="/insights/kyc-master-direction-2025-nbfc-changes" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>KYC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>KYC Master Direction 2025 — What Changed and What Your NBFC Must Update</div>
              </a>              <a href="/insights/digital-lending-guidelines-nbfc-compliance" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>RBI</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>Digital Lending Guidelines — Where Most NBFCs Are Still Non-Compliant</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Is your LOS ready for DPDPA's granular consent requirements?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A DPDPA consent architecture review will map your current onboarding flow, identify every gap against the eight consent items above, and build a LOS retrofit plan.</p>
            <Link href="/contact" className="btn-primary">Book a DPDPA Consent Review</Link>
          </div>
        </div>
      </article>
    </>
  )
}
