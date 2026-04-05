import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Chelikani Veera Venkata Suresh Babu | Senior BFSI Advisor',
  description: 'Senior BFSI practitioner with 25+ years across Piramal Finance, Axis Bank, HDFC Bank. Designated DPO at Piramal Finance. Expert in RBI compliance, LOS/LMS, DPDPA, and CIC advisory. Mumbai.',
  keywords: ['Chelikani Suresh Babu', 'BFSI advisor Mumbai', 'Piramal Finance DPO', 'Axis Bank credit policy', 'RBI compliance expert India', 'NBFC compliance consultant'],
  alternates: { canonical: 'https://gyaanpravaha.in/about' },
}

const TIMELINE = [
  { period: '2021 – Present', company: 'Piramal Finance', role: 'Executive Vice President — Head, Automation · Securitisation · Data Protection Officer', detail: 'Designated Data Protection Officer — built enterprise DPDPA & GDPR compliance programme. Led LOS/LMS cloud migration, DHFL-PCHFL system integration (150+ branches, Day-1 live), UIDAI eKYC licence (3rd NBFC in India), and ₹5,000 Cr/year DA/PTC securitisation book. Led RBI inspection readiness across the organisation.' },
  { period: '2011 – 2021 · 10 Years', company: 'Axis Bank', role: 'Deputy Vice President — Credit Policy & Process Re-Engineering', detail: 'Managed ₹3,00,000+ Crore retail lending book across 5 product lines. Led credit policy reform, ML-based scorecard implementation, and underwriting automation — achieving 30%+ automation, 50% Operational Risk Index reduction, and credit losses below 1% through 35% volume growth.' },
  { period: '2010 – 2011', company: 'SREI BNP Paribas', role: 'Senior Manager — Equipment Finance & Credit', detail: 'Equipment finance origination, credit appraisal, and post-disbursement monitoring across corporate and MSME segments.' },
  { period: '2007 – 2010', company: 'Reliance Capital', role: 'Manager — Credit & Risk', detail: 'MSME and retail credit assessment, risk monitoring, and portfolio quality management.' },
  { period: '2001 – 2007', company: 'HDFC Bank', role: 'Executive — Retail Lending & Operations', detail: 'Retail lending operations, customer onboarding, and documentation across pan-India branches.' },
]

const CERTS = [
  { year: '2024', title: 'CPD Certified Data Protection Officer', org: 'Alison (CPD)' },
  { year: '2024', title: 'Cyber Frauds & Risk Management for BFSI', org: 'ASCI' },
  { year: '2023', title: 'Harvard Leadership Playbook', org: 'Harvard Business Publishing' },
  { year: '2022', title: 'GRC Professional', org: 'OCEG' },
  { year: '2022', title: 'Cyber Law', org: 'Asian School of Cyber Laws' },
  { year: '2020', title: 'GDPR Practitioner', org: 'ISACA' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">About</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              Chelikani Veera<br />Venkata Suresh Babu
            </h1>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Independent Consultant · Senior BFSI Advisor · Mumbai
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', maxWidth: '580px', marginBottom: '1.5rem' }}>
              Senior financial sector practitioner with over 25 years of hands-on leadership across India's top banking and non-banking financial institutions — at the intersection of lending technology, RBI regulatory compliance, and digital data protection.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem', maxWidth: '580px', marginBottom: '2rem' }}>
              Deep cross-institutional knowledge from Piramal Finance, Axis Bank, HDFC Bank, Reliance Capital, and SREI BNP Paribas.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
              <a href="https://linkedin.com/in/sureshchelikani" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn Profile ↗</a>
            </div>
          </div>
          <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '12px', padding: '2rem', minWidth: '220px', flexShrink: 0 }} className="hide-mobile">
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '2px solid rgba(201,168,76,0.4)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>👤</div>
            {[
              { value: '25+', label: 'Years BFSI' },
              { value: '5', label: 'Institutions' },
              { value: '₹3L+Cr', label: 'Lending Book' },
              { value: '200+', label: 'Securitisations' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700, color: '#c9a84c' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Impact */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Profile</div>
          <h2 className="section-title">Leadership Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 600 }}>Executive Leadership at Piramal Finance</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '2rem' }}>As Executive Vice President and Head – Automation & Re-engineering, Securitisation Operations, and Data Protection Officer at Piramal Finance, led end-to-end process modernisation across lending, risk, and compliance. Spearheaded 200+ securitisation transactions, digitised KYC and onboarding, reduced turnaround times, and ensured zero downtime in lending systems.</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 600 }}>Domain Expertise</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>Strengths include credit underwriting, policy design, risk modelling, and enterprise risk management with deep RBI regulatory knowledge. Defines risk appetite, builds governance councils, and deploys risk registers, control matrices, and audits. Champions AI-driven redesigns for digital lending, rule-based engines, and integrated workflows.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 600 }}>10 Years at Axis Bank</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '2rem' }}>As DVP – Credit Policy & Process Re-engineering, managed ₹3,00,000+ Crore retail lending book across 5 product lines. Led credit policy reform, ML-based scorecard implementation, and underwriting automation — achieving 30%+ automation, 50% Operational Risk Index reduction, and credit losses below 1% through 35% volume growth.</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 600 }}>Recognition & Edge</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>Earned awards for leadership, innovation, and credit excellence across pan-India portfolios. Collaborated with regulators, rating agencies, and technology partners at scale. Certified across data protection, cyber law, GRC, and executive leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--navy)' }}>
        <div className="section-inner">
          <div className="section-label">Career</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '3rem' }}>25 Years. Five Institutions.</h2>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid rgba(201,168,76,0.25)' }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: i < TIMELINE.length - 1 ? '2.5rem' : 0 }}>
                <div style={{ position: 'absolute', left: '-2.4rem', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#c9a84c', border: '2px solid var(--navy)' }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{item.period}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.2rem' }}>{item.company}</div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem', fontStyle: 'italic' }}>{item.role}</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Education & Certifications</div>
          <h2 className="section-title">Qualifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Academic</h3>
              {[
                { year: '2001', title: 'Post Graduate Diploma in Financial Management (PGDFM)', org: 'Ahmedabad Management Association' },
                { year: '1998', title: 'Bachelor of Commerce (B.Com)', org: 'Gujarat University, Ahmedabad' },
              ].map(q => (
                <div key={q.year} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{q.year}</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{q.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{q.org}</div>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Professional Certifications</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {CERTS.map(cert => (
                  <div key={cert.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.08em', flexShrink: 0, paddingTop: '2px' }}>{cert.year}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-dark)' }}>{cert.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{cert.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Work Together</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>Start with a 30-minute discovery call — no obligation, no pitch, just a direct conversation.</p>
          <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
