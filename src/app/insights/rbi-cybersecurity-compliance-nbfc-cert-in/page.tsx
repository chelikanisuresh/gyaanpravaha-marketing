import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: 'RBI Cybersecurity Compliance for NBFCs — CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001',
  description: 'RBI\'s IT Risk and Cyber Security framework for NBFCs — what the CERT-In empanelled annual audit covers, the 6-hour material cyber incident reporting obligation, ISO 27001 certification requirements, and BCP/DR standards for NBFC-ML entities.',
  keywords: ['RBI cybersecurity NBFC 2026', 'CERT-In audit NBFC', 'cyber incident reporting RBI', 'ISO 27001 NBFC', 'RBI IT framework NBFC', 'NBFC cyber security compliance'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/rbi-cybersecurity-compliance-nbfc-cert-in' },
}

export default function CyberSecurityArticle() {
  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "RBI Cybersecurity for NBFCs \u2014 CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/rbi-cybersecurity-compliance-nbfc-cert-in"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(239,68,68,0.2)', color: '#f87171', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>CYBERSECURITY</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>May 2026 · 10 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>RBI Cybersecurity Compliance for NBFCs — CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>RBI's Master Direction on IT Governance and Cyber Security for NBFCs classifies obligations by asset size and imposes a significantly higher standard on NBFC-ML entities (assets above ₹500 crore). The 6-hour material cyber incident reporting window and mandatory CERT-In empanelled annual audit are the two requirements most NBFCs are least operationally prepared for.</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1.5rem', marginTop: '2rem' }}>The Key Cybersecurity Obligations at a Glance</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead><tr style={{ background: '#0d1b2e' }}>{['Obligation', 'Standard Required', 'Timeline'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  { ob: 'IT & Cybersecurity Policy', std: 'Board-approved; reviewed annually', tl: 'Ongoing' },
                  { ob: 'Data Residency', std: 'India-only — all servers and databases', tl: 'Immediate' },
                  { ob: 'ISMS Certification', std: 'ISO 27001:2013 (or latest version)', tl: 'NBFC-ML: mandatory' },
                  { ob: 'Record Retention', std: 'Minimum 7 years', tl: 'Ongoing' },
                  { ob: 'Platform Uptime SLA', std: '99.5% monthly minimum', tl: 'Ongoing' },
                  { ob: 'Annual Cybersecurity Audit', std: 'CERT-In empanelled auditor only', tl: 'Annual — report to Board + RBI within 3 months' },
                  { ob: 'Material Cyber Incident Reporting', std: 'Immediate notification to RBI', tl: 'Within 6 hours of detection' },
                  { ob: 'Disaster Recovery Site', std: 'Hot standby mandatory', tl: 'NBFC-ML: immediate' },
                  { ob: 'BCP Testing', std: 'Semi-annual (H1 and H2)', tl: 'Twice yearly' },
                  { ob: 'Recovery Time Objective (RTO)', std: '4 hours maximum', tl: 'Tested semi-annually' },
                  { ob: 'Recovery Point Objective (RPO)', std: '2 hours maximum', tl: 'Tested semi-annually' },
                ].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 500, color: '#0d1b2e', lineHeight: 1.4 }}>{r.ob}</td>
                    <td style={{ padding: '9px 12px', lineHeight: 1.4 }}>{r.std}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.8rem', color: r.tl.includes('6 hours') ? '#dc2626' : '#0d1b2e', fontWeight: r.tl.includes('6 hours') ? 700 : 400 }}>{r.tl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The 6-Hour Window — Why Most NBFCs Cannot Currently Meet It</h2>
          <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>⚡ Critical Operational Requirement</div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Material cyber incidents must be reported to RBI within 6 hours of detection. This is not 6 hours from the time the incident was fully assessed — it is 6 hours from the moment the NBFC becomes aware of a potential material cyber incident.</p>
          </div>
          <p style={{ marginBottom: '1.25rem' }}>In practice, achieving the 6-hour window requires: a 24/7 Security Operations Centre (or equivalent monitoring), a predefined classification framework for what constitutes a "material" incident, a pre-approved escalation path that reaches the designated RBI notification officer within hours, and a pre-drafted notification template that can be populated quickly with incident-specific details.</p>
          <p style={{ marginBottom: '1.25rem' }}>Most NBFCs currently operate incident response frameworks that assume a 24-48 hour assessment window before escalation. The RBI framework collapses this to 6 hours for initial notification, with a detailed report to follow. This requires a fundamental redesign of the SOC and escalation protocols.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What the CERT-In Empanelled Audit Actually Covers</h2>
          <p style={{ marginBottom: '1.25rem' }}>The annual cybersecurity audit must be conducted by an auditor empanelled with CERT-In (the Indian Computer Emergency Response Team). The audit covers the full scope of the NBFC's IT infrastructure — not just the internet-facing systems. Key audit domains include:</p>
          {['Network security architecture and segmentation', 'Access control and privileged identity management', 'Vulnerability assessment and penetration testing results', 'Patch management and software lifecycle', 'Data encryption standards in transit and at rest', 'Incident detection and response capability', 'Business continuity and DR test results', 'Cloud security configuration (if applicable)', 'Third-party vendor security controls'].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.65rem 0', borderBottom: '1px solid #e4ddd0', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', flexShrink: 0, fontWeight: 700 }}>→</span>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{item}</p>
            </div>
          ))}
          <p style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>The audit report must be placed before the Board within 3 months of the audit and submitted to RBI. Audit findings must be tracked to closure with timelines — unaddressed findings from prior audits are a significant RBI inspection risk.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/rbi-digital-banking-authorisation-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DIGITAL</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Digital Banking Authorisation 2026 — What Every Bank Must Now Have</div>
              </a>              <a href="/insights/rbi-scale-based-regulation-middle-upper-layer-nbfc" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Scale-Based Regulation — Middle and Upper Layer NBFCs</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Is your NBFC operationally ready for the 6-hour incident reporting window?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A cyber risk compliance review will assess your SOC capability, escalation protocols, CERT-In audit status, and BCP/DR test documentation against RBI standards.</p>
            <Link href="/contact" className="btn-primary">Book a Cyber Risk Review Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
