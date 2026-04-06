import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleEnhancements from '@/components/ArticleEnhancements'

export const metadata: Metadata = {
  title: 'NBFC Type I Unregistered — Should Your NBFC Surrender Its RBI Certificate of Registration?',
  description: 'RBI\'s April 2026 amendment creates a new category of NBFCs exempt from mandatory registration — entities with no public funds and no customer interface. The CoR surrender window is open till September 30, 2026 via PRAVAAH. Who qualifies, the auditor certification requirement, and the compliance risks.',
  keywords: ['NBFC unregistered 2026', 'surrender certificate of registration RBI', 'NBFC exempt registration', 'PRAVAAH RBI CoR surrender', 'NBFC Type 1 unregistered', 'RBI NBFC deregistration 2026'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/nbfc-unregistered-type-1-cor-surrender-2026' },
}

export default function NBFCUnregisteredArticle() {
  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "NBFC Type I Unregistered \u2014 Should Your NBFC Surrender Its RBI Certificate of Registration?", "author": {"@type": "Person", "name": "Chelikani Veera Venkata Suresh Babu", "url": "https://gyaanpravaha.com/about"}, "publisher": {"@type": "Organization", "name": "Gyaan Pravaha", "url": "https://gyaanpravaha.com"}, "datePublished": "2026-04-06", "dateModified": "2026-04-06", "mainEntityOfPage": "https://gyaanpravaha.com/insights/nbfc-unregistered-type-1-cor-surrender-2026"}) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>SBR</span>
            <span style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DEADLINE: SEP 30, 2026</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>June 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>NBFC Type I Unregistered — Should Your NBFC Surrender Its RBI Certificate of Registration?</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>RBI's April 2026 Amendment Directions introduce a new category — NBFCs that neither access public funds nor have any customer interface are now exempt from mandatory registration under Section 45-IA of the RBI Act. Eligible entities have a one-time window to surrender their CoR by September 30, 2026.</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>The Two Eligibility Criteria — Both Must Be Met</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {[
              { title: 'No Public Funds', desc: 'The entity does not borrow from banks, issue debentures, accept deposits, or access any other form of public money. It operates purely on internal / promoter capital.' },
              { title: 'No Customer Interface', desc: 'The entity has no direct interaction with retail customers or borrowers. It does not originate loans, sell financial products, or engage in any customer-facing financial activity.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px', padding: '1.5rem', borderLeft: '3px solid #c9a84c' }}>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{c.title}</div>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: '1.25rem' }}>The most common type of entity that qualifies is a family office or group investment vehicle — a company that invests internal capital in group companies, bank deposits, government securities, or bonds, without accessing any external funds and without having any borrower or customer relationship.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>The Surrender Process — What Is Required</h2>
          {[
            { step: 'Step 1 — Board Resolution', desc: 'The Board must pass a resolution confirming that the entity (a) meets the no-public-funds and no-customer-interface criteria, (b) has no intention to access public funds or engage in customer-facing activity, and (c) undertakes to disclose its status as an Unregistered Type I NBFC in all relevant communications.' },
            { step: 'Step 2 — Auditor Certification', desc: 'Three years of audited financial statements must be submitted, along with an auditor\'s certification of the entity\'s status with respect to public funds and customer interface for each of those three years. This is the critical compliance safeguard — RBI is relying on the auditor\'s independent verification.' },
            { step: 'Step 3 — PRAVAAH Portal Application', desc: 'The application is submitted through RBI\'s PRAVAAH portal. Physical surrender of the Certificate of Registration is also required — the original CoR must be submitted to RBI.' },
            { step: 'Step 4 — Post-Deregistration Obligations', desc: 'Even after surrendering the CoR, the entity must continue to disclose its Unregistered Type I NBFC status. If circumstances change — if the entity later accesses public funds or acquires a customer interface — it must register with RBI immediately. Operating without registration when required is a serious violation.' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px' }}>
              <div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{s.step}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Why This Is Not Always the Right Decision</h2>
          <p style={{ marginBottom: '1.25rem' }}>Surrendering the CoR is a one-way decision in practice. Reacquiring an NBFC registration involves the full application process — minimum Net Owned Fund requirements, fit and proper certification, business plan approval, and RBI scrutiny. Entities that might access public funds or launch customer-facing products in the foreseeable future should be cautious.</p>
          <p style={{ marginBottom: '2rem' }}>There is also a regulatory arbitrage risk that RBI has flagged: entities could structure their activities to qualify as Unregistered Type I at year-end while effectively conducting regulated financial activities during the year. RBI has signalled that it will monitor for such patterns, and the consequences of being found to have violated the criteria after deregistration are severe.</p>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e4ddd0' }}>
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>Related Articles</div>
              <a href="/insights/rbi-scale-based-regulation-middle-upper-layer-nbfc" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>RBI Scale-Based Regulation — Middle and Upper Layer NBFCs</div>
              </a>              <a href="/insights/nbfc-npa-90-days-base-layer-2026" style={{ display: 'block', textDecoration: 'none', padding: '0.75rem 1rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: '2px', background: 'rgba(201,168,76,0.1)', color: '#c9a84c', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>SBR</span>
                <div style={{ fontSize: '0.88rem', color: '#0d1b2e', fontWeight: 500, lineHeight: 1.4 }}>90-Day NPA Classification — What Every Base Layer NBFC Must Do Now</div>
              </a>
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Evaluating whether your entity qualifies to surrender its CoR?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A structured eligibility assessment will confirm whether your entity meets both criteria, the risks of deregistration, and whether it is the right strategic decision before the September 2026 window closes.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
