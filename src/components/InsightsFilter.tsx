'use client'
import { useState } from 'react'
import Link from 'next/link'

type Article = {
  slug: string
  badge: string
  date: string
  title: string
  excerpt: string
  readTime: string
}

const BADGE_COLORS: Record<string, string> = {
  SBR: '#1d9e75',
  DPDPA: '#7c3aed',
  RBI: '#2563eb',
  CIC: '#c9a84c',
  KYC: '#0891b2',
  DQI: '#d97706',
  ARC: '#dc2626',
  CONSUMER: '#059669',
  CYBER: '#e11d48',
  DIGITAL: '#0284c7',
  DEFAULT: '#5a6a7a',
}

const FILTERS = ['All', 'SBR', 'DPDPA', 'RBI', 'CIC', 'KYC', 'CYBER', 'DIGITAL']

export default function InsightsFilter({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? articles
    : articles.filter(a => a.badge === active)

  return (
    <>
      {/* Filter bar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              border: active === f ? '1px solid var(--gold)' : '1px solid var(--border)',
              background: active === f ? 'var(--gold)' : 'transparent',
              color: active === f ? 'var(--navy)' : 'var(--text-muted)',
              fontFamily: 'monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              fontWeight: active === f ? 700 : 400,
              transition: 'all 0.15s',
            }}
          >
            {f}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-light)', alignSelf: 'center' }}>
          {filtered.length} article{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Article grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map(article => {
          const badgeColor = BADGE_COLORS[article.badge] || BADGE_COLORS.DEFAULT
          return (
            <Link key={article.slug} href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s, transform 0.15s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--gold)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    background: `${badgeColor}18`,
                    color: badgeColor,
                    fontSize: '0.6rem', letterSpacing: '0.12em',
                    padding: '0.2rem 0.6rem', borderRadius: '2px',
                    fontFamily: 'monospace', fontWeight: 600,
                  }}>{article.badge}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontFamily: 'monospace' }}>
                    {article.date} · {article.readTime}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.15rem', fontWeight: 600,
                  color: 'var(--text-dark)', lineHeight: 1.35,
                  marginBottom: '0.75rem', flex: 1,
                }}>{article.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {article.excerpt}
                </p>
                <span style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.03em' }}>
                  Read article →
                </span>
              </article>
            </Link>
          )
        })}
      </div>
    </>
  )
}
