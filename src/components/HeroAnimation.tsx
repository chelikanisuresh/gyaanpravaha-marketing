'use client'
import { useEffect, useRef } from 'react'

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    const isMobile = window.innerWidth < 900

    const SERVICES = [
      { label: 'RBI Compliance', sub: 'Practice B', angle: 0.0,  orbit: 0.00045, r: isMobile ? 60 : 95 },
      { label: 'LOS / LMS',      sub: 'Practice A', angle: 1.05, orbit: 0.00045, r: isMobile ? 60 : 95 },
      { label: 'DPDPA',          sub: 'Practice C', angle: 2.09, orbit: 0.00045, r: isMobile ? 60 : 95 },
      { label: 'Credit Advisory',sub: 'Practice D', angle: 3.14, orbit: 0.00045, r: isMobile ? 60 : 95 },
      { label: 'CIC Advisory',   sub: 'Practice E', angle: 4.19, orbit: 0.00045, r: isMobile ? 60 : 95 },
      { label: 'Training',       sub: 'Practice F', angle: 5.24, orbit: 0.00045, r: isMobile ? 60 : 95 },
    ]
    const PRODUCTS = [
      { label: 'ComplianceOS', sub: 'SaaS',    angle: 0.5,  orbit: 0.00028, r: isMobile ? 100 : 152 },
      { label: 'Learning',     sub: 'Courses', angle: 3.64, orbit: 0.00028, r: isMobile ? 100 : 152 },
    ]
    const OUTER = [
      { label: 'Banks', angle: 0.3,  r: isMobile ? 135 : 200, drift: 0.00006 },
      { label: 'NBFCs', angle: 1.35, r: isMobile ? 138 : 206, drift: 0.00006 },
      { label: 'SFBs',  angle: 2.4,  r: isMobile ? 135 : 200, drift: 0.00006 },
      { label: 'HFCs',  angle: 3.5,  r: isMobile ? 137 : 205, drift: 0.00006 },
      { label: 'CICs',  angle: 4.55, r: isMobile ? 135 : 200, drift: 0.00006 },
      { label: 'ARCs',  angle: 5.6,  r: isMobile ? 137 : 205, drift: 0.00006 },
    ]

    let W = 0, H = 0, cx = 0, cy = 0, t = 0
    let pulses: { r: number; alpha: number }[] = []
    let animId: number

    function resize() {
      if (!canvas || !ctx) return
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      cx = isMobile ? W * 0.5 : W * 0.5; cy = H * 0.5
    }

    const spos = (s: typeof SERVICES[0]) => { const a = s.angle + t * s.orbit; return { x: cx + Math.cos(a) * s.r, y: cy + Math.sin(a) * s.r } }
    const ppos = (p: typeof PRODUCTS[0]) => { const a = p.angle + t * p.orbit; return { x: cx + Math.cos(a) * p.r, y: cy + Math.sin(a) * p.r } }
    const opos = (o: typeof OUTER[0]) => { const a = o.angle + t * o.drift; return { x: cx + Math.cos(a) * o.r, y: cy + Math.sin(a) * o.r } }

    function labelOffset(x: number, y: number, pad: number) {
      const angle = Math.atan2(y - cy, x - cx)
      return { tx: x + Math.cos(angle) * pad, ty: y + Math.sin(angle) * pad, align: ((x - cx) > 0 ? 'left' : 'right') as CanvasTextAlign }
    }

    function drawLabel(x: number, y: number, label: string, sub: string, isProd: boolean) {
      if (isMobile && !isProd) return // skip service labels on mobile — too cluttered
      const { tx, ty, align } = labelOffset(x, y, isProd ? 14 : 11)
      ctx.save()
      ctx.textAlign = align
      ctx.font = `${isProd ? '500' : '400'} ${isProd ? (isMobile ? 9 : 10.5) : 9.5}px -apple-system,sans-serif`
      ctx.fillStyle = isProd ? '#c9a84c' : 'rgba(255,255,255,0.65)'
      ctx.fillText(label, tx, ty)
      if (!isMobile) {
        ctx.font = '9px monospace'
        ctx.fillStyle = isProd ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.28)'
        ctx.fillText(sub, tx, ty + 12)
      }
      ctx.restore()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t++
      if (t % 200 === 0) pulses.push({ r: 0, alpha: 0.5 })

      // Orbit rings
      const rings: [number, string][] = isMobile
        ? [[60, 'rgba(255,255,255,0.05)'], [100, 'rgba(201,168,76,0.07)'], [135, 'rgba(201,168,76,0.08)']]
        : [[95, 'rgba(255,255,255,0.05)'], [152, 'rgba(201,168,76,0.07)'], [200, 'rgba(201,168,76,0.1)']]

      rings.forEach(([r, col]) => {
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = col; ctx.lineWidth = 0.6; ctx.setLineDash([3, 9]); ctx.stroke(); ctx.setLineDash([])
      })

      // Pulses
      pulses = pulses.filter(p => p.alpha > 0.01)
      pulses.forEach(p => {
        ctx.beginPath(); ctx.arc(cx, cy, p.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(201,168,76,${p.alpha.toFixed(3)})`
        ctx.lineWidth = 0.8; ctx.stroke()
        p.r += 1.8; p.alpha -= 0.006
      })

      // Outer institutions — skip on mobile to reduce clutter
      if (!isMobile) {
        OUTER.forEach(o => {
          const p = opos(o)
          const nearAngle = Math.atan2(p.y - cy, p.x - cx)
          ctx.beginPath(); ctx.moveTo(p.x, p.y)
          ctx.lineTo(cx + Math.cos(nearAngle) * 160, cy + Math.sin(nearAngle) * 160)
          ctx.strokeStyle = 'rgba(201,168,76,0.08)'; ctx.lineWidth = 0.4
          ctx.setLineDash([2, 8]); ctx.stroke(); ctx.setLineDash([])
          ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(201,168,76,0.6)'; ctx.fill()
          const { tx, ty, align } = labelOffset(p.x, p.y, 10)
          ctx.font = '500 8.5px monospace'; ctx.fillStyle = 'rgba(201,168,76,0.65)'
          ctx.textAlign = align; ctx.fillText(o.label, tx, ty + 3)
        })
      } else {
        // On mobile show just dots for outer ring
        OUTER.forEach(o => {
          const p = opos(o)
          ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(201,168,76,0.4)'; ctx.fill()
        })
      }

      // Lines center → services & products
      SERVICES.forEach(s => {
        const sp = spos(s)
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sp.x, sp.y)
        ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 0.5; ctx.stroke()
      })
      PRODUCTS.forEach(p => {
        const pp = ppos(p)
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(pp.x, pp.y)
        ctx.strokeStyle = 'rgba(201,168,76,0.15)'; ctx.lineWidth = 0.6; ctx.stroke()
      })

      // Service nodes
      SERVICES.forEach(s => {
        const sp = spos(s)
        ctx.beginPath(); ctx.arc(sp.x, sp.y, isMobile ? 4 : 6, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.22)'; ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 0.8; ctx.stroke()
        drawLabel(sp.x, sp.y, s.label, s.sub, false)
      })

      // Product nodes
      PRODUCTS.forEach(p => {
        const pp = ppos(p)
        const g = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, 20)
        g.addColorStop(0, 'rgba(201,168,76,0.18)'); g.addColorStop(1, 'rgba(201,168,76,0)')
        ctx.beginPath(); ctx.arc(pp.x, pp.y, 20, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(pp.x, pp.y, isMobile ? 7 : 9, 0, Math.PI * 2)
        ctx.fillStyle = '#c9a84c'; ctx.fill()
        ctx.strokeStyle = 'rgba(201,168,76,0.6)'; ctx.lineWidth = 0.8; ctx.stroke()
        drawLabel(pp.x, pp.y, p.label, p.sub, true)
      })

      // Center GP
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30)
      cg.addColorStop(0, 'rgba(201,168,76,0.3)'); cg.addColorStop(1, 'rgba(201,168,76,0)')
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.fillStyle = cg; ctx.fill()
      ctx.beginPath(); ctx.arc(cx, cy, isMobile ? 12 : 16, 0, Math.PI * 2)
      ctx.fillStyle = '#c9a84c'; ctx.fill()
      ctx.strokeStyle = 'rgba(201,168,76,0.5)'; ctx.lineWidth = 1; ctx.stroke()
      ctx.font = '500 9px monospace'; ctx.fillStyle = '#0d1b2e'
      ctx.textAlign = 'center'; ctx.fillText('GP', cx, cy + 3.5)

      // Rotating ticks
      for (let i = 0; i < 4; i++) {
        const a = (Math.PI / 2) * i + t * 0.0004
        const innerR = isMobile ? 14 : 19
        const outerR = isMobile ? 20 : 26
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a) * innerR, cy + Math.sin(a) * innerR)
        ctx.lineTo(cx + Math.cos(a) * outerR, cy + Math.sin(a) * outerR)
        ctx.strokeStyle = 'rgba(201,168,76,0.35)'; ctx.lineWidth = 0.8; ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId)
      else draw()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
      role="presentation"
      style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', display: 'block', pointerEvents: 'none' }}
    />
  )
}
