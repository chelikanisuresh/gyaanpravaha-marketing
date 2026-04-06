import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: 'KYC Master Direction 2025 — What Changed and What Your NBFC Must Update',
  description: 'The RBI KYC Master Direction was updated in July 2025. Key changes in customer due diligence, beneficial ownership thresholds, video KYC, re-KYC timelines, and the intersection with DPDPA consent requirements for KYC data. A practical update guide for NBFCs.',
  keywords: ['KYC master direction 2025 NBFC', 'RBI KYC update 2025', 'video KYC compliance India', 'CKYC NBFC obligations', 'beneficial ownership RBI 2025', 'KYC re-verification NBFC'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/kyc-master-direction-2025-nbfc-changes' },
}

export default function KYCArticle() {
  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "KYC Master Direction 2025 \u2014 What Changed and What Your NBFC Must Update Now", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/kyc-master-direction-2025-nbfc-changes"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(59,130,246,0.2)', color: '#93c5fd', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>KYC / AML</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>June 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>KYC Master Direction 2025 — What Changed and What Your NBFC Must Update Now</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>The RBI Master Direction on KYC was updated in July 2025 — the most significant revision in several years. Changes to customer due diligence, beneficial ownership, re-KYC timelines, CKYC upload obligations, and video KYC now intersect directly with DPDPA's purpose-based consent requirements, creating a compliance design challenge for every NBFC.</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>Five Key Changes in the July 2025 Update</h2>
          {[
            { title: 'Beneficial Ownership Threshold', desc: 'The threshold for identifying beneficial owners in legal entities has been revised. NBFCs must now identify and verify natural persons who ultimately own or control 10% or more of a company (previously 25% in some contexts). This increases the due diligence burden for NBFC customers that are corporate entities — particularly HNI-owned investment companies, group holding structures, and family-controlled businesses.' },
            { title: 'CKYC Upload Obligations', desc: 'NBFCs must upload KYC records to the Central KYC Registry (CKYCR) for all new individual customers within 10 days of account opening. For existing customers whose KYC is updated, upload within 10 days of the update. NBFCs that are not currently uploading consistently to CKYC are now in non-compliance.' },
            { title: 'Video KYC — Expanded Scope and Standards', desc: 'Video KYC (V-CIP) has been expanded — NBFCs can now use V-CIP for a broader range of customer onboarding scenarios. However, the standards for V-CIP infrastructure have also been tightened: the video and audio quality standards, the AI-based liveness detection requirements, and the auditor verification requirements are all more prescriptive.' },
            { title: 'Re-KYC Periodicity', desc: 'Re-KYC timelines have been clarified: High-risk customers — every 2 years. Medium-risk customers — every 8 years. Low-risk customers — every 10 years. NBFCs must have a systematic re-KYC tracking mechanism — relying on ad-hoc processes or customer-initiated updates does not satisfy the obligation.' },
            { title: 'KYC–DPDPA Intersection', desc: 'The July 2025 update was designed before DPDPA Rules were finalised, but the Rules notified in November 2025 create a direct tension: KYC data collected under mandatory RBI directions must be handled with purpose-specific consent under DPDPA. The solution is layered consent architecture — mandatory KYC collection is lawful processing, but downstream uses (credit bureau submission, marketing, analytics) each require separate DPDPA-compliant consent.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', marginBottom: '1rem', borderLeft: '3px solid #c9a84c' }}>
              <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.title}</div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What Your LOS/LMS Must Now Capture</h2>
          <p style={{ marginBottom: '1.25rem' }}>The 2025 KYC update has direct implications for lending origination systems. The LOS must now capture beneficial ownership information for corporate borrowers at the 10% threshold, trigger CKYC upload within 10 days of account opening, support video KYC workflows that meet the 2025 technical standards, and track re-KYC due dates by customer risk category.</p>
          <p style={{ marginBottom: '2rem' }}>NBFCs whose LOS was configured before July 2025 should conduct a gap assessment against the updated requirements. Most off-the-shelf LOS platforms have not automatically updated to reflect the July 2025 changes — customisation and testing will be required.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/dpdpa-rules-2025-nbfc-banks-november-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DPDPA</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026</div>
              </a>              <a href="/insights/dpdpa-consent-management-digital-lending" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DPDPA</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>DPDPA Consent Management for Digital Lending</div>
              </a>              <a href="/insights/21-rbi-circulars-credit-information-nbfc" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CIC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>The 21 RBI Circulars on Credit Information Every NBFC Must Know</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Has your KYC programme been updated for the July 2025 changes?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A KYC compliance review will assess your CDD standards, CKYC upload process, V-CIP infrastructure, re-KYC tracking, and DPDPA consent architecture against the 2025 Master Direction.</p>
            <Link href="/contact" className="btn-primary">Book a KYC Compliance Review</Link>
          </div>
        </div>
      </article>
    </>
  )
}
