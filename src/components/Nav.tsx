'use client'
import Link from 'next/link'
import { useState } from 'react'

const SERVICES = [
  { href: '/services/rbi-compliance', label: 'RBI Regulatory Compliance' },
  { href: '/services/los-lms', label: 'LOS / LMS Technology Advisory' },
  { href: '/services/dpdpa', label: 'DPDPA / Data Protection' },
  { href: '/services/credit', label: 'Credit & Institutional Consulting' },
  { href: '/services/cic', label: 'CIC Advisory' },
  { href: '/services/training', label: 'Corporate Training' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const linkStyle = { padding: '0.5rem 0.9rem', display: 'block', fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' } as const

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(13,27,46,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '0 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', height: '68px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38" height="38">
            <circle cx="24" cy="24" r="21" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="24" cy="24" r="15.5" fill="none" stroke="#c9a84c" strokeWidth="0.6" strokeDasharray="2,2.5"/>
            <text x="24" y="22" fontFamily="Georgia,serif" fontSize="9.5" fontWeight="700" fill="#c9a84c" textAnchor="middle" letterSpacing="1">GP</text>
            <text x="24" y="30" fontFamily="Arial,sans-serif" fontSize="3.2" fill="#c9a84c" textAnchor="middle" letterSpacing="1.8">ADVISORY</text>
            <circle cx="24" cy="3.5" r="1.4" fill="#c9a84c"/>
            <circle cx="24" cy="44.5" r="1.4" fill="#c9a84c"/>
            <circle cx="3.5" cy="24" r="1.4" fill="#c9a84c"/>
            <circle cx="44.5" cy="24" r="1.4" fill="#c9a84c"/>
          </svg>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.05em', lineHeight: 1.1 }}>Gyaan Pravaha</span>
            <span style={{ fontSize: '0.55rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>BFSI Advisory</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '0.25rem', marginLeft: 'auto', marginRight: '1.5rem' }}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/about" style={linkStyle}>About</Link></li>
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Services <span style={{ fontSize: '0.6rem' }}>▾</span>
            </span>
            {servicesOpen && (
              <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#0d1b2e', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px', listStyle: 'none', padding: '0.5rem 0', minWidth: '240px', boxShadow: '0 12px 32px rgba(0,0,0,0.4)', zIndex: 100 }}>
                {SERVICES.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} style={{ display: 'block', padding: '0.6rem 1.2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/insights" style={linkStyle}>Insights</Link></li>
          <li><Link href="/complianceos" style={linkStyle}>ComplianceOS</Link></li>
          <li><Link href="/learning" style={linkStyle}>Learning</Link></li>
        </ul>

        <a href="https://gyaanpravaha-web.vercel.app/login" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '0.6rem 1.1rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.85rem', textDecoration: 'none', flexShrink: 0, border: '1px solid rgba(255,255,255,0.15)', marginRight: '0.5rem' }}>Login</a>
        <Link href="/contact" style={{ background: '#c9a84c', color: '#0d1b2e', padding: '0.6rem 1.4rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textDecoration: 'none', flexShrink: 0 }}>Book a Call</Link>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ marginLeft: '1rem', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }} aria-label="Menu">☰</button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#0d1b2e', borderTop: '1px solid rgba(201,168,76,0.1)', padding: '1rem 2rem' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            ...SERVICES,
            { href: '/insights', label: 'Insights' },
            { href: '/complianceos', label: 'ComplianceOS' },
            { href: '/learning', label: 'Learning' },
            { href: '/contact', label: 'Book a Call' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.75rem 0', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.95rem' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
