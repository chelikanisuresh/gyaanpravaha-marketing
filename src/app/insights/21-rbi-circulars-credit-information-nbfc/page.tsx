import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know',
  description: 'A practitioner\'s guide to all 21 RBI circulars on credit information — CICRA 2005, bureau submission obligations, SMA reporting, dispute resolution, and what the 2025 Master Direction changes.',
  keywords: ['RBI credit information circulars', 'CICRA 2005 NBFC', '21 RBI circulars credit information', 'credit bureau compliance NBFC', 'CIBIL NBFC obligation', 'SMA reporting RBI', 'credit information master direction 2025'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/21-rbi-circulars-credit-information-nbfc' },
  openGraph: { title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know', type: 'article' },
}

const CIRCULARS = [
  { no: '1-5', title: 'Membership & Reporting Obligations', desc: 'Mandatory CIC membership, borrower data submission timelines, and format specifications.' },
  { no: '6-10', title: 'Data Quality Standards', desc: 'TUDF/Metro 2 format accuracy, rejection handling, and data correction obligations.' },
  { no: '11-15', title: 'SMA & Overdue Reporting', desc: 'Special Mention Account reporting, overdue classification, and bureau update timelines.' },
  { no: '16-18', title: 'Dispute Resolution', desc: 'Borrower dispute TAT, correction reporting to bureaus, and internal SLA requirements.' },
  { no: '19-21', title: 'Consumer Access & Governance', desc: 'Free credit score access, CIC inspection readiness, and compliance monitoring.' },
]

export default function CICArticle() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(31,97,141,0.3)', color: '#7fc4ff', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px' }}>CIC</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>January 2026 · 12 min read</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>CICRA 2005 and the 21 RBI circulars on credit information set out an intricate framework of obligations for every credit institution. Most compliance teams know only a fraction of them.</p>
        </div>
      </section>

      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2rem' }}>Why CIC Compliance Is Underestimated</h2>
          <p style={{ marginBottom: '1.25rem' }}>Every NBFC with outstanding loan accounts is a member of at least one Credit Information Company. As a member, you have ongoing obligations under CICRA 2005 and 21 specific RBI circulars that have accumulated since 2006. Most compliance teams are aware of the basic bureau submission requirement — but the detail and breadth of the obligations is consistently underestimated.</p>
          <p style={{ marginBottom: '1.25rem' }}>The RBI's November 2025 Master Direction on Credit Information Companies (CICs) has now consolidated many of these obligations. But the underlying 21 circulars remain the source of specific procedural requirements that the Master Direction does not reproduce in full.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The 21 Circulars — A Structured Overview</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {CIRCULARS.map(c => (
              <div key={c.no} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '2px', minWidth: '40px' }}>#{c.no}</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{c.title}</div>
                  <p style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Most Common Gaps</h2>
          <p style={{ marginBottom: '1.25rem' }}>The gaps we find most consistently across NBFCs: SMA-0 and SMA-1 accounts that are not being reported to bureaus on time; TUDF/Metro 2 format errors causing systematic rejection of records; dispute TAT breaches because the internal process does not loop in the bureau correction within the prescribed timeframe; and LMS systems that are generating incorrect NPA dates, creating downstream errors in bureau data.</p>
          <p style={{ marginBottom: '2rem' }}>These are not policy gaps — they are operational gaps that exist because the compliance obligation is not properly translated into the LMS system logic and the operations process. This is precisely where the combination of LMS experience and CIC compliance knowledge is critical.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/cic-compliance-july-2026-deadline" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>CIC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>July 1, 2026 — The Most Consequential CIC Compliance Deadline</div>
              </a>              <a href="/insights/cic-data-quality-index-rbi" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>DQI</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI's Data Quality Index for Credit Information</div>
              </a>              <a href="/insights/arc-cic-reporting-obligations-rbi" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>ARC</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>ARC Obligations to CICs — What ARCs Must Now Report</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>Want a full review of your CIC compliance posture?</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your highest-priority CIC compliance gaps.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
