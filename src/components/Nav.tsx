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

const PRODUCTS = [
  { href: '/complianceos', label: 'ComplianceOS', sub: 'RBI Compliance Management Platform' },
  { href: '/learning', label: 'Learning', sub: 'Online Compliance Courses for BFSI' },
  { href: '/drip', label: 'DRIP', sub: 'Data Risk Intelligence Platform — DPDPA' },
]

const dropdownStyle = {
  position: 'absolute' as const, top: '100%', left: 0, background: '#0d1b2e',
  border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px',
  listStyle: 'none' as const, padding: '0.5rem 0', minWidth: '260px',
  boxShadow: '0 12px 32px rgba(0,0,0,0.4)', zIndex: 200,
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const linkStyle = { padding: '0.5rem 0.9rem', display: 'block', fontSize: '0.88rem', fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' } as const

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(13,27,46,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
      {/* Main bar */}
      <div style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', height: '68px' }}>

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
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.05em', lineHeight: 1.1 }}>Gyaan Pravaha</span>
            <span style={{ fontSize: '0.55rem', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>BFSI Advisory</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hide-mobile" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '0.1rem', marginLeft: 'auto', marginRight: '1rem' }}>
          <li><Link href="/" style={linkStyle}>Home</Link></li>
          <li><Link href="/about" style={linkStyle}>About</Link></li>

          {/* Services dropdown */}
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Services <span style={{ fontSize: '0.6rem' }}>▾</span>
            </span>
            {servicesOpen && (
              <ul style={dropdownStyle}>
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

          {/* Products dropdown */}
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}>
            <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Products <span style={{ fontSize: '0.6rem' }}>▾</span>
            </span>
            {productsOpen && (
              <ul style={dropdownStyle}>
                {PRODUCTS.map(p => (
                  <li key={p.href}>
                    <Link href={p.href} style={{ display: 'block', padding: '0.75rem 1.2rem', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: '0.88rem', color: '#c9a84c', fontWeight: 600, marginBottom: '2px' }}>{p.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{p.sub}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="/insights" style={linkStyle}>Insights</Link></li>
          <li><Link href="/case-studies" style={linkStyle}>Case Studies</Link></li>
        </ul>

        <a href="https://app.gyaanpravaha.com/login" className="hide-mobile" style={{ background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '0.55rem 1rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.82rem', textDecoration: 'none', flexShrink: 0, border: '1px solid rgba(255,255,255,0.15)', marginRight: '0.5rem' }}>Login</a>
        <Link href="/contact" className="hide-mobile" style={{ background: '#c9a84c', color: '#0d1b2e', padding: '0.6rem 1.25rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textDecoration: 'none', flexShrink: 0 }}>Book a Call</Link>

        {/* Hamburger — always visible on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ marginLeft: 'auto', background: 'none', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', color: '#c9a84c', fontSize: '1.3rem', cursor: 'pointer', padding: '0.3rem 0.6rem', lineHeight: 1 }}
          className="show-mobile"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu — full width dropdown below nav bar */}
      {menuOpen && (
        <div style={{
          background: '#0b1d3a',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          padding: '0.5rem 0 1rem',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          {/* Section label */}
          <div style={{ padding: '0.75rem 1.5rem 0.25rem', fontSize: '0.65rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Navigation</div>

          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/insights', label: 'Insights' },
            { href: '/case-studies', label: 'Case Studies' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.85rem 1.5rem', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1rem' }}>
              {link.label}
            </Link>
          ))}

          <div style={{ padding: '0.75rem 1.5rem 0.25rem', fontSize: '0.65rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Services</div>

          {SERVICES.map(s => (
            <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.85rem 1.5rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }}>
              {s.label}
            </Link>
          ))}

          <div style={{ padding: '0.75rem 1.5rem 0.25rem', fontSize: '0.65rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Products</div>

          {PRODUCTS.map(p => (
            <Link key={p.href} href={p.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.85rem 1.5rem', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.95rem', color: '#c9a84c', fontWeight: 600 }}>{p.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>{p.sub}</div>
            </Link>
          ))}

          <div style={{ padding: '1rem 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://app.gyaanpravaha.com/login"
              style={{ display: 'block', background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '0.9rem', borderRadius: '4px', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none', textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
              Login
            </a>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              style={{ display: 'block', background: '#c9a84c', color: '#0d1b2e', padding: '0.9rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', textAlign: 'center' }}>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
