import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RBI Digital Banking Authorisation 2026 — What Banks Must Do Before the Deadline',
  description: 'From January 2026, banks require explicit RBI authorisation for internet banking, mobile banking, USSD, and SMS channels. New governance standards, eligibility criteria, board-approved restructuring plans, and what it means for NBFCs operating digital lending platforms.',
  keywords: ['RBI digital banking authorisation 2026', 'internet banking RBI framework', 'RBI digital channels compliance', 'mobile banking RBI authorisation', 'digital banking governance RBI', 'NBFC digital lending RBI 2026'],
  alternates: { canonical: 'https://gyaanpravaha.com/insights/rbi-digital-banking-authorisation-2026' },
}

export default function DigitalBankingArticle() {
  return (
    <>
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(59,130,246,0.2)', color: '#93c5fd', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>DIGITAL BANKING</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>May 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>RBI Digital Banking Authorisation 2026 — What Every Bank Must Now Have in Place</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>From January 1, 2026, banks can only offer internet banking, mobile banking, USSD, SMS banking, and other electronic channels if they hold explicit authorisation under RBI's new Digital Banking Channels Authorisation system. The previous fragmented standards are replaced by a unified governance framework.</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2rem' }}>What the New Framework Covers</h2>
          <p style={{ marginBottom: '1.25rem' }}>The Digital Banking Channels Authorisation system covers all electronic delivery channels through which banks interact with customers — internet banking, mobile banking apps, USSD-based banking for feature phones, SMS banking, and any other digital channel. The framework establishes eligibility requirements, governance standards, and ongoing compliance requirements that banks must satisfy to receive and retain authorisation.</p>
          <p style={{ marginBottom: '1.25rem' }}>Banks that were already operating these channels prior to January 1, 2026 are required to obtain authorisation within a specified transition period. New banks or new channel launches require prior RBI authorisation before going live.</p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>Five Governance Requirements for Authorisation</h2>
          {[
            { n: '1', title: 'Board-Approved Digital Banking Policy', desc: 'Banks must have a comprehensive Board-approved policy covering all digital channels — governance structure, risk appetite for digital channels, customer onboarding standards, and escalation protocols for digital incidents.' },
            { n: '2', title: 'Enhanced Authentication Standards', desc: 'Upgraded authentication requirements for digital payments and banking transactions. Multi-factor authentication is mandatory across all channels. Biometric-based authentication is encouraged for high-value transactions.' },
            { n: '3', title: 'Digital Liquidity Risk Management', desc: 'Enhanced liquidity assumptions for digital deposits — recognising that digital deposits can be withdrawn at scale faster than traditional deposits. Stress testing must model digital deposit flight scenarios.' },
            { n: '4', title: 'Ring-Fencing of Core Banking', desc: 'Core banking infrastructure must be ring-fenced from digital channel layers. This has significant implications for banks with monolithic architectures — a separation of concerns that many older core banking systems were not designed for.' },
            { n: '5', title: 'Board-Approved Restructuring Plan', desc: 'Banks that do not currently meet all requirements must prepare a Board-approved restructuring plan by March 31, 2026, with a clear roadmap to full alignment by March 31, 2028.' },
          ].map(item => (
            <div key={item.n} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid #e4ddd0', borderRadius: '8px' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: '#c9a84c', flexShrink: 0, lineHeight: 1 }}>{item.n}</span>
              <div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0d1b2e', fontSize: '1.7rem', marginBottom: '1rem', marginTop: '2.5rem' }}>What This Means for NBFCs Running Digital Lending Platforms</h2>
          <p style={{ marginBottom: '1.25rem' }}>While the Digital Banking Authorisation framework applies directly to banks, NBFCs operating as Lending Service Providers (LSPs) for banks, or running their own digital lending apps, face indirect obligations. Banks that partner with NBFCs for digital customer acquisition and loan origination must ensure their LSP arrangements comply with the new channel governance standards.</p>
          <p style={{ marginBottom: '2rem' }}>NBFCs should review their LSP agreements with partner banks to confirm that their digital channel integrations align with the new framework. Banks will increasingly require NBFCs to meet enhanced data security, authentication, and governance standards as a condition of LSP arrangements.</p>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>Navigating digital banking compliance or LSP governance obligations?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your specific obligations under the new digital banking framework and your LSP arrangement review priorities.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </article>
    </>
  )
}
