'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ArticleEnhancements() {
  const [progress, setProgress] = useState(0)
  const [showCTA, setShowCTA] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article')
      if (!article) return

      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const scrolled = window.scrollY - articleTop
      const pct = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100))
      setProgress(pct)
      setShowCTA(pct > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* M-06: Reading progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        height: '3px', background: 'rgba(201,168,76,0.2)', width: '100%',
        pointerEvents: 'none',
      }}>
        <div style={{
          height: '100%', background: '#c9a84c',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
        }} />
      </div>

      {/* M-08: Sticky CTA bar */}
      {showCTA && !dismissed && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9997,
          background: '#0d1b2e', borderTop: '1px solid rgba(201,168,76,0.3)',
          padding: '1rem 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem', flexWrap: 'wrap' as const,
          animation: 'slideUp 0.3s ease',
        }}>
          <style>{`
            @keyframes slideUp {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: '2px' }}>
              GYAAN PRAVAHA · BFSI ADVISORY
            </div>
            <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>
              Navigating this regulation? Let's talk through it.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
            <Link href="/contact" style={{
              background: '#c9a84c', color: '#0d1b2e',
              padding: '0.6rem 1.5rem', borderRadius: '4px',
              fontWeight: 700, fontSize: '0.85rem',
              textDecoration: 'none', letterSpacing: '0.05em',
              whiteSpace: 'nowrap' as const,
            }}>
              Book a Discovery Call
            </Link>
            <button onClick={() => setDismissed(true)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)',
              cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1,
              padding: '0.25rem',
            }} aria-label="Dismiss">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
