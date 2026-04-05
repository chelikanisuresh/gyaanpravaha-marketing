import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIC Consumer Protection — ₹100/Day Compensation, FFCR, and the Grievance Framework',
  description: 'RBI\'s compensation framework for CICs creates direct financial liability of ₹100 per day for delayed grievance resolution. Combined with FFCR obligations, Internal Ombudsman Directions 2026, and the RBIOS scheme — consumer protection is now the most scrutinised dimension of CIC compliance.',
  keywords: ['CIC consumer protection RBI', 'credit information company grievance', 'FFCR free credit report', 'CIC compensation 100 per day', 'credit information ombudsman 2026', 'RBIOS CIC complaint', 'credit bureau dispute India'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/cic-consumer-protection-grievance-compensation' },
  openGraph: {
    title: 'CIC Consumer Protection — ₹100/Day Compensation and the Grievance Framework',
    description: 'The ₹100/day compensation framework for CICs, FFCR obligations, and Internal Ombudsman Directions 2026.',
    type: 'article',
  },
}

export default function CICConsumerProtectionArticle() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>CONSUMER</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            CIC Consumer Protection — ₹100 Per Day Compensation, FFCR Rights, and the Internal Ombudsman Framework
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Consumer protection is one of the most scrutinised dimensions of CIC compliance — and the one with the most direct financial consequences. The ₹100/day compensation framework creates compounding liability that escalates rapidly. With the Internal Ombudsman Directions of January 2026 and the RBIOS 2026 scheme, the oversight architecture has never been more robust.
          </p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Free Full Credit Report — Entitlement and Obligations</h2>
          <p style={{ marginBottom: '1.25rem' }}>Every individual has the right to one Free Full Credit Report (FFCR) per calendar year from each CIC. The FFCR must include all credit information held by the CIC about the individual, including the credit score. It is not a summary — it is the complete credit information record.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Frequency', value: '1 per year', sub: 'Per CIC, per individual (January–December)' },
              { label: 'Delivery SLA', value: '24 hours', sub: 'From verified request. Electronic format mandatory.' },
              { label: 'Website Disclosure', value: 'Mandatory', sub: 'FFCR access procedure must be published prominently' },
            ].map(card => (
              <div key={card.label} style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', color: '#8a9ab0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>{card.label}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem' }}>{card.value}</div>
                <div style={{ fontSize: '0.78rem', color: '#5a6a7a', lineHeight: 1.5 }}>{card.sub}</div>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: '2rem' }}>CICs must also have a Board-approved FFCR policy. The 24-hour delivery SLA is non-negotiable — and failures to deliver within this window are subject to the compensation framework.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Seven-Stage Grievance Process</h2>
          <p style={{ marginBottom: '1.25rem' }}>Consumer complaints about credit information errors follow a structured seven-stage process with defined timelines at each stage. The key principle is that both the CI (which reported incorrect data) and the CIC (which holds and disseminates it) have specific responsibilities and timelines.</p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#0d1b2e' }}>
                  {['Stage', 'Owner', 'Timeline', 'Action'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Stage 1', owner: 'CI or CIC', timeline: 'Day 0', action: 'Complaint received and registered', alert: false },
                  { stage: 'Stage 2', owner: 'CI or CIC', timeline: 'Within 2 business days', action: 'Acknowledgement issued to complainant', alert: false },
                  { stage: 'Stage 3', owner: 'CI', timeline: 'Within 21 calendar days', action: 'CI provides updated credit information to CIC', alert: false },
                  { stage: 'Stage 4', owner: 'CIC', timeline: 'Within 30 calendar days from filing', action: 'CIC resolves complaint and updates CIR', alert: false },
                  { stage: 'Stage 5 ⚡', owner: 'CIC / CI', timeline: 'Day 31 onwards if unresolved', action: 'Compensation accrues at ₹100 per calendar day', alert: true },
                  { stage: 'Stage 6', owner: 'CI', timeline: 'Within 45 calendar days', action: 'Root Cause Analysis (RCA) and rectification of underlying data error', alert: false },
                  { stage: 'Stage 7', owner: 'RBIOS / IO', timeline: 'Post-30-day unresolved', action: 'Escalation to Internal Ombudsman, then RBIOS 2026', alert: false },
                ].map((row, i) => (
                  <tr key={i} style={{ background: row.alert ? 'rgba(239,68,68,0.05)' : i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 700, color: row.alert ? '#dc2626' : '#0d1b2e', whiteSpace: 'nowrap' }}>{row.stage}</td>
                    <td style={{ padding: '9px 12px', color: '#5a6a7a', whiteSpace: 'nowrap' }}>{row.owner}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#0d1b2e', whiteSpace: 'nowrap' }}>{row.timeline}</td>
                    <td style={{ padding: '9px 12px', lineHeight: 1.4, fontWeight: row.alert ? 700 : 400, color: row.alert ? '#dc2626' : '#5a6a7a' }}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The ₹100/Day Compensation Framework — How Liability Is Allocated</h2>

          <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.75rem' }}>⚡ Direct Financial Liability</div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>₹100 per calendar day is payable to the complainant for each day the complaint remains unresolved beyond 30 calendar days from the date of filing. This creates a compounding liability — a complaint unresolved for 90 days generates ₹6,000 in compensation. At scale, this is a material financial risk.</p>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#0d1b2e' }}>
                  {['Scenario', 'Who Bears Compensation'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: 'CI fails to update CIC within 21 days', who: 'CI bears compensation for the period of CI\'s delay' },
                  { scenario: 'CIC fails to resolve after receiving updated information from CI', who: 'CIC bears the compensation' },
                  { scenario: 'Both CI and CIC at fault for portions of the delay', who: 'Compensation distributed proportionately between CI and CIC' },
                  { scenario: 'Complaints under CICRA Section 18 (arbitration/conciliation)', who: 'Excluded from compensation framework' },
                  { scenario: 'Credit score computation methodology disputes', who: 'Excluded from compensation framework' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', color: '#0d1b2e', lineHeight: 1.4, fontWeight: 500 }}>{row.scenario}</td>
                    <td style={{ padding: '9px 12px', color: '#5a6a7a', lineHeight: 1.4 }}>{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Internal Ombudsman and RBIOS 2026 — The New Escalation Architecture</h2>
          <p style={{ marginBottom: '1.25rem' }}>The RBI (CIC–Internal Ombudsman) Directions, 2026 (January 16, 2026) require CICs to appoint an Internal Ombudsman. The IO is the first internal escalation point for complaints that are rejected or not resolved by the CIC within 30 days. The IO must be independent — not a current or recent employee of the CIC.</p>
          <p style={{ marginBottom: '1.25rem' }}>Above the IO sits the Reserve Bank–Integrated Ombudsman Scheme 2026 (RBIOS). Complainants who are not satisfied with the IO's determination, or whose complaints are not resolved within the prescribed timelines, can escalate to RBIOS. The RBIOS scheme creates a direct regulatory interface between individual consumers and RBI on CIC-related complaints.</p>
          <p style={{ marginBottom: '2rem' }}>The practical implication is that CICs now have three distinct complaint resolution structures operating in parallel — their own internal grievance mechanism, the Internal Ombudsman, and RBIOS. Each has defined timelines and escalation triggers. CICs that do not have adequately staffed and governed grievance functions will find themselves in systemic non-compliance.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Where Most CICs Have Consumer Protection Gaps</h2>
          <p style={{ marginBottom: '1.25rem' }}>The most common consumer protection compliance gaps we encounter are not about policy — they are about operational execution:</p>
          {[
            'Grievance tracking systems that do not automatically calculate the 30-day compensation trigger date',
            'Stage 3 notifications to the CI not sent within 2 business days of complaint receipt — meaning the 21-day CI update window starts late',
            'FFCR delivery processes that take 48-72 hours rather than 24 hours for identity-verified requests',
            'Internal Ombudsman not yet appointed or the appointment not meeting the independence criteria in the January 2026 Directions',
            'Compensation payments not being correctly allocated between CI and CIC where shared liability applies',
          ].map((gap, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid #e4ddd0', alignItems: 'flex-start' }}>
              <span style={{ color: '#dc2626', flexShrink: 0, fontWeight: 700 }}>→</span>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>{gap}</p>
            </div>
          ))}

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Is your consumer protection framework RBI-ready?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A structured review of your grievance process, compensation tracking, FFCR delivery, and Internal Ombudsman structure will identify operational gaps before they become regulatory findings.</p>
            <Link href="/contact" className="btn-primary">Book a CIC Consumer Protection Review</Link>
          </div>
        </div>
      </article>
    </>
  )
}
