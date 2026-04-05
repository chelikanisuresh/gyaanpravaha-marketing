'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--border-dark)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem' }}>Gyaan Pravaha</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>BFSI Advisory</div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>Practitioner-grade advisory for Banks, NBFCs, and Small Finance Banks — Mumbai, India.</p>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</div>
            {[
              { href: '/services/rbi-compliance', label: 'RBI Regulatory Compliance' },
              { href: '/services/los-lms', label: 'LOS / LMS Technology' },
              { href: '/services/dpdpa', label: 'DPDPA / Data Protection' },
              { href: '/services/credit', label: 'Credit & Institutional' },
              { href: '/services/cic', label: 'CIC Advisory' },
              { href: '/services/training', label: 'Corporate Training' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.4rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Quick Links</div>
            {[
              { href: '/about', label: 'About' },
              { href: '/learning', label: 'Learning' },
              { href: '/insights', label: 'Insights' },
              { href: '/complianceos', label: 'ComplianceOS' },
              { href: '/contact', label: 'Book a Call' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.4rem' }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
              <a href="tel:+919833823262" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'block' }}>+91-9833823262</a>
              <a href="mailto:thornleyadvisoryservices@gmail.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'block', fontSize: '0.8rem' }}>thornleyadvisoryservices@gmail.com</a>
              <a href="https://linkedin.com/in/sureshchelikani" target="_blank" rel="noreferrer" style={{ color: '#c9a84c', textDecoration: 'none', display: 'block' }}>LinkedIn ↗</a>
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Gyaan Pravaha. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['/privacy', '/terms'].map(href => (
              <Link key={href} href={href} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                {href === '/privacy' ? 'Privacy Policy' : 'Terms'}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
