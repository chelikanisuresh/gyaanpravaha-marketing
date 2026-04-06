import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: '90-Day NPA Classification — What Every Base Layer NBFC Must Do Now',
  description: 'The RBI\'s 90-day NPA glide path is fully effective from March 2026 for Base Layer NBFCs. Most are still operating on 120-day practices. What changes, the provisioning impact, and what the Board must approve.',
  keywords: ['NBFC NPA 90 days 2026', 'base layer NBFC NPA classification', 'RBI NPA glide path NBFC', 'NBFC asset classification 2026', 'NPA provisioning NBFC base layer', 'RBI scale based regulation NPA'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/nbfc-npa-90-days-base-layer-2026' },
}

export default function NPAArticle() {
  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "90-Day NPA Classification \u2014 What Every Base Layer NBFC Must Do Now", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/nbfc-npa-90-days-base-layer-2026"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>SBR</span>
            <span style={{ background: 'rgba(239,68,68,0.2)', color: '#f87171', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DEADLINE PASSED</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>April 2026 · 9 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>90-Day NPA Classification — What Every Base Layer NBFC Must Do Now</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>The RBI's NPA glide path reached its final stage in March 2026. Base Layer NBFCs that were classifying NPAs at 120 days overdue are now required to operate on the 90-day norm — the same standard that Middle and Upper Layer entities have followed for years. Most Base Layer entities are not ready.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>⚠ Effective March 31, 2026</div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Base Layer NBFCs (assets below ₹1,000 crore) must now classify advances as Non-Performing Assets when they are overdue for more than 90 days — not 120 days. This is not a proposal. It is in force. Boards that have not approved updated credit and provisioning policies are already non-compliant.</p>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>What the Glide Path Was — and Where It Ends</h2>
          <p style={{ marginBottom: '1.25rem' }}>RBI introduced the Scale-Based Regulation framework in October 2022. One of its central harmonisation objectives was to align NPA classification norms across all NBFC categories. Prior to SBR, non-systemically important, non-deposit-taking NBFCs — now classified as Base Layer — classified advances as NPA only when overdue for more than 180 days. The SBR framework set a glide path to bring this in line with the 90-day norm applicable to Middle and Upper Layer entities.</p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead><tr style={{ background: '#0d1b2e' }}>{['Deadline', 'NPA Threshold', 'Status'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#c9a84c', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>)}</tr></thead>
              <tbody>
                {[
                  { d: 'Pre-SBR (before Oct 2022)', t: '180 days overdue', s: 'Superseded', alert: false },
                  { d: 'March 31, 2024', t: '150 days overdue', s: 'Completed', alert: false },
                  { d: 'March 31, 2025', t: '120 days overdue', s: 'Completed', alert: false },
                  { d: 'March 31, 2026', t: '90 days overdue', s: 'NOW IN FORCE', alert: true },
                ].map((r, i) => (
                  <tr key={i} style={{ background: r.alert ? 'rgba(239,68,68,0.05)' : i % 2 === 0 ? '#fff' : '#faf7f2' }}>
                    <td style={{ padding: '9px 12px', color: '#0d1b2e', fontWeight: r.alert ? 600 : 400 }}>{r.d}</td>
                    <td style={{ padding: '9px 12px', fontFamily: 'monospace', fontSize: '0.85rem', color: r.alert ? '#dc2626' : '#0d1b2e', fontWeight: r.alert ? 700 : 400 }}>{r.t}</td>
                    <td style={{ padding: '9px 12px', fontSize: '0.8rem', color: r.alert ? '#dc2626' : '#5a6a7a', fontWeight: r.alert ? 700 : 400 }}>{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What Actually Changes for a Base Layer NBFC</h2>
          <p style={{ marginBottom: '1.25rem' }}>The shift from 120 to 90 days is not merely an accounting adjustment. It cascades through credit policy, provisioning, portfolio reporting, Board MIS, DNBS returns, and CIC reporting. Every system that references NPA classification — your LMS, your RBI returns module, your credit monitoring dashboards — must reflect the new threshold.</p>
          {[
            { title: 'Credit policy update', desc: 'The Board-approved credit policy must explicitly state the 90-day NPA classification norm. Policies that still reference 120 days or the earlier 180-day norm are non-compliant and will be flagged in RBI inspections.' },
            { title: 'Provisioning impact', desc: 'Accounts that were "standard" at 91-120 days overdue will now be classified as Sub-Standard. This increases provisioning requirements — 15% on secured sub-standard assets, 25% on unsecured. NBFCs with high-DPD portfolios will see immediate P&L impact.' },
            { title: 'CIC reporting alignment', desc: 'NPA status must be reflected in credit information submissions to all four CICs. Accounts reclassified as NPA under the 90-day norm must have their Days Past Due and account status updated in the next CIC reporting cycle.' },
            { title: 'RBI DNBS returns', desc: 'NBS-1 and NBS-2 returns must reflect the correct NPA position under the 90-day norm. Submissions that use the old threshold will be inconsistent with the regulatory position and flagged during data scrutiny.' },
            { title: 'Board MIS and ALCO', desc: 'Credit risk dashboards, portfolio quality reports, and ALCO presentations must be updated to reflect NPA computed on the 90-day basis. Boards that are still seeing 120-day NPA numbers are not getting accurate regulatory position reporting.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', borderLeft: '3px solid #c9a84c' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What the Board Must Approve — Urgently</h2>
          <p style={{ marginBottom: '1.25rem' }}>RBI's SBR framework is explicit that credit policy is a Board-approved document. The 90-day NPA norm must be embedded in that policy. Beyond the policy update, the Board must also approve revised provisioning matrices, updated credit risk appetite statements, and a reconciliation of the opening NPA position under the new norm.</p>
          <p style={{ marginBottom: '2rem' }}>Any NBFC-BL that goes into an RBI inspection without these Board approvals documented is exposed — not just for the NPA classification itself, but for the broader governance finding that the Board was not informed and did not act on a known regulatory deadline.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/rbi-scale-based-regulation-middle-upper-layer-nbfc" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Scale-Based Regulation — Complete Compliance Guide for Middle and Upper Layer NBFCs</div>
              </a>              <a href="/insights/rbi-cybersecurity-compliance-nbfc-cert-in" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CYBER</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Cybersecurity for NBFCs — CERT-In Audit, 6-Hour Incident Reporting, and ISO 27001</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Has your Board approved the updated NPA policy?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute call will identify your specific gaps — credit policy, provisioning, CIC reporting, and DNBS returns — and give you a prioritised remediation plan.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
