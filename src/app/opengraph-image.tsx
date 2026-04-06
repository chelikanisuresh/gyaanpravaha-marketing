import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Gyaan Pravaha — RBI Compliance & BFSI Advisory'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#0d1b2e',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gold left bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '8px', height: '630px', background: '#c9a84c', display: 'flex' }} />

        {/* Decorative circle top right */}
        <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.15)', display: 'flex' }} />
        <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '260px', height: '260px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', display: 'flex' }} />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '60px 80px', width: '100%' }}>

          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              border: '2px solid #c9a84c', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(201,168,76,0.1)',
            }}>
              <span style={{ color: '#c9a84c', fontSize: '16px', fontWeight: 'bold' }}>GP</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#c9a84c', fontSize: '22px', fontWeight: 'bold', letterSpacing: '0.03em' }}>Gyaan Pravaha</span>
              <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '12px', letterSpacing: '0.2em' }}>BFSI ADVISORY</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: '#2a3f58', marginBottom: '44px', display: 'flex' }} />

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
            <span style={{ color: '#ffffff', fontSize: '56px', fontWeight: 'bold', lineHeight: 1.1 }}>RBI Compliance &</span>
            <span style={{ color: '#c9a84c', fontSize: '56px', fontWeight: 'bold', lineHeight: 1.1 }}>BFSI Advisory</span>
          </div>

          {/* Subtext */}
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '22px', lineHeight: 1.5, marginBottom: '48px' }}>
            Practitioner-grade advisory for Banks, NBFCs &amp; SFBs — Mumbai
          </span>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '48px' }}>
            {[['25+', 'Years BFSI'], ['₹3L+Cr', 'Lending Book'], ['17+', 'Insight Articles']].map(([val, lbl]) => (
              <div key={lbl} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ color: '#c9a84c', fontSize: '32px', fontWeight: 'bold' }}>{val}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', letterSpacing: '0.06em' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
