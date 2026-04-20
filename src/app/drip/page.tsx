import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DRIP — Data Risk Intelligence Platform | Gyaan Pravaha',
  description: 'DRIP scans every branch machine for personal data — Aadhaar, PAN, bank accounts — and gives your CISO audit-grade evidence for DPDPA compliance. On-premise, VAPT-clean, built for Indian financial institutions.',
}

const FEATURES = [
  {
    icon: '🔍',
    title: 'PII Discovery Engine',
    desc: 'Detects Aadhaar, PAN, passport, bank accounts, credit cards, mobile numbers, email addresses — across every file on every branch machine. Nightly scans at 1:00 AM IST.'
  },
  {
    icon: '🔒',
    title: 'Evidence Locker',
    desc: 'Tamper-proof file retrieval with SHA256 hash verification. Chain of custody documentation for RBI inspections, DPDPA audits, and legal proceedings.'
  },
  {
    icon: '📦',
    title: 'Data Warehouse',
    desc: 'Auto-push compliance data to your institution\'s DMS via SFTP, S3, or Webhook. Confirmation token system ensures no compliance data is ever lost silently.'
  },
  {
    icon: '📊',
    title: 'Compliance Reports',
    desc: 'PII Discovery Report, Branch Summary, Scan Activity, Evidence Report — in PDF and CSV. Ready for regulatory submission or CISO review.'
  },
  {
    icon: '🛡️',
    title: 'VAPT-Clean Security',
    desc: 'All 13 findings remediated before v1.0.0 release. bcrypt hashing, JWT blacklisting, brute force protection, security headers, encrypted storage at rest.'
  },
  {
    icon: '🏢',
    title: 'On-Premise Only',
    desc: 'Your data never leaves your network. DRIP runs entirely on your server — no cloud dependency, no data residency concerns, full control for your IT team.'
  },
]

const PII_TYPES = [
  'Aadhaar Number', 'PAN Card', 'Passport Number', 'Driving Licence',
  'Bank Account Number', 'IFSC Code', 'Credit / Debit Card (Luhn validated)',
  'Mobile Number (Indian format)', 'Email Address', 'Date of Birth',
  'Name + Identifier combinations', 'Biometric ID references',
]

const DPDPA_SECTIONS = [
  { section: 'Section 4', title: 'Grounds for Processing', desc: 'Discovers PII in unexpected locations — identifies data with no lawful basis' },
  { section: 'Section 8(3)', title: 'Data Retention', desc: 'Flags files exceeding retention limits — generates disposal decision reports' },
  { section: 'Section 8(7)', title: 'Security Safeguards', desc: 'Identifies PII in insecure locations — provides evidence for security audits' },
  { section: 'Section 11', title: 'Notice to Data Principals', desc: 'Locates all files for any individual — supports right to access requests' },
  { section: 'Section 12', title: 'Right of Access', desc: 'Chain of custody evidence packages with SHA256 verification' },
  { section: 'Section 13', title: 'Right to Erasure', desc: 'Finds all PII locations — post-erasure delta scans verify deletion' },
]

const TIERS = [
  {
    id: 'starter',
    name: 'Branch Starter',
    price: '₹2.5L',
    period: '/year',
    assets: '50 assets',
    branches: '5 branches',
    warehouse: 'File Download',
    support: 'Email (48hr)',
    target: 'Small co-operative banks, microfinance institutions, small NBFCs',
    highlight: false,
  },
  {
    id: 'regional',
    name: 'Regional',
    price: '₹7.5L',
    period: '/year',
    assets: '500 assets',
    branches: '25 branches',
    warehouse: 'SFTP + S3 + Webhook',
    support: 'Email + Phone (24hr)',
    target: 'Mid-size NBFCs, urban co-operative banks, small private banks',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '₹20L',
    period: '/year',
    assets: 'Unlimited',
    branches: 'Unlimited',
    warehouse: 'All modes + Direct DB',
    support: 'Dedicated account manager',
    target: 'Large private banks, PSU banks, large NBFCs, SFBs',
    highlight: false,
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Install DRIP Server', desc: 'Run the installer on your central server. License key validates against our API. Takes ~5 minutes.' },
  { step: '02', title: 'Deploy Agents', desc: 'Install lightweight DRIP Agent on each branch machine via GPP/SCCM or manual install. No internet required after activation.' },
  { step: '03', title: 'Automatic Scanning', desc: 'DRIP scans all branch machines every night at 1:00 AM IST. Delta scans for efficiency — only changed files on subsequent runs.' },
  { step: '04', title: 'Review Dashboard', desc: 'Open DRIP Dashboard at http://server-ip:3001. Browse all PII findings by branch, severity, file type, or PII category.' },
  { step: '05', title: 'Evidence & Reports', desc: 'Retrieve files to Evidence Locker with chain of custody. Generate DPDPA compliance reports. Auto-push to your data warehouse.' },
]

export default function DRIPPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#c9a84c', color: '#0d1b2e', fontWeight: 800, fontSize: 13, padding: '5px 14px', borderRadius: 4, letterSpacing: 3 }}>DRIP</div>
            <div style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c', fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: 4, letterSpacing: 2 }}>DPDPA COMPLIANCE · ON-PREMISE</div>
            <div style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80', fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: 4, letterSpacing: 2 }}>VAPT CLEAN v1.0.0</div>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: 700 }}>
            Data Risk Intelligence<br />
            <span style={{ color: '#c9a84c' }}>Platform</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1rem', maxWidth: 580 }}>
            DRIP scans every branch machine for personal data — Aadhaar, PAN, bank accounts, credit cards — and gives your CISO audit-grade evidence for DPDPA compliance.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 540 }}>
            Runs entirely on your server. Your data never leaves your network. Built specifically for Indian financial institutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.95rem' }}>Request a Demo</Link>
            <a href="https://app.gyaanpravaha.com/login" className="btn-outline" style={{ fontSize: '0.95rem' }}>Institution Login ↗</a>
          </div>
        </div>

        {/* Background grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at 80% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      </section>

      {/* What DRIP detects */}
      <section style={{ background: '#0f172a', padding: 'clamp(3rem, 5vw, 4rem) 2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: 'monospace' }}>PII Detection</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '0.75rem' }}>Every Category of Personal Data</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: 520 }}>DRIP detects all personal data categories defined under DPDPA 2023 — across every file format on every branch machine.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {PII_TYPES.map(p => (
              <span key={p} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 4, letterSpacing: 0.5 }}>{p}</span>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
            Three severity levels: <span style={{ color: '#ef4444', fontWeight: 600 }}>High</span> (direct identifiers) · <span style={{ color: '#f59e0b', fontWeight: 600 }}>Medium</span> (combinable data) · <span style={{ color: '#64748b', fontWeight: 600 }}>Low</span> (indirect data)
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem, 6vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Deployment</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--navy)', marginBottom: '0.75rem' }}>Up and Running in Under an Hour</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', maxWidth: 520 }}>No cloud configuration. No complex enterprise setup. Just download, install, and DRIP starts scanning tonight.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {HOW_IT_WORKS.map(h => (
              <div key={h.step} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '1.75rem' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.25)', lineHeight: 1, marginBottom: '0.75rem' }}>{h.step}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{h.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#fff', padding: 'clamp(3rem, 6vw, 6rem) 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Capabilities</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--navy)', marginBottom: '0.75rem' }}>Built for CISO-Grade Compliance</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', maxWidth: 520 }}>Every feature designed for the specific requirements of RBI-regulated institutions under DPDPA 2023.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 10, padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.5rem', fontWeight: 600 }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPDPA Mapping */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: 'monospace' }}>Regulatory Alignment</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', marginBottom: '0.75rem' }}>DPDPA 2023 — Section by Section</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: '3rem', maxWidth: 560 }}>DRIP directly addresses the data discovery obligations that form the foundation of DPDPA compliance for financial institutions.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
            {DPDPA_SECTIONS.map(d => (
              <div key={d.section} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '1.5rem' }}>
                <div style={{ fontSize: '0.65rem', color: '#c9a84c', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{d.section}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>{d.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
            Full DPDPA compliance mapping document available for CISO review. VAPT executive summary available on request. Contact <a href="mailto:suresh@gyaanpravaha.com" style={{ color: '#c9a84c' }}>suresh@gyaanpravaha.com</a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--cream)', padding: 'clamp(3rem, 6vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pricing</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--navy)', marginBottom: '0.75rem' }}>Three Tiers. One Year. On-Premise.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '3rem', maxWidth: 520 }}>Annual subscription. All tiers include Evidence Locker, compliance reports, and the full DRIP installer package.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {TIERS.map(t => (
              <div key={t.id} style={{ background: t.highlight ? 'var(--navy)' : '#fff', border: `2px solid ${t.highlight ? '#c9a84c' : 'var(--border)'}`, borderRadius: 12, padding: '2rem', position: 'relative' }}>
                {t.highlight && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#c9a84c', color: '#0d1b2e', fontSize: 10, fontWeight: 800, padding: '4px 16px', borderRadius: 20, letterSpacing: 2, whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
                <div style={{ fontSize: '0.7rem', color: t.highlight ? 'rgba(201,168,76,0.7)' : 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: t.highlight ? '#c9a84c' : 'var(--navy)' }}>{t.price}</span>
                  <span style={{ fontSize: '0.85rem', color: t.highlight ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)' }}>{t.period}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: t.highlight ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{t.target}</p>
                <div style={{ borderTop: `1px solid ${t.highlight ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`, paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    ['Assets', t.assets],
                    ['Branches', t.branches],
                    ['Data Warehouse', t.warehouse],
                    ['Support', t.support],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: t.highlight ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)' }}>{label}</span>
                      <span style={{ fontWeight: 600, color: t.highlight ? '#fff' : 'var(--navy)' }}>{value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ display: 'block', marginTop: '1.5rem', textAlign: 'center', background: t.highlight ? '#c9a84c' : 'transparent', color: t.highlight ? '#0d1b2e' : 'var(--navy)', border: `2px solid ${t.highlight ? '#c9a84c' : 'var(--border)'}`, padding: '0.75rem', borderRadius: 6, fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: 0.5 }}>
                  Request Pricing
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '1.5rem 2rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>Add-ons</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                ['Extra 100 assets', '₹50K/year'],
                ['Extra 10 branches', '₹75K/year'],
                ['Custom report templates', '₹1L one-time'],
                ['On-site VAPT report', '₹2L one-time'],
              ].map(([label, price]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture note */}
      <section style={{ background: '#fff', padding: 'clamp(2rem, 4vw, 4rem) 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Architecture</div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--navy)', marginBottom: '1rem' }}>Your Network. Your Data. Your Control.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>DRIP Server installs on your central server. DRIP Agents install on branch machines. Everything communicates internally — no data ever leaves your network.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>Available as on-premise installer (Windows, Linux, macOS) or AWS CloudFormation template for institutions already on AWS.</p>
            </div>
            <div style={{ background: 'var(--navy)', borderRadius: 12, padding: '1.5rem', fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
              <div style={{ color: '#c9a84c', marginBottom: '0.5rem', fontSize: 11, letterSpacing: 2 }}>ARCHITECTURE</div>
              <div>🏦 Financial Institution</div>
              <div style={{ paddingLeft: '1rem' }}>├── 🖥️ DRIP Server (central)</div>
              <div style={{ paddingLeft: '1rem' }}>│   ├── Dashboard :3001</div>
              <div style={{ paddingLeft: '1rem' }}>│   ├── API :8000</div>
              <div style={{ paddingLeft: '1rem' }}>│   └── PostgreSQL + Redis</div>
              <div style={{ paddingLeft: '1rem' }}>├── 💻 Agent — Branch 1</div>
              <div style={{ paddingLeft: '1rem' }}>├── 💻 Agent — Branch 2</div>
              <div style={{ paddingLeft: '1rem' }}>└── 💻 Agent — Branch N</div>
              <div style={{ marginTop: '0.5rem', color: 'rgba(201,168,76,0.5)', fontSize: 11 }}>No internet access required after activation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 6rem) 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 4, padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: 10, color: '#c9a84c', fontWeight: 700, letterSpacing: 2 }}>DETECT · REPORT · INVESTIGATE · PROVE</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1rem' }}>Know Exactly What Personal Data Your Institution Holds.</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>Book a 30-minute demo. See DRIP scan a live server, generate a PII report, and retrieve evidence with full chain of custody.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>Book a Demo</Link>
            <a href="mailto:suresh@gyaanpravaha.com" className="btn-outline" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>Email Directly ↗</a>
          </div>
        </div>
      </section>
    </div>
  )
}
