import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: '#c9a84c', marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#0d1b2e', marginBottom: '1rem' }}>Page Not Found</h1>
        <p style={{ color: '#5a6a7a', marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
        <Link href="/" style={{ background: '#c9a84c', color: '#0d1b2e', padding: '0.75rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
          Return Home
        </Link>
      </div>
    </div>
  )
}
