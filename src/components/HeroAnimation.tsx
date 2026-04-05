'use client'

const ITEMS = [
  { icon: '⚖️', title: 'RBI Regulatory Compliance', sub: 'Practice B', type: 'svc' },
  { icon: '⚙️', title: 'LOS / LMS Technology', sub: 'Practice A', type: 'svc' },
  { icon: '🔒', title: 'DPDPA / Data Protection', sub: 'Practice C', type: 'svc' },
  { icon: '📊', title: 'Credit & Institutional', sub: 'Practice D', type: 'svc' },
  { icon: '🏦', title: 'CIC Advisory', sub: 'Practice E', type: 'svc' },
  { icon: '🎓', title: 'Corporate Training', sub: 'Practice F', type: 'svc' },
  { icon: '📋', title: 'ComplianceOS', sub: 'SaaS Platform', type: 'prod' },
  { icon: '📚', title: 'Learning', sub: 'Online Courses', type: 'prod' },
]

const COL1 = [ITEMS[0], ITEMS[2], ITEMS[4], ITEMS[6]]
const COL2 = [ITEMS[1], ITEMS[3], ITEMS[5], ITEMS[7]]

function Card({ item }: { item: typeof ITEMS[0] }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '8px',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      marginBottom: '8px',
      transition: 'border-color 0.2s, background 0.2s',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(201,168,76,0.08)'
        el.style.borderColor = 'rgba(201,168,76,0.35)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.05)'
        el.style.borderColor = 'rgba(255,255,255,0.08)'
      }}
    >
      <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3, marginBottom: '2px' }}>{item.title}</div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.sub}</div>
        <span style={{
          display: 'inline-block', fontSize: '9px', padding: '2px 7px', borderRadius: '10px',
          fontFamily: 'monospace', letterSpacing: '0.08em', marginTop: '5px', fontWeight: 700,
          background: item.type === 'prod' ? 'rgba(201,168,76,0.2)' : 'rgba(26,82,118,0.4)',
          color: item.type === 'prod' ? '#c9a84c' : '#7fc4ff',
        }}>
          {item.type === 'prod' ? 'PRODUCT' : 'SERVICE'}
        </span>
      </div>
    </div>
  )
}

function Column({ items, duration, reverse }: { items: typeof ITEMS, duration: number, reverse?: boolean }) {
  return (
    <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
      <style>{`
        @keyframes scrollUp { from { transform: translateY(0) } to { transform: translateY(-50%) } }
        @keyframes scrollDown { from { transform: translateY(-50%) } to { transform: translateY(0) } }
        .gp-track { animation-play-state: running; }
        .gp-track:hover { animation-play-state: paused !important; }
      `}</style>
      <div
        className="gp-track"
        style={{
          animation: `${reverse ? 'scrollDown' : 'scrollUp'} ${duration}s linear infinite`,
          paddingTop: '8px',
        }}
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function HeroAnimation() {
  return (
    <div style={{
      position: 'absolute', right: 0, top: 0, bottom: 0,
      width: '48%', overflow: 'hidden',
    }}>
      {/* Fades */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', background: 'linear-gradient(to right, #0d1b2e, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, #0d1b2e, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #0d1b2e, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Two columns */}
      <div style={{ display: 'flex', gap: '8px', height: '100%', padding: '16px 16px 16px 8px' }}>
        <Column items={COL1} duration={26} />
        <Column items={COL2} duration={20} reverse />
      </div>
    </div>
  )
}
