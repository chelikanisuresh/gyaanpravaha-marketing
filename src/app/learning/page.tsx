import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gyaan Pravaha Learning — RBI Compliance Courses for BFSI',
  description: 'Online learning platform for Banks, NBFCs, and SFBs — RBI compliance courses, DPDPA training, Digital Lending Guidelines, KYC/AML, CIC obligations. Practitioner-built, exam-ready.',
  keywords: ['NBFC compliance online course', 'RBI compliance training India', 'BFSI e-learning', 'DPDPA training online', 'KYC AML course NBFC', 'credit compliance certification India'],
  alternates: { canonical: 'https://gyaanpravaha.in/learning' },
  openGraph: {
    title: 'Gyaan Pravaha Learning — RBI Compliance Courses for BFSI',
    description: 'Online learning platform for Banks, NBFCs, and SFBs — practitioner-built compliance courses.',
    url: 'https://gyaanpravaha.in/learning',
  },
}

const COURSES = [
  { icon: '⚖️', badge: 'RBI', title: 'RBI Master Directions 2025 — Complete Compliance Programme', level: 'Intermediate', duration: '8 hours', modules: 12 },
  { icon: '🔒', badge: 'DPDPA', title: 'DPDPA 2023 for Financial Institutions — Practitioner Certificate', level: 'Intermediate', duration: '6 hours', modules: 9 },
  { icon: '💻', badge: 'Digital Lending', title: 'Digital Lending Guidelines — LSP, FLDG, KFS Compliance', level: 'Foundation', duration: '4 hours', modules: 6 },
  { icon: '🏦', badge: 'KYC/AML', title: 'KYC, AML & CFT — Master Direction 2025 Aligned', level: 'Intermediate', duration: '5 hours', modules: 8 },
  { icon: '📊', badge: 'CIC', title: 'Credit Information & CICRA Compliance — All 21 RBI Circulars', level: 'Advanced', duration: '6 hours', modules: 10 },
  { icon: '🛡️', badge: 'Cyber Risk', title: 'Enterprise Cyber Risk Management for BFSI', level: 'Intermediate', duration: '5 hours', modules: 7 },
]

const FEATURES = [
  { icon: '🎓', title: 'Practitioner-Built', desc: 'Every course built by someone who has executed these compliance obligations inside regulated institutions — not consultants or trainers.' },
  { icon: '📋', title: 'Regulation-Linked', desc: 'Course content is linked directly to RBI circulars, Master Directions, and statutory provisions — not generic summaries.' },
  { icon: '✅', title: 'Assessment & Certificate', desc: 'End-of-module assessments with certificates of completion — valid for CPD/CPE credit.' },
  { icon: '🏛', title: 'Institution Dashboard', desc: 'Track your team\'s course completion, assessment scores, and compliance training calendar from one dashboard.' },
]

export default function LearningPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '0.3rem 1rem', fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Product by Gyaan Pravaha
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Gyaan Pravaha<br />
              <span style={{ color: '#c9a84c' }}>Learning</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.8, marginBottom: '2rem' }}>
              Online compliance learning for Banks, NBFCs, SFBs, and HFCs — practitioner-built courses on RBI regulations, DPDPA, Digital Lending, KYC/AML, and CIC obligations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://gyaanpravaha-web.vercel.app/login" style={{
                display: 'inline-block', background: '#c9a84c', color: '#0d1b2e',
                padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700,
                fontSize: '0.95rem', letterSpacing: '0.05em', textDecoration: 'none',
              }}>
                Access Learning Platform →
              </a>
              <Link href="/contact" style={{
                display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.75)',
                padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 600,
                fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none',
              }}>
                Request Institution Access
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flexShrink: 0 }} className="hide-mobile">
            {[
              { value: '6+', label: 'Courses' },
              { value: '50+', label: 'Hours of Content' },
              { value: '100%', label: 'RBI Aligned' },
              { value: '🏆', label: 'Certificates' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#c9a84c' }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginTop: '0.25rem', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why different */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'rgba(201,168,76,0.04)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2rem' }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.3rem' }}>{f.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course listing */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Current Courses</div>
          <h2 className="section-title">Available Programmes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {COURSES.map(course => (
              <div key={course.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem', transition: 'box-shadow 0.2s' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{course.icon}</span>
                  <span style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>{course.badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 600, lineHeight: 1.4 }}>{course.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                  {[
                    { label: course.level },
                    { label: course.duration },
                    { label: `${course.modules} modules` },
                  ].map(tag => (
                    <span key={tag.label} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(13,27,46,0.45)', letterSpacing: '0.08em' }}>{tag.label}</span>
                  ))}
                </div>
                <a href="https://gyaanpravaha-web.vercel.app/login" style={{
                  display: 'inline-block', fontSize: '0.82rem', color: 'var(--gold)',
                  fontWeight: 600, textDecoration: 'none',
                }}>
                  Enrol Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution CTA */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">For Institutions</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Deploy Compliance Learning Across Your Team</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Institution admins get a dedicated dashboard to assign courses, track completion, monitor assessment scores, and generate compliance training reports for internal audit and board reporting.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://gyaanpravaha-web.vercel.app/login" style={{ display: 'inline-block', background: '#c9a84c', color: '#0d1b2e', padding: '0.8rem 1.8rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Access Platform</a>
                <Link href="/contact" style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '0.8rem 1.8rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}>Request Demo</Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                '✓ Assign courses to specific teams or roles',
                '✓ Track completion % per employee',
                '✓ Assessment scores and pass/fail status',
                '✓ Compliance training calendar integration',
                '✓ Downloadable certificates per employee',
                '✓ Board-ready compliance training report',
              ].map(item => (
                <div key={item} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
