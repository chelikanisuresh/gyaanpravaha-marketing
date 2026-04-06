import type { Metadata } from 'next'
import Link from 'next/link'
import HeroAnimation from '@/components/HeroAnimation'
import TestimonialsSection from '@/components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'RBI Compliance Advisory for NBFCs, SFBs & Banks | Gyaan Pravaha',
  description: 'Practitioner-grade BFSI advisory — RBI Master Directions compliance, LOS/LMS technology, DPDPA, CIC obligations. 25+ years across Piramal Finance, Axis Bank, HDFC Bank. Mumbai.',
  alternates: { canonical: 'https://gyaanpravaha.com' },
}

const SERVICES = [
  { icon: '⚖️', practice: 'Practice B', title: 'RBI Regulatory Compliance', desc: 'Master Directions mapping, inspection readiness, KYC/AML, Digital Lending Guidelines, NPA/IRACP alignment.', href: '/services/rbi-compliance' },
  { icon: '⚙️', practice: 'Practice A', title: 'LOS / LMS Technology', desc: 'Lending system architecture, cloud migration, ML scorecards, eKYC, Video KYC, CKYC integration.', href: '/services/los-lms' },
  { icon: '🔒', practice: 'Practice C', title: 'DPDPA / Data Protection', desc: 'DPDPA readiness, DPO programme, consent frameworks, breach notification, vendor data contracts.', href: '/services/dpdpa' },
  { icon: '📊', practice: 'Practice D', title: 'Credit & Institutional', desc: 'Credit policy design, underwriting automation, risk modelling, portfolio quality management.', href: '/services/credit' },
  { icon: '🏦', practice: 'Practice E', title: 'CIC Advisory', desc: '21 RBI CIC circulars, CICRA 2005, bureau submission quality, TUDF/Metro 2, dispute resolution.', href: '/services/cic' },
  { icon: '🎓', practice: 'Practice F', title: 'Corporate Training', desc: 'Practitioner-led programmes — RBI compliance, cyber risk, digital lending, DPDPA. ASCI Guest Faculty.', href: '/services/training' },
]

const STATS = [
  { value: '25+', label: 'Years in BFSI' },
  { value: '₹3L+Cr', label: 'Lending Book at Axis Bank' },
  { value: '200+', label: 'Securitisation Transactions' },
  { value: '26+', label: 'Institutions on ComplianceOS' },
]

const BLOG_POSTS = [
  { badge: 'RBI', title: 'Digital Lending Guidelines Two Years On — Where Most NBFCs Are Still Non-Compliant', href: '/insights/digital-lending-guidelines-nbfc-compliance' },
  { badge: 'DPDPA', title: 'DPDPA 2023 — What Every NBFC Needs to Do Before the Rules Are Notified', href: '/insights/dpdpa-2023-nbfc-compliance-guide' },
  { badge: 'CIC', title: 'The 21 RBI Circulars on Credit Information Every NBFC Compliance Head Must Know', href: '/insights/21-rbi-circulars-credit-information-nbfc' },
]

export default function HomePage() {
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '520px' }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              Independent BFSI Advisor · Mumbai, India
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              RBI Compliance &amp; BFSI Advisory<br />
              <span style={{ color: 'var(--gold)' }}>That Comes From Within.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Practitioner-grade advisory for Banks, NBFCs, and Small Finance Banks — across 6 practice areas and 2 SaaS products.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, marginBottom: '2.5rem' }}>
              <Link href="/contact" className="btn-primary">Book a 30-Min Discovery Call</Link>
              <Link href="/about" className="btn-outline">View Profile</Link>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {[{ val: '25+', lbl: 'Years BFSI' }, { val: '₹3L+Cr', lbl: 'Lending Book' }, { val: '200+', lbl: 'Securitisations' }].map(s => (
                <div key={s.lbl}>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>{s.val}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', marginTop: '2px' }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HeroAnimation />
      </section>

      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border-dark)', padding: '2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' as const }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--gold)' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.75rem' }}>Advisory Practice Areas</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--navy)', marginBottom: '1rem' }}>Six Integrated Practices</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Each draws on direct, institutional experience — not desk research.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(svc => (
              <Link key={svc.href} href={svc.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem', height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{svc.icon}</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>{svc.practice}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.35rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 600 }}>{svc.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' as const }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.75rem' }}>Products</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--navy)', marginBottom: '0.75rem' }}>Built for India's Financial Institutions</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Two SaaS products built from practitioner experience — for compliance management and compliance learning.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '2rem', textAlign: 'left' as const }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Compliance Management</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 700 }}>ComplianceOS</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>731+ mapped RBI obligations, regulatory calendar, circular tracking, audit-ready reporting.</p>
              <Link href="/complianceos" style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--navy)', padding: '0.6rem 1.25rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>Learn More</Link>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '2rem', textAlign: 'left' as const }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Compliance Learning</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 700 }}>Learning</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Online compliance courses — RBI, DPDPA, Digital Lending, KYC/AML, CIC. Certificates included.</p>
              <Link href="/learning" style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--navy)', padding: '0.6rem 1.25rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.75rem' }}>Insights</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--navy)', marginBottom: '2rem' }}>From the Practice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {BLOG_POSTS.map(post => (
              <Link key={post.href} href={post.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.2rem 0.6rem', borderRadius: '2px', marginBottom: '0.75rem' }}>{post.badge}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', color: 'var(--navy)', lineHeight: 1.4, fontWeight: 600 }}>{post.title}</h3>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600 }}>Read →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter subscription */}
      <section style={{ padding: 'clamp(3rem, 5vw, 4rem) 2rem', background: 'rgba(201,168,76,0.05)', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>Regulatory Intelligence</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--navy)', marginBottom: '0.75rem' }}>Stay Ahead of RBI Circulars</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            New regulatory analysis delivered to your inbox — whenever a material RBI circular or amendment is published. No noise. No marketing. Just the compliance intelligence your institution needs.
          </p>
          <form
            action="https://formspree.io/f/gyaanpravaha"
            method="POST"
            style={{ display: 'flex', gap: '0.75rem', maxWidth: '460px', margin: '0 auto', flexWrap: 'wrap' as const }}
          >
            <input
              type="email"
              name="email"
              placeholder="your@institution.com"
              required
              style={{
                flex: 1, minWidth: '200px', padding: '0.75rem 1rem',
                border: '1px solid var(--border)', borderRadius: '4px',
                fontFamily: 'inherit', fontSize: '0.9rem',
                background: '#fff', color: 'var(--navy)', outline: 'none',
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' as const }}>
              Subscribe →
            </button>
          </form>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.75rem' }}>
            No spam. Unsubscribe anytime. Sent only when material regulatory changes occur.
          </p>
        </div>
      </section>

      <TestimonialsSection />

      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem', textAlign: 'center' as const }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}>Start with a Conversation.</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            A 30-minute discovery call is all it takes to identify which practice areas are most relevant to your institution.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Book a Free 30-Min Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
