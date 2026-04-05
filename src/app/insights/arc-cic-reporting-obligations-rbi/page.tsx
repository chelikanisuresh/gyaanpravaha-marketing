import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ARC Obligations to CICs — What Asset Reconstruction Companies Must Now Report',
  description: 'RBI\'s November 2025 Master Directions and December 2025 Amendment Directions create new credit information reporting obligations for Asset Reconstruction Companies. ARCs must now report to all four CICs, submit CKYC numbers, and comply with the 4-reference-date framework from July 2026.',
  keywords: ['ARC CIC reporting RBI', 'Asset Reconstruction Company credit information', 'ARC SARFAESI credit reporting', 'RBI ARC CIC directions 2025', 'ARC CKYC reporting July 2026', 'NPA acquisition CIC reporting ARC'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/arc-cic-reporting-obligations-rbi' },
  openGraph: {
    title: 'ARC Obligations to CICs — New Credit Information Reporting Requirements 2025-26',
    description: 'New RBI obligations for ARCs on credit information reporting — membership, UCRF format, CKYC, wilful defaulters, and July 2026 readiness.',
    type: 'article',
  },
}

export default function ARCCICArticle() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>ARC</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            ARC Obligations to CICs — What Asset Reconstruction Companies Must Now Report
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Two instruments issued in November and December 2025 have fundamentally changed the credit information reporting landscape for Asset Reconstruction Companies. ARCs are now full Credit Institutions under the CIC framework — with membership obligations, UCRF reporting requirements, CKYC reporting mandates, and full participation in the July 2026 reforms.
          </p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ fontWeight: 700, color: '#d97706', marginBottom: '0.5rem' }}>🆕 New in 2025 — Two Key Instruments for ARCs</div>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Instrument 17 (MD — RBI ARC–Credit Information Reporting Directions, November 28, 2025) and Instrument 19 (RBI ARC–CIR Amendment Directions, December 4, 2025) were identified as gaps in prior CIC compliance frameworks during a February 2026 sanity check. Both are now confirmed and operative.</p>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>Why ARCs Are Now Full Credit Institutions Under CIC Framework</h2>
          <p style={{ marginBottom: '1.25rem' }}>Asset Reconstruction Companies occupy a unique position in the credit ecosystem. They acquire Non-Performing Assets from Banks and NBFCs — meaning they inherit borrower relationships, credit histories, and ongoing recovery obligations. For years, the CIC reporting framework treated ARCs as peripheral participants. That has now changed.</p>
          <p style={{ marginBottom: '1.25rem' }}>The November 2025 Master Direction on ARC–Credit Information Reporting Directions brings ARCs fully within the Credit Institution framework. This means ARCs must become members of all four CICs, report credit information in the Uniform Credit Reporting Format (UCRF), and comply with all timelines applicable to other Credit Institutions.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Core ARC Obligations Under the New Framework</h2>

          {[
            {
              title: '1. Mandatory Membership of All Four CICs',
              content: 'ARCs must become members of CIBIL, Experian, Equifax, and CRIF Highmark. The one-time membership fee is capped at ₹10,000 per CIC, and annual membership fee at ₹5,000 per CIC. These caps apply to ARCs under the /375 Directions in the same way they apply to other Credit Institutions.',
            },
            {
              title: '2. Initial Reporting Within 7 Days of Account Acquisition',
              content: 'When an ARC acquires an NPA account from a Bank or NBFC, it must report the credit information of the acquired borrowers to all four CICs within 7 days of account acquisition. This is a tight operational window — ARCs must have automated CIC reporting pipelines ready at the point of acquisition, not as an afterthought.',
            },
            {
              title: '3. Ongoing Updates Throughout Recovery Process',
              content: 'ARC reporting obligations do not end at the point of acquisition. ARCs must continue to update CIC records throughout the recovery and resolution process — reflecting repayments, settlement, write-offs, and changes in account status. Reporting format is the same UCRF used by other Credit Institutions.',
            },
            {
              title: '4. CKYC Number Reporting — Effective July 1, 2026',
              content: 'This is specific to ARCs and does not appear in the main Amendment Directions for other CIs. ARCs must report the Central KYC (CKYC) number of borrowers to CICs wherever available. For fresh applicants (those who become ARC borrowers after July 1, 2026), the CKYC number must be reported as and when it is generated.',
            },
            {
              title: '5. Participation in the 4-Reference-Date Regime',
              content: 'From July 1, 2026, ARCs are subject to the same 4-reference-date reporting framework as all other Credit Institutions — incremental files on the 9th, 16th, and 23rd of each month, and a full file on the last day. The 4 calendar day submission window applies.',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem', borderLeft: '3px solid #f59e0b' }}>
              <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.6rem', fontSize: '0.95rem' }}>{item.title}</div>
              <p style={{ margin: 0, lineHeight: 1.7, fontSize: '0.9rem' }}>{item.content}</p>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Wilful Defaulters — ARC-Specific Reporting Obligations</h2>
          <p style={{ marginBottom: '1.25rem' }}>ARCs also have specific obligations under the MD on Treatment of Wilful Defaulters (July 2024). When an ARC acquires an NPA account, it inherits the obligation to maintain and update wilful defaulter information for the acquired borrowers.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#0d1b2e' }}>
                  {['Obligation', 'Timeline', 'Detail'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { ob: 'Initial CIC reporting of acquired borrowers', tl: 'Within 7 days of account acquisition', detail: 'All acquired borrowers must be reported to all four CICs in UCRF format' },
                  { ob: 'Wilful defaulter status update', tl: 'Within 30 days of final classification', detail: 'If an ARC classifies an acquired borrower as a Wilful Defaulter, this must be reported to all CICs within 30 days of the Review Committee\'s final determination' },
                  { ob: 'CKYC number reporting', tl: 'Where available / on generation (from July 1, 2026)', detail: 'CKYC numbers of borrowers must be reported wherever available. For fresh applicants, on generation.' },
                  { ob: 'Ongoing updates', tl: 'As recovery/resolution proceeds', detail: 'All changes to account status, outstanding balance, and settlement must be updated on CIC records' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600, color: '#0d1b2e', lineHeight: 1.4 }}>{row.ob}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#dc2626', whiteSpace: 'nowrap' }}>{row.tl}</td>
                    <td style={{ padding: '9px 12px', lineHeight: 1.4, fontSize: '0.88rem' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What ARCs Must Do Before July 1, 2026</h2>
          <p style={{ marginBottom: '1.25rem' }}>Most ARCs in India are significantly behind on CIC compliance preparation. The combination of new membership requirements, UCRF format adoption, CKYC reporting, and the 4-reference-date regime creates a compressed operational readiness challenge.</p>
          <p style={{ marginBottom: '2rem' }}>The starting point is a gap assessment against the two new instruments — MD /375 and Amendment Directions /118 — against current ARC operating practices. This will identify which gaps require system changes, which require process changes, and which require new vendor relationships with CICs.</p>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Is your ARC ready for the new CIC reporting framework?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your gaps against the November and December 2025 directions — and build a readiness plan for July 2026.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
