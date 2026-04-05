import type { Metadata } from 'next'
import Link from 'next/link'


const ARTICLES = [
  {
    slug: 'digital-lending-guidelines-nbfc-compliance',
    badge: 'RBI',
    date: 'March 2026',
    title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant',
    excerpt: 'The RBI\'s Digital Lending Guidelines have been in force since 2022. Yet most NBFCs still have significant gaps in LSP governance, FLDG structure, Key Fact Statement implementation, and digital loan agreement requirements.',
    readTime: '8 min read',
  },
  {
    slug: 'dpdpa-2023-nbfc-compliance-guide',
    badge: 'DPDPA',
    date: 'February 2026',
    title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified',
    excerpt: 'The Digital Personal Data Protection Act 2023 is now law. The Rules are expected shortly. NBFCs that wait for the Rules before acting will not have enough time to build a compliant data processing framework.',
    readTime: '10 min read',
  },
  {
    slug: '21-rbi-circulars-credit-information-nbfc',
    badge: 'CIC',
    date: 'January 2026',
    title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know',
    excerpt: 'CICRA 2005 and the 21 RBI circulars on credit information set out an intricate framework of obligations for every credit institution. Most compliance teams know only a fraction of them.',
    readTime: '12 min read',
  },
]

const UPCOMING = [
  { badge: 'LOS/LMS', title: 'LOS vs LMS — The Integration Gap That Costs NBFCs Crores in RBI Inspection Findings' },
  { badge: 'RBI', title: 'RBI Master Directions 2025 — A Compliance Officer\'s Complete Guide' },
  { badge: 'KYC', title: 'KYC Master Direction 2025 — What Changed and What Your NBFC Must Do Now' },
]

export default function InsightsPage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label">Insights</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '0.75rem' }}>From the Practice</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.8 }}>Practitioner analysis on RBI compliance, DPDPA, Digital Lending, CIC obligations, and BFSI regulatory developments.</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {ARTICLES.map(article => (
              <Link key={article.slug} href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s', display: 'flex', flexDirection: 'column' }} } }>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>{article.badge}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--text-light)' }}>{article.date} · {article.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '0.75rem', fontWeight: 600, lineHeight: 1.4, flex: 1 }}>{article.title}</h2>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{article.excerpt}</p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600 }}>Read Article →</div>
                </article>
              </Link>
            ))}
          </div>

          {/* Upcoming */}
          <div style={{ background: 'var(--navy)', borderRadius: '12px', padding: '2.5rem' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Upcoming Articles</div>
            {UPCOMING.map(a => (
              <div key={a.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.9rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', padding: '0.2rem 0.6rem', borderRadius: '2px', flexShrink: 0 }}>{a.badge}</span>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
