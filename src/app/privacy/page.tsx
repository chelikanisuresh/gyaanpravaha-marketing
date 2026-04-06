import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Gyaan Pravaha',
  description: 'Privacy Policy for gyaanpravaha.com and the ComplianceOS platform.',
  robots: { index: false },
}

export default function PrivacyPage() {
  const sections = [
    { title: '1. Information We Collect', body: 'When you submit the contact form on this website, we collect your name, institution name, email address, phone number, and the message you provide. We do not collect any information automatically beyond standard web analytics (Google Analytics 4), which tracks page views and session data in aggregate.' },
    { title: '2. How We Use Your Information', body: 'Information submitted via the contact form is used solely to respond to your enquiry and schedule advisory calls. We do not use your information for marketing, sell it to third parties, or share it with any party other than those directly involved in delivering our advisory services.' },
    { title: '3. Data Storage', body: 'Contact form submissions are received via email through Resend (resend.com). We do not store form submissions in a separate database. Email data is retained in accordance with standard email retention practices.' },
    { title: '4. Cookies & Analytics', body: 'This website uses Google Analytics 4 to understand how visitors use the site. GA4 uses cookies to track page views, session duration, and traffic sources. No personally identifiable information is collected via analytics. You can opt out using the Google Analytics Opt-out Browser Add-on.' },
    { title: '5. ComplianceOS Platform', body: 'Users of the ComplianceOS platform are subject to a separate data processing agreement. Institution data entered into ComplianceOS is stored in our Supabase database and is not shared with any third party.' },
    { title: '6. Your Rights', body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at suresh@gyaanpravaha.com. We will respond within 30 days.' },
    { title: '7. Contact', body: 'For privacy-related queries: Chelikani Veera Venkata Suresh Babu, Gyaan Pravaha, Mumbai, India. Email: suresh@gyaanpravaha.com. Phone: +91-9833823262.' },
  ]
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 6vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-label">Legal</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '0.75rem' }}>Privacy Policy</h1>
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
