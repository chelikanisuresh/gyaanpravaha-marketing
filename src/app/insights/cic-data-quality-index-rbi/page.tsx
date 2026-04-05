import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RBI\'s CIC Data Quality Index — What Every Credit Institution Must Know About DQI',
  description: 'The RBI Data Quality Index for credit information reporting — how it is calculated, what the four parameters are, what the two-tier DQI delivery framework means from July 2026, and why DQI failures create regulatory exposure for NBFCs and Banks.',
  keywords: ['CIC data quality index RBI', 'DQI credit information companies', 'RBI credit data quality', 'credit information reporting quality NBFC', 'TUDF Metro2 data quality', 'CIC DQI July 2026'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/cic-data-quality-index-rbi' },
  openGraph: {
    title: 'RBI\'s CIC Data Quality Index — DQI for Credit Information Reporting',
    description: 'How DQI is calculated, what changes from July 2026, and why data quality failures create regulatory exposure.',
    type: 'article',
  },
}

export default function CICDQIArticle() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DQI</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            RBI's Data Quality Index for Credit Information — What Every Credit Institution Must Know
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            The Data Quality Index is one of the most underappreciated compliance metrics in credit information reporting. From July 1, 2026, the DQI framework becomes significantly more demanding — file-level DQI delivered within 3 days, monthly DQI brought forward, and a mandatory weighted average formula. Poor DQI now has direct regulatory consequences.
          </p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>What Is the Data Quality Index</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Data Quality Index (DQI) is a composite score assigned by CICs to each Credit Institution's credit information submissions. It measures the quality of the data submitted — not just whether the file was received on time, but whether the content is accurate, complete, timely, and internally consistent.</p>
          <p style={{ marginBottom: '1.25rem' }}>The DQI is not merely an internal quality metric. It is reported to RBI through the DAKSH portal on a half-yearly basis, and CICs are required to place DQI performance before their Board sub-committees semi-annually. Credit Institutions with persistently poor DQI scores face escalating regulatory consequences — including being reported to RBI's Department of Supervision.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>The Four DQI Parameters</h2>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#0d1b2e' }}>
                  {['Parameter', 'Weight', 'What It Measures'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { param: 'Accuracy', weight: '30%', desc: 'Correctness of data fields reported — name, address, PAN, account details, outstanding balance' },
                  { param: 'Completeness', weight: '30%', desc: 'Percentage of mandatory fields populated without blanks or nulls. Missing fields are the most common DQI failure mode' },
                  { param: 'Timeliness', weight: '25%', desc: 'Adherence to reporting reference date deadlines. Late submissions directly reduce DQI score' },
                  { param: 'Consistency', weight: '15%', desc: 'Alignment between related fields — e.g., outstanding balance vs. overdue amount, account status vs. DPD' },
                ].map((row, i) => (
                  <tr key={row.param} style={{ background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 700, color: '#0d1b2e' }}>{row.param}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontWeight: 700, color: '#c9a84c', fontSize: '1rem' }}>{row.weight}</td>
                    <td style={{ padding: '9px 12px', lineHeight: 1.5 }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginBottom: '2rem' }}>The weight distribution reflects the RBI's priorities. Accuracy and Completeness together account for 60% of the DQI score — because an incomplete or inaccurate credit record is worse than no record at all from a credit assessment perspective.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The New Two-Tier DQI Delivery Framework — Effective July 1, 2026</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Amendment Directions of December 2025 introduce a fundamentally different DQI delivery structure. Under the current framework, CICs provide one monthly DQI report per Credit Institution. From July 1, 2026, the framework becomes two-tier:</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {[
              { type: 'File-Level DQI', coverage: 'Each individual file (all 4 reference dates) across all segments', deliveredBy: 'CIC → CI', timeline: 'Within 3 calendar days of file receipt', highlight: true },
              { type: 'CI-Level Monthly DQI', coverage: 'Aggregate of all files submitted by CI in the month, all segments', deliveredBy: 'CIC → CI', timeline: 'By 10th of the following month (brought forward from 15th)', highlight: false },
            ].map(tier => (
              <div key={tier.type} style={{ background: '#fff', border: `1px solid ${tier.highlight ? '#c9a84c' : '#e4ddd0'}`, borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, color: tier.highlight ? '#c9a84c' : '#0d1b2e', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{tier.type}</div>
                <div style={{ fontSize: '0.82rem', color: '#5a6a7a', lineHeight: 1.6, marginBottom: '0.5rem' }}><strong style={{ color: '#0d1b2e' }}>Coverage:</strong> {tier.coverage}</div>
                <div style={{ fontSize: '0.82rem', color: '#5a6a7a', lineHeight: 1.6, marginBottom: '0.5rem' }}><strong style={{ color: '#0d1b2e' }}>Delivered by:</strong> {tier.deliveredBy}</div>
                <div style={{ fontSize: '0.82rem', color: '#dc2626', fontWeight: 600 }}>⏱ {tier.timeline}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Weighted Average DQI Formula</h2>
          <p style={{ marginBottom: '1.25rem' }}>Para 20(3) of the Amendment Directions mandates that the CI-level monthly DQI must be computed as the weighted average of file-level DQIs, weighted by number of records per file:</p>

          <div style={{ background: '#0d1b2e', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '0.9rem', color: '#c9a84c' }}>
            Monthly DQI = Σ(Records in File × File DQI Score) ÷ Σ(Total Records in all files)
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <strong style={{ color: '#0d1b2e' }}>Illustrative example:</strong> A CI submits 4 files in a month — 200, 250, 220, and 200 records — with file-level DQI scores of 95, 98, 100, and 98 respectively. Total records = 870. Weighted DQI = (200×95 + 250×98 + 220×100 + 200×98) ÷ 870 = 85,260 ÷ 870 = <strong>98.00</strong>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>DAKSH Portal Reporting — The Regulatory Escalation Path</h2>
          <p style={{ marginBottom: '1.25rem' }}>CICs must report non-compliant Credit Institutions — those that miss submission deadlines — to RBI's Department of Supervision through the DAKSH portal on a half-yearly basis (March 31 and September 30 each year). This creates a direct regulatory escalation path from poor DQI performance to RBI supervisory action.</p>
          <p style={{ marginBottom: '1.25rem' }}>Additionally, the CIC Board sub-committee must review DQI performance data semi-annually. CICs that do not have adequate DQI governance frameworks — or that have Board sub-committees that are not genuinely engaging with DQI data — face potential findings in RBI inspections.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Most Common DQI Failure Modes</h2>
          <p style={{ marginBottom: '1.25rem' }}>From an advisory perspective, the most common DQI failures we encounter are not random — they follow predictable patterns rooted in LMS system limitations and operational process gaps:</p>
          {[
            { issue: 'Null mandatory fields', cause: 'LMS does not populate all TUDF/Metro 2 mandatory fields. Data extraction leaves blanks rather than defaulting to required placeholder values.' },
            { issue: 'Incorrect DPD calculation', cause: 'LMS NPA logic does not accurately compute Days Past Due — leading to mismatches between the DPD field and the account status field, triggering consistency failures.' },
            { issue: 'Late file submission', cause: 'Manual processes for generating and transmitting the credit information file miss the reference date deadline — especially on months where the reference date falls around weekends or holidays.' },
            { issue: 'Demographic data mismatch', cause: 'Customer name, address, and PAN discrepancies between the LMS and the CIC-returned data — often stemming from data entry inconsistencies at origination.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid #e4ddd0' }}>
              <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.3rem', fontSize: '0.93rem' }}>{item.issue}</div>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.cause}</p>
            </div>
          ))}

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Is your DQI score where it needs to be for July 2026?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A DQI audit will identify your specific failure modes and build an LMS-level remediation plan before the new framework comes into force.</p>
            <Link href="/contact" className="btn-primary">Book a DQI Advisory Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
