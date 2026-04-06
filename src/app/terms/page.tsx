import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use — Gyaan Pravaha',
  description: 'Terms of Use for gyaanpravaha.com and the ComplianceOS platform.',
  robots: { index: false },
}

export default function TermsPage() {
  const sections = [
    { title: '1. Acceptance of Terms', body: 'By accessing gyaanpravaha.com or using the ComplianceOS platform, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website or platform.' },
    { title: '2. Nature of Content', body: "The content on this website — including insight articles, regulatory summaries, and practice area descriptions — is provided for informational and educational purposes only. It does not constitute legal, compliance, or professional advice. You should not act on any information on this site without seeking qualified professional advice specific to your institution's circumstances." },
    { title: '3. Intellectual Property', body: 'All content on gyaanpravaha.com — including articles, regulatory analysis, the ComplianceOS platform, the Learning platform, and all associated materials — is the intellectual property of Gyaan Pravaha. You may not reproduce, distribute, or republish any content without prior written permission.' },
    { title: '4. ComplianceOS Platform', body: 'Access to the ComplianceOS platform is subject to a separate subscription agreement. Institution admins are responsible for ensuring authorised use within their organisation. Gyaan Pravaha reserves the right to suspend access for breach of terms or non-payment.' },
    { title: '5. Accuracy of Regulatory Content', body: 'While we make every effort to keep regulatory content accurate and up to date, the RBI issues circulars, amendments, and Master Directions continuously. Gyaan Pravaha does not warrant that all content reflects the most current regulatory position. Always verify compliance obligations against primary RBI sources.' },
    { title: '6. Limitation of Liability', body: 'To the maximum extent permitted by applicable law, Gyaan Pravaha shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or the ComplianceOS platform.' },
    { title: '7. Governing Law', body: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.' },
    { title: '8. Contact', body: 'For queries regarding these Terms: suresh@gyaanpravaha.com' },
  ]
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 6vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label">Legal</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Terms of Use</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>Last updated: April 6, 2026</p>
        </div>
      </section>
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {sections.map(s => (
            <div key={s.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{s.title}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>{s.body}</p>
            </div>
          ))}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
