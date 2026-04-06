'use client'
import { useEffect, useRef } from 'react'

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    const SERVICES = [
      { label: 'RBI Compliance', sub: 'Practice B', angle: 0.0,  orbit: 0.00045, r: 95 },
      { label: 'LOS / LMS',      sub: 'Practice A', angle: 1.05, orbit: 0.00045, r: 95 },
      { label: 'DPDPA',          sub: 'Practice C', angle: 2.09, orbit: 0.00045, r: 95 },
      { label: 'Credit Advisory',sub: 'Practice D', angle: 3.14, orbit: 0.00045, r: 95 },
      { label: 'CIC Advisory',   sub: 'Practice E', angle: 4.19, orbit: 0.00045, r: 95 },
      { label: 'Training',       sub: 'Practice F', angle: 5.24, orbit: 0.00045, r: 95 },
    ]
    const PRODUCTS = [
      { label: 'ComplianceOS', sub: 'SaaS Platform',  angle: 0.5,  orbit: 0.00028, r: 152 },
      { label: 'Learning',     sub: 'Online Courses', angle: 3.64, orbit: 0.00028, r: 152 },
    ]
    const OUTER = [
      { label: 'Banks', angle: 0.3,  r: 200, drift: 0.00006 },
      { label: 'NBFCs', angle: 1.35, r: 206, drift: 0.00006 },
      { label: 'SFBs',  angle: 2.4,  r: 200, drift: 0.00006 },
      { label: 'HFCs',  angle: 3.5,  r: 205, drift: 0.00006 },
      { label: 'CICs',  angle: 4.55, r: 200, drift: 0.00006 },
      { label: 'ARCs',  angle: 5.6,  r: 205, drift: 0.00006 },
    ]

    let W = 0, H = 0, cx = 0, cy = 0, t = 0
    let pulses: { r: number; alpha: number }[] = []
    let hovered: string | null = null
    let animId: number

    function resize() {
      if (!canvas || !ctx) return
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      cx = W * 0.5; cy = H * 0.5
    }

    const spos = (s: typeof SERVICES[0]) => { const a = s.angle + t * s.orbit; return { x: cx + Math.cos(a) * s.r, y: cy + Math.sin(a) * s.r } }
    const ppos = (p: typeof PRODUCTS[0]) => { const a = p.angle + t * p.orbit; return { x: cx + Math.cos(a) * p.r, y: cy + Math.sin(a) * p.r } }
    const opos = (o: typeof OUTER[0]) => { const a = o.angle + t * o.drift; return { x: cx + Math.cos(a) * o.r, y: cy + Math.sin(a) * o.r } }

    function labelOffset(x: number, y: number, pad: number) {
      const angle = Math.atan2(y - cy, x - cx)
      return { tx: x + Math.cos(angle) * pad, ty: y + Math.sin(angle) * pad, align: ((x - cx) > 0 ? 'left' : 'right') as CanvasTextAlign }
    }

    function drawLabel(x: number, y: number, label: string, sub: string, isProd: boolean, isHov: boolean) {
      const { tx, ty, align } = labelOffset(x, y, isProd ? 14 : 11)
      ctx.save()
      ctx.textAlign = align
      ctx.font = `${isProd ? '500' : '400'} ${isProd ? 10.5 : 9.5}px -apple-system,sans-serif`
      ctx.fillStyle = isProd ? (isHov ? '#f0d080' : '#c9a84c') : (isHov ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.65)')
      ctx.fillText(label, tx, ty)
      ctx.font = '9px monospace'
      ctx.fillStyle = isProd ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.28)'
      ctx.fillText(sub, tx, ty + 12)
      ctx.restore()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t++
      if (t % 200 === 0) pulses.push({ r: 0, alpha: 0.5 })

      // Orbit rings
      ;([[95, 'rgba(255,255,255,0.05)'], [152, 'rgba(201,168,76,0.07)'], [200, 'rgba(201,168,76,0.1)']] as [number, string][]).forEach(([r, col]) => {
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

      // Outer institutions
      OUTER.forEach(o => {
        const p = opos(o)
        const nearAngle = Math.atan2(p.y - cy, p.x - cx)
        ctx.beginPath(); ctx.moveTo(p.x, p.y)
        ctx.lineTo(cx + Math.cos(nearAngle) * 160, cy + Math.sin(nearAngle) * 160)
        ctx.strokeStyle = 'rgba(201,168,76,0.08)'; ctx.lineWidth = 0.4
        ctx.setLineDash([2, 8]); ctx.stroke(); ctx.setLineDash([])
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.6)'; ctx.fill()
        ctx.strokeStyle = 'rgba(201,168,76,0.3)'; ctx.lineWidth = 0.5; ctx.stroke()
        const { tx, ty, align } = labelOffset(p.x, p.y, 10)
        ctx.font = '500 8.5px monospace'; ctx.fillStyle = 'rgba(201,168,76,0.65)'
        ctx.textAlign = align; ctx.fillText(o.label, tx, ty + 3)
      })

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
      SERVICES.forEach((s, i) => {
        const sp = spos(s); const isH = hovered === `s${i}`
        if (isH) {
          const g = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, 20)
          g.addColorStop(0, 'rgba(255,255,255,0.15)'); g.addColorStop(1, 'rgba(255,255,255,0)')
          ctx.beginPath(); ctx.arc(sp.x, sp.y, 20, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
        }
        ctx.beginPath(); ctx.arc(sp.x, sp.y, isH ? 8 : 6, 0, Math.PI * 2)
        ctx.fillStyle = isH ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.22)'; ctx.fill()
        ctx.strokeStyle = isH ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)'; ctx.lineWidth = 0.8; ctx.stroke()
        drawLabel(sp.x, sp.y, s.label, s.sub, false, isH)
      })

      // Product nodes
      PRODUCTS.forEach((p, i) => {
        const pp = ppos(p); const isH = hovered === `p${i}`
        const g = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, isH ? 26 : 20)
        g.addColorStop(0, isH ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.18)'); g.addColorStop(1, 'rgba(201,168,76,0)')
        ctx.beginPath(); ctx.arc(pp.x, pp.y, isH ? 26 : 20, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(pp.x, pp.y, isH ? 11 : 9, 0, Math.PI * 2)
        ctx.fillStyle = isH ? '#e8c45a' : '#c9a84c'; ctx.fill()
        ctx.strokeStyle = 'rgba(201,168,76,0.6)'; ctx.lineWidth = 0.8; ctx.stroke()
        drawLabel(pp.x, pp.y, p.label, p.sub, true, isH)
      })

      // Center GP
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30)
      cg.addColorStop(0, 'rgba(201,168,76,0.3)'); cg.addColorStop(1, 'rgba(201,168,76,0)')
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.fillStyle = cg; ctx.fill()
      ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI * 2)
      ctx.fillStyle = '#c9a84c'; ctx.fill()
      ctx.strokeStyle = 'rgba(201,168,76,0.5)'; ctx.lineWidth = 1; ctx.stroke()
      ctx.font = '500 9px monospace'; ctx.fillStyle = '#0d1b2e'
      ctx.textAlign = 'center'; ctx.fillText('GP', cx, cy + 3.5)

      // Rotating ticks
      for (let i = 0; i < 4; i++) {
        const a = (Math.PI / 2) * i + t * 0.0004
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a) * 19, cy + Math.sin(a) * 19)
        ctx.lineTo(cx + Math.cos(a) * 26, cy + Math.sin(a) * 26)
        ctx.strokeStyle = 'rgba(201,168,76,0.35)'; ctx.lineWidth = 0.8; ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left, my = e.clientY - rect.top
      hovered = null
      SERVICES.forEach((s, i) => { const sp = spos(s); if (Math.hypot(mx - sp.x, my - sp.y) < 14) hovered = `s${i}` })
      PRODUCTS.forEach((p, i) => { const pp = ppos(p); if (Math.hypot(mx - pp.x, my - pp.y) < 16) hovered = `p${i}` })
      canvas.style.cursor = hovered ? 'pointer' : 'default'
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', () => { hovered = null })
    window.addEventListener('resize', resize)

    // Pause animation when tab is not visible (saves CPU on mobile)
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId)
      else draw()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', handleMouseMove)
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
      style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', display: 'block' }}
    />
  )
}
