import { NextResponse } from 'next/server'

const BASE_URL = 'https://gyaanpravaha.com'

const ARTICLES = [
  { slug: 'nbfc-npa-90-days-base-layer-2026', title: '90-Day NPA Classification — What Every Base Layer NBFC Must Do Now', date: '2026-04-06', badge: 'SBR', excerpt: "The RBI's 90-day NPA glide path is fully effective from March 2026 for Base Layer NBFCs. What changes, the provisioning impact, and what the Board must approve." },
  { slug: 'dpdpa-rules-2025-nbfc-banks-november-2026', title: 'DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026', date: '2026-04-06', badge: 'DPDPA', excerpt: 'The DPDP Rules were notified November 2025. Phase 2 obligations — breach response, DPIAs, independent audits — are due by November 2026.' },
  { slug: 'nbfc-internal-ombudsman-directions-2026', title: 'NBFC Internal Ombudsman Directions 2026 — Who Must Appoint and What It Requires', date: '2026-04-06', badge: 'RBI', excerpt: "RBI's January 2026 Internal Ombudsman Directions replace the 2023 framework and significantly raise the bar." },
  { slug: 'rbi-scale-based-regulation-middle-upper-layer-nbfc', title: 'RBI Scale-Based Regulation — Complete Compliance Guide for Middle and Upper Layer NBFCs', date: '2026-04-06', badge: 'SBR', excerpt: 'Middle Layer and Upper Layer obligations — CCO mandate, large exposure framework, ICAAP, compensation policy, and what the SBR review means.' },
  { slug: 'rbi-digital-banking-authorisation-2026', title: 'RBI Digital Banking Authorisation 2026 — What Every Bank Must Now Have in Place', date: '2026-04-06', badge: 'DIGITAL', excerpt: 'From January 2026, banks require explicit RBI authorisation for internet banking, mobile banking, and all digital channels.' },
  { slug: 'rbi-cybersecurity-compliance-nbfc-cert-in', title: 'RBI Cybersecurity for NBFCs — CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001', date: '2026-04-06', badge: 'CYBER', excerpt: 'The 6-hour material cyber incident reporting window and mandatory CERT-In annual audit are the two requirements most NBFCs are least prepared for.' },
  { slug: 'nbfc-unregistered-type-1-cor-surrender-2026', title: "NBFC Type I Unregistered — Should Your NBFC Surrender Its RBI Certificate of Registration?", date: '2026-04-06', badge: 'SBR', excerpt: "RBI's April 2026 amendment creates a new category of NBFCs exempt from registration. CoR surrender window open till September 30, 2026." },
  { slug: 'kyc-master-direction-2025-nbfc-changes', title: 'KYC Master Direction 2025 — What Changed and What Your NBFC Must Update Now', date: '2026-04-06', badge: 'KYC', excerpt: 'The July 2025 KYC Master Direction update changes beneficial ownership thresholds, CKYC upload timelines, and re-KYC periodicity.' },
  { slug: 'dpdpa-consent-management-digital-lending', title: 'DPDPA Consent Management for Digital Lending — How the Act Redesigns Borrower Onboarding', date: '2026-04-06', badge: 'DPDPA', excerpt: 'DPDPA requires separate, purpose-specific consent for every use of borrower data. What your LOS must be retrofitted to capture.' },
  { slug: 'cic-compliance-july-2026-deadline', title: 'July 1, 2026 — The Most Consequential CIC Compliance Deadline in a Decade', date: '2026-03-01', badge: 'CIC', excerpt: 'Four separate RBI/CIC compliance frameworks converge on July 1, 2026. What each one requires and which institutions are in scope.' },
  { slug: 'cic-data-quality-index-rbi', title: "RBI's Data Quality Index for Credit Information — What Every Credit Institution Must Know", date: '2026-03-01', badge: 'DQI', excerpt: 'The DQI is now a public score — visible to institutions and regulators. A low DQI is a supervisory risk, not just an operational one.' },
  { slug: 'arc-cic-reporting-obligations-rbi', title: 'ARC Obligations to CICs — What Asset Reconstruction Companies Must Now Report', date: '2026-02-01', badge: 'ARC', excerpt: 'ARCs are now required to report to all four credit information companies. The obligations, timelines, and operational requirements.' },
  { slug: 'cic-consumer-protection-grievance-compensation', title: 'CIC Consumer Protection — Rs.100/Day Compensation, FFCR Rights, and the Internal Ombudsman', date: '2026-02-01', badge: 'CONSUMER', excerpt: 'The Rs.100/day compensation framework creates compounding liability for unresolved grievances.' },
  { slug: 'cic-regulatory-framework-cicra-2005', title: 'CIC Regulatory Framework — CICRA 2005 and the 21 RBI Instruments Every CIC Must Know', date: '2026-01-01', badge: 'CIC', excerpt: 'The complete regulatory framework for Credit Information Companies — CICRA, the 21 RBI instruments, and what each one requires.' },
  { slug: 'digital-lending-guidelines-nbfc-compliance', title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant', date: '2025-12-01', badge: 'RBI', excerpt: 'Two years after the Digital Lending Guidelines, most NBFCs are still non-compliant on key provisions. The persistent gaps.' },
  { slug: 'dpdpa-2023-nbfc-compliance-guide', title: 'DPDPA 2023 — What Every NBFC Needs to Do', date: '2025-12-01', badge: 'DPDPA', excerpt: 'The Digital Personal Data Protection Act creates significant compliance obligations for NBFCs across customer data, consent, and breach response.' },
  { slug: '21-rbi-circulars-credit-information-nbfc', title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know', date: '2025-11-01', badge: 'CIC', excerpt: 'A complete reference guide to the 21 RBI circulars, Master Directions, and notifications that govern credit information reporting.' },
]

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gyaan Pravaha — RBI Compliance Insights</title>
    <link>${BASE_URL}/insights</link>
    <description>Practitioner-grade regulatory analysis for Banks, NBFCs, SFBs and Financial Institutions — RBI compliance, DPDPA, CIC, KYC, and more.</description>
    <language>en-in</language>
    <atom:link href="${BASE_URL}/insights/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/favicon.svg</url>
      <title>Gyaan Pravaha</title>
      <link>${BASE_URL}</link>
    </image>
${ARTICLES.map(a => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${BASE_URL}/insights/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/insights/${a.slug}</guid>
      <description><![CDATA[${a.excerpt}]]></description>
      <category>${a.badge}</category>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    </item>`).join('\n')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
