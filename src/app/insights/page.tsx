import type { Metadata } from 'next'
import InsightsFilter from '@/components/InsightsFilter'

export const metadata: Metadata = {
  title: 'Insights — RBI Compliance, DPDPA, CIC & BFSI Advisory',
  description: 'Practitioner insights on RBI compliance, DPDPA, Digital Lending Guidelines, CIC obligations, and BFSI regulatory developments.',
  alternates: { canonical: 'https://gyaanpravaha.com/insights' },
}

const ARTICLES = [
  { slug: 'digital-lending-guidelines-nbfc-compliance', badge: 'RBI', date: 'March 2026', title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant', excerpt: 'The RBI\'s Digital Lending Guidelines have been in force since 2022. Yet most NBFCs still have significant gaps in LSP governance, FLDG structure, KFS implementation, and digital loan agreement requirements.', readTime: '8 min read' },
  { slug: 'dpdpa-2023-nbfc-compliance-guide', badge: 'DPDPA', date: 'February 2026', title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified', excerpt: 'The Digital Personal Data Protection Act 2023 is now law. NBFCs that wait for the Rules before acting will not have enough time to build a compliant data processing framework.', readTime: '10 min read' },
  { slug: '21-rbi-circulars-credit-information-nbfc', badge: 'CIC', date: 'January 2026', title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know', excerpt: 'CICRA 2005 and the 21 RBI circulars on credit information set out an intricate framework of obligations. Most compliance teams know only a fraction of them.', readTime: '12 min read' },
  { slug: 'cic-regulatory-framework-cicra-2005', badge: 'CIC', date: 'April 2026', title: 'CIC Regulatory Framework — CICRA 2005 and the 21 Instruments Every Credit Information Company Must Know', excerpt: 'A complete regulatory corpus for Credit Information Companies spans 21 instruments — from primary legislation in 2005 through to Amendment Directions issued in January 2026. Most CICs are operating against an incomplete picture of their obligations.', readTime: '12 min read' },
  { slug: 'cic-compliance-july-2026-deadline', badge: 'CIC', date: 'April 2026', title: 'July 1, 2026 — The Most Consequential CIC Compliance Deadline in a Decade', excerpt: 'RBI\'s Amendment Directions of December 2025 introduce a 4-reference-date credit reporting regime. Four major reforms come into force simultaneously on July 1, 2026. Every CI and CIC must be operationally ready.', readTime: '10 min read' },
  { slug: 'cic-data-quality-index-rbi', badge: 'DQI', date: 'April 2026', title: 'RBI\'s Data Quality Index for Credit Information — What Every Credit Institution Must Know', excerpt: 'From July 1, 2026, file-level DQI must be delivered within 3 calendar days. The weighted average DQI formula becomes mandatory. Poor DQI now has direct regulatory consequences via DAKSH.', readTime: '9 min read' },
  { slug: 'arc-cic-reporting-obligations-rbi', badge: 'ARC', date: 'April 2026', title: 'ARC Obligations to CICs — What Asset Reconstruction Companies Must Now Report', excerpt: 'Two instruments from November and December 2025 have fundamentally changed CIC reporting for ARCs. Membership of all four CICs, UCRF reporting, CKYC obligations, and July 2026 readiness — all now mandatory.', readTime: '8 min read' },
  { slug: 'cic-consumer-protection-grievance-compensation', badge: 'CONSUMER', date: 'April 2026', title: 'CIC Consumer Protection — ₹100/Day Compensation, FFCR Rights, and the Internal Ombudsman', excerpt: 'The ₹100/day compensation framework creates compounding liability for unresolved grievances. Combined with Internal Ombudsman Directions 2026 and RBIOS, consumer protection is now the most scrutinised CIC compliance dimension.', readTime: '9 min read' },
  { slug: 'nbfc-npa-90-days-base-layer-2026', badge: 'SBR', date: 'April 2026', title: '90-Day NPA Classification — What Every Base Layer NBFC Must Do Now', excerpt: 'The 90-day NPA glide path is fully effective from March 2026 for Base Layer NBFCs. Most are still operating on 120-day practices. What changes, the provisioning impact, and what the Board must approve.', readTime: '9 min read' },
  { slug: 'dpdpa-rules-2025-nbfc-banks-november-2026', badge: 'DPDPA', date: 'April 2026', title: 'DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026', excerpt: 'The DPDP Rules were notified November 2025. Phase 2 obligations — breach response, DPIAs, independent audits — are due by November 2026. A practical compliance roadmap for BFSI institutions.', readTime: '11 min read' },
  { slug: 'nbfc-internal-ombudsman-directions-2026', badge: 'RBI', date: 'April 2026', title: 'NBFC Internal Ombudsman Directions 2026 — Who Must Appoint and What It Requires', excerpt: 'RBI\'s January 2026 directions mandate Internal Ombudsman for qualifying NBFCs. Independence criteria, 7-year experience requirement, Board reporting, and what replaces the 2023 framework.', readTime: '9 min read' },
  { slug: 'rbi-scale-based-regulation-middle-upper-layer-nbfc', badge: 'SBR', date: 'May 2026', title: 'RBI Scale-Based Regulation — Complete Compliance Guide for Middle and Upper Layer NBFCs', excerpt: 'RBI is reviewing SBR amid concerns about NBFC-bank interconnectedness. Middle Layer (₹1,000Cr+) and Upper Layer obligations — CCO mandate, large exposure, ICAAP, compensation policy.', readTime: '12 min read' },
  { slug: 'rbi-digital-banking-authorisation-2026', badge: 'DIGITAL', date: 'May 2026', title: 'RBI Digital Banking Authorisation 2026 — What Every Bank Must Now Have in Place', excerpt: 'From January 2026, banks need explicit RBI authorisation for all digital channels. New governance standards, eligibility criteria, ring-fencing of core banking, and board-approved restructuring plans.', readTime: '8 min read' },
  { slug: 'rbi-cybersecurity-compliance-nbfc-cert-in', badge: 'CYBER', date: 'May 2026', title: 'RBI Cybersecurity for NBFCs — CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001', excerpt: 'The 6-hour material cyber incident reporting window and mandatory CERT-In annual audit are the two requirements most NBFCs are least prepared for. What each covers and how to get ready.', readTime: '10 min read' },
  { slug: 'nbfc-unregistered-type-1-cor-surrender-2026', badge: 'SBR', date: 'June 2026', title: 'NBFC Type I Unregistered — Should Your NBFC Surrender Its RBI Certificate of Registration?', excerpt: 'RBI\'s April 2026 amendment creates a new category of NBFCs exempt from registration. CoR surrender window open till September 30, 2026 via PRAVAAH. Who qualifies and what the risks are.', readTime: '8 min read' },
  { slug: 'kyc-master-direction-2025-nbfc-changes', badge: 'KYC', date: 'June 2026', title: 'KYC Master Direction 2025 — What Changed and What Your NBFC Must Update Now', excerpt: 'The July 2025 KYC Master Direction update changes beneficial ownership thresholds, CKYC upload timelines, video KYC standards, and re-KYC periodicity — now intersecting with DPDPA consent requirements.', readTime: '9 min read' },
  { slug: 'dpdpa-consent-management-digital-lending', badge: 'DPDPA', date: 'June 2026', title: 'DPDPA Consent Management for Digital Lending — How the Act Redesigns Borrower Onboarding', excerpt: 'DPDPA requires separate, purpose-specific consent for every use of borrower data — bureau inquiry, bank statement analysis, CKYC, collection. What your LOS must be retrofitted to capture.', readTime: '10 min read' },
]


export default function InsightsPage() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#c9a84c', marginBottom: '0.75rem' }}>Insights</div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '0.75rem' }}>From the Practice</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.8 }}>Practitioner analysis on RBI compliance, DPDPA, Digital Lending, CIC obligations, and BFSI regulatory developments.</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <InsightsFilter articles={ARTICLES} />
        </div>
      </section>
    </>
  )
}
