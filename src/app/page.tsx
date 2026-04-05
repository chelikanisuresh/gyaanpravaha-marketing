import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RBI Compliance Advisory for NBFCs, SFBs & Banks | Gyaan Pravaha',
  description: 'Practitioner-grade BFSI advisory — RBI Master Directions compliance, LOS/LMS technology, DPDPA, CIC obligations. 25+ years across Piramal Finance, Axis Bank, HDFC Bank. Mumbai.',
  alternates: { canonical: 'https://gyaanpravaha.in' },
  openGraph: {
    title: 'RBI Compliance Advisory for NBFCs, SFBs & Banks | Gyaan Pravaha',
    description: 'Practitioner-grade BFSI advisory — not desk research. 25+ years across India\'s top financial institutions.',
    url: 'https://gyaanpravaha.in',
  },
}

const SERVICES = [
  { icon: '⚖️', practice: 'Practice B', title: 'RBI Regulatory Compliance', desc: 'Master Directions mapping, inspection readiness, KYC/AML, Digital Lending Guidelines, NPA/IRACP alignment.', href: '/services/rbi-compliance', keywords: ['RBI compliance', 'Master Directions', 'NBFC regulatory'] },
  { icon: '⚙️', practice: 'Practice A', title: 'LOS / LMS Technology', desc: 'Lending system architecture, cloud migration, ML scorecards, eKYC, Video KYC, CKYC integration.', href: '/services/los-lms', keywords: ['LOS advisory', 'LMS migration', 'lending technology'] },
  { icon: '🔒', practice: 'Practice C', title: 'DPDPA / Data Protection', desc: 'DPDPA readiness, DPO programme, consent frameworks, breach notification, vendor data contracts.', href: '/services/dpdpa', keywords: ['DPDPA compliance', 'Data Protection Officer', 'data privacy India'] },
  { icon: '📊', practice: 'Practice D', title: 'Credit & Institutional', desc: 'Credit policy design, underwriting automation, risk modelling, portfolio quality management.', href: '/services/credit', keywords: ['credit advisory', 'underwriting', 'risk management'] },
  { icon: '🏦', practice: 'Practice E', title: 'CIC Advisory', desc: '21 RBI CIC circulars, CICRA 2005, bureau submission quality, TUDF/Metro 2, dispute resolution.', href: '/services/cic', keywords: ['CIC advisory', 'CICRA compliance', 'credit bureau'] },
  { icon: '🎓', practice: 'Practice F', title: 'Corporate Training', desc: 'Practitioner-led programmes — RBI compliance, cyber risk, digital lending, DPDPA. ASCI Guest Faculty.', href: '/services/training', keywords: ['BFSI training', 'RBI compliance training', 'NBFC training'] },
]

const STATS = [
  { value: '25+', label: 'Years in BFSI' },
  { value: '₹3L+Cr', label: 'Lending Book Managed at Axis Bank' },
  { value: '200+', label: 'Securitisation Transactions at Piramal' },
  { value: '3rd', label: 'NBFC in India — UIDAI eKYC Licence' },
]

const INSTITUTIONS = ['Piramal Finance', 'Axis Bank', 'HDFC Bank', 'Reliance Capital', 'SREI BNP Paribas']

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Independent BFSI Advisor · Mumbai, India
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              RBI Compliance &<br/>BFSI Advisory<br />
              <span style={{ color: '#c9a84c' }}>That Comes From Within.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', lineHeight: 1.8, marginBottom: '2rem' }}>
              Practitioner-grade advisory for Banks, NBFCs, and Small Finance Banks — across lending technology, RBI compliance, data protection, credit, and CIC obligations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['RBI Inspection Ready', 'DPDPA Compliant', 'Digital Lending', 'KYC / AML', 'CIC / CICRA'].map(tag => (
                <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.8)', border: '1px solid rgba(201,168,76,0.25)', padding: '0.3rem 0.8rem', borderRadius: '2px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book a 30-Min Discovery Call</Link>
              <Link href="/about" className="btn-outline">View Profile</Link>
            </div>
          </div>

          {/* Profile card */}
          <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center', minWidth: '200px', flexShrink: 0 }} className="hide-mobile">
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.4)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👤</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, color: '#c9a84c', lineHeight: 1.3, marginBottom: '0.4rem' }}>Chelikani Veera<br />Venkata Suresh Babu</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Independent Consultant<br />Senior BFSI Advisor</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border-dark)', padding: '2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#c9a84c' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSTITUTIONS ── */}
      <section style={{ background: 'var(--navy)', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-dark)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', flexShrink: 0 }}>Institutional Experience</span>
          {INSTITUTIONS.map(inst => (
            <span key={inst} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>{inst}</span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Advisory Practice Areas</div>
          <h2 className="section-title">Six Integrated Practices</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Each draws on direct, institutional experience — not desk research. The six practices are deliberately integrated because your LOS, your RBI compliance posture, and your CIC obligations are inseparable.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(svc => (
              <Link key={svc.href} href={svc.href} style={{ textDecoration: 'none', display: 'block' }}>
                <article style={{
                  background: '#fff', border: '1px solid var(--border)', borderRadius: '8px',
                  padding: '2rem', height: '100%', transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 8px 32px rgba(13,27,46,0.1)'; el.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'none' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} />
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{svc.icon}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{svc.practice}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '0.75rem', fontWeight: 600 }}>{svc.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{svc.desc}</p>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {svc.keywords.map(kw => (
                      <span key={kw} style={{ fontSize: '0.65rem', color: 'rgba(13,27,46,0.4)', fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em' }}>{kw}</span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">Who I Am</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '1.5rem' }}>Not a Desk Consultant.<br />A Practitioner.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                I have operated at the intersection of three disciplines that are now inseparable for every NBFC and SFB: lending technology, RBI regulatory compliance, and digital data protection. As the designated Data Protection Officer at Piramal Finance, I built the enterprise-wide DPDPA and GDPR compliance programme from the ground up.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Every recommendation I make has been personally executed inside a regulated institution — not theorised from a conference room. That is the difference.
              </p>
              <Link href="/about" className="btn-primary">View Full Profile</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🏛', label: 'Designated DPO', sub: 'Piramal Finance — built DPDPA programme from ground up' },
                { icon: '🏦', label: '10 Years Axis Bank', sub: 'DVP — ₹3L+ Crore retail lending book' },
                { icon: '📋', label: 'RBI Inspection Led', sub: 'Organisation-wide readiness at Piramal Finance' },
                { icon: '🎓', label: 'ASCI Guest Faculty', sub: 'Cholamandalam, enterprise cyber risk training 2026' },
              ].map(card => (
                <div key={card.label} style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.4rem' }}>{card.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCEOS CTA ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-label">Product</div>
          <h2 className="section-title">Introducing ComplianceOS</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.7 }}>
            The complete RBI compliance management platform for NBFCs and financial institutions — obligation register, regulatory calendar, circular tracking, and audit-ready reporting. Built from practitioner experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/complianceos" className="btn-primary">Learn About ComplianceOS</Link>
            <Link href="/contact" className="btn-outline" style={{ color: 'var(--navy)', borderColor: 'rgba(13,27,46,0.3)' }}>Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS TEASER ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Insights</div>
          <h2 className="section-title">From the Practice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { badge: 'RBI', title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant', href: '/insights/digital-lending-guidelines-nbfc-compliance' },
              { badge: 'DPDPA', title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified', href: '/insights/dpdpa-2023-nbfc-compliance-guide' },
              { badge: 'CIC', title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know', href: '/insights/21-rbi-circulars-credit-information-nbfc' },
            ].map(post => (
              <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
                <article style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(13,27,46,0.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}>
                  <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.2rem 0.6rem', borderRadius: '2px', marginBottom: '0.75rem' }}>{post.badge}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.4, fontWeight: 600 }}>{post.title}</h3>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600 }}>Read →</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}>Start with a Conversation.</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            A 30-minute discovery call is all it takes to identify which practice areas are most relevant to your institution's current priorities.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Book a Free 30-Min Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
