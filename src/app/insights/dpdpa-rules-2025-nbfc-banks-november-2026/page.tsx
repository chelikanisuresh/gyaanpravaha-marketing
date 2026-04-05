import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026',
  description: 'The DPDP Rules were notified in November 2025. Phase 2 obligations — breach response, DPIAs, independent audits, consent dashboards — are due by November 2026. A practical compliance roadmap for BFSI institutions.',
  keywords: ['DPDPA compliance NBFC 2026', 'DPDP rules banks', 'DPDPA November 2026 deadline', 'DPDPA phase 2 BFSI', 'data protection officer NBFC', 'DPDPA consent management bank'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/dpdpa-rules-2025-nbfc-banks-november-2026' },
}

export default function DPDPARulesArticle() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(139,92,246,0.2)', color: '#a78bfa', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DPDPA</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 11 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>DPDPA Rules 2025 — What Banks and NBFCs Must Complete Before November 2026</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>The DPDP Rules were notified on November 13, 2025. Full enforcement is required by May 2027 — but Phase 2 obligations, covering breach response, DPIAs, independent audits, and consent infrastructure, must be operational by November 2026. Most BFSI institutions are significantly behind.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Three-Phase Enforcement Timeline</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { phase: 'Phase 1 — Immediate (November 2025)', items: ['Develop data privacy framework', 'Identify Data Fiduciary obligations', 'Appoint Data Protection Officer for Significant Data Fiduciaries', 'Map data processing activities and consent flows', 'Refresh consent for new customer interactions'], color: '#dc2626' },
              { phase: 'Phase 2 — November 2026', items: ['Operationalise breach response procedures (72-hour notification to Data Protection Board)', 'Establish Data Protection Impact Assessment (DPIA) mechanism', 'Launch independent annual audit programme', 'Implement real-time consent dashboards for customers', 'Activate algorithmic transparency assessments'], color: '#d97706' },
              { phase: 'Phase 3 — May 13, 2027 (Full compliance)', items: ['Privacy-enabling technologies fully deployed', 'Complete data governance framework operational', 'All legacy consent retrofitted or re-obtained', 'Cross-border data transfer frameworks in place'], color: '#0f6e56' },
            ].map(phase => (
              <div key={phase.phase} style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', padding: '1.5rem', borderLeft: `3px solid ${phase.color}` }}>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{phase.phase}</div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {phase.items.map((item, i) => <li key={i} style={{ fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '0.3rem' }}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Why BFSI Faces the Hardest DPDPA Implementation Challenge</h2>
          <p style={{ marginBottom: '1.25rem' }}>DPDPA intersects directly with RBI's existing data governance framework — and nowhere more acutely than in financial services. Banks and NBFCs are Data Fiduciaries for some of India's most sensitive personal data: Aadhaar-linked KYC records, PAN-linked tax data, biometric video KYC captures, credit history, income data, and repayment behaviour. All of this data was collected under consent frameworks designed before DPDPA existed.</p>
          <p style={{ marginBottom: '1.25rem' }}>The Act requires purpose-specific, granular consent for each use of personal data. A borrower who gave broad consent during loan origination has not given DPDPA-compliant consent for that data to be used in credit scoring models, bureau submissions, collection activities, or cross-sell marketing. Every one of these use cases requires a separate consent, clearly worded, with the right to withdraw.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Five Most Operationally Complex Requirements for Banks and NBFCs</h2>
          {[
            { n: '1', title: '72-Hour Breach Notification', desc: 'From Phase 2 (November 2026), data breaches must be notified to the Data Protection Board within 72 hours. In practice, most BFSI institutions cannot currently detect, assess, classify, and notify a breach within 72 hours — incident response frameworks assume days, not hours. The entire security operations and escalation protocol must be rebuilt around this window.' },
            { n: '2', title: 'Real-Time Consent Dashboard', desc: 'Customers must have access to a dashboard where they can view all consent given, modify it, and withdraw it — in real time. For a bank with 10 million customers across 30+ digital products, building and maintaining this dashboard is a significant technology programme. The dashboard must work in English and all Eighth Schedule languages.' },
            { n: '3', title: 'Data Protection Officer (Significant Data Fiduciaries)', desc: 'Larger banks and systemically important NBFCs will be classified as Significant Data Fiduciaries. This mandates a qualified DPO, independent audits, periodic DPIAs, and enhanced documentation. The DPO must have genuine independence — not a renamed compliance role.' },
            { n: '4', title: 'Legacy Consent Retrofit', desc: 'Existing customers whose data is already held and processed under pre-DPDPA consent frameworks pose the most complex challenge. Re-obtaining consent at scale creates customer friction and operational burden. The risk-based approach — using legitimate use for some processing while refreshing consent during routine interactions — requires careful legal mapping.' },
            { n: '5', title: 'Third-Party Processor Governance', desc: 'BFSI institutions process customer data through dozens of fintech partners, collection agencies, analytics vendors, and cloud providers. Under DPDPA, the Data Fiduciary retains full accountability. Every vendor relationship requires a DPDPA-compliant Data Processing Agreement, and vendors must be audited for compliance.' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: '#c9a84c', flexShrink: 0, lineHeight: 1 }}>{item.n}</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The RBI–DPDPA Intersection — Where They Conflict</h2>
          <p style={{ marginBottom: '1.25rem' }}>RBI's KYC Master Direction requires NBFCs to collect Aadhaar, PAN, and address proof — and to share this data with credit bureaus. DPDPA requires explicit, purpose-specific consent for each such use. The interaction creates a genuine legal tension: KYC is mandatory under RBI directions, but DPDPA says the data subject's consent for each use must be specific and withdrawable.</p>
          <p style={{ marginBottom: '2rem' }}>The practical resolution is layered consent — separate consent items for KYC verification, CIC submission, marketing, and analytics — designed so that withdrawing marketing consent does not affect mandatory regulatory reporting. Getting this architecture right requires both legal and technical expertise working together.</p>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Where does your institution stand on Phase 2 readiness?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A DPDPA readiness assessment will map your current consent architecture against Phase 2 requirements — and build a prioritised action plan for November 2026.</p>
            <Link href="/contact" className="btn-primary">Book a DPDPA Readiness Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
