import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Training — RBI Compliance, DPDPA, Cyber Risk for BFSI | Practice F',
  description: 'Practitioner-led corporate training for Banks, NBFCs, and HFCs — RBI compliance, DPDPA, cyber risk, digital lending. Guest Faculty ASCI. Trained Cholamandalam Investment & Finance.',
  keywords: ['BFSI corporate training India', 'RBI compliance training NBFC', 'DPDPA training India', 'cyber risk training BFSI', 'ASCI guest faculty', 'NBFC compliance workshop'],
  alternates: { canonical: 'https://gyaanpravaha.com/services/training' },
}

export default function TrainingPage() {
  const programmes = [
    { title: 'RBI Compliance Masterclass', desc: 'Master Directions 2025, Digital Lending Guidelines, KYC/AML, IRACP — obligation-level, compliance-officer focused.' },
    { title: 'DPDPA for Financial Institutions', desc: 'DPDPA 2023 — obligations, penalties, DPO role, consent framework, breach notification, and vendor management.' },
    { title: 'Enterprise Cyber Risk Management', desc: 'Cyber threat landscape, RBI IT Governance & Cyber Security Master Direction, incident response, board-level governance.' },
    { title: 'Digital Lending Compliance', desc: 'LSP, FLDG, KFS, digital loan agreement, co-lending — full Digital Lending Guidelines workshop.' },
    { title: 'Credit Risk & NPA Management', desc: 'Credit policy, IRACP, early warning signals, provisioning — for credit and risk teams.' },
    { title: 'CIC & Bureau Compliance', desc: 'CICRA, 21 RBI circulars, TUDF/Metro 2, dispute resolution — for compliance and operations teams.' },
  ]
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Practice F</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '800px' }}>Corporate Training for BFSI</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', lineHeight: 1.8, marginBottom: '2.5rem' }}>Practitioner-led training for Banks, NBFCs, and Housing Finance Companies — delivered by a certified expert with 25+ years of institutional experience, including as Guest Faculty from the Administrative Staff College of India (ASCI).</p>
          <Link href="/contact" className="btn-primary">Request a Training Programme</Link>
        </div>
      </section>

      {/* Signature programme */}
      <section style={{ padding: 'clamp(2rem, 4vw, 4rem) 2rem', background: 'rgba(201,168,76,0.05)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Recent Programme — 2026</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Enterprise Cyber Risk Management</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>Conducted a full-day training programme on Enterprise Cyber Risk Management for the senior leadership team at <strong>Cholamandalam Investment and Finance Company</strong> — one of India's leading NBFCs.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Delivered as <strong>Guest Resource from ASCI</strong> (Administrative Staff College of India), covering cyber threat landscape, RBI IT Risk & Cyber Security framework, incident response, and board-level governance.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem', minWidth: '280px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <img src="/cholamandalam-training-1.jpg" alt="Felicitation at Cholamandalam training" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' as const, height: '180px' }} />
                <div style={{ position: 'relative', height: '180px', borderRadius: '8px', overflow: 'hidden' }}><Image src="/cholamandalam-training-2.jpg" alt="Cholamandalam enterprise cyber risk training 2026" fill style={{ objectFit: 'cover' }} /></div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
                <span style={{ background: 'var(--navy)', color: 'var(--gold)', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>Cholamandalam Investment & Finance</span>
                <span style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--navy)', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.85rem' }}>Guest Faculty — ASCI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-label">Training Programmes</div>
          <h2 className="section-title">Available Programmes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {programmes.map(item => (
              <div key={item.title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.75rem', borderLeft: '3px solid #784212' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.6rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 2rem', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>Request a Programme</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>Custom programmes for your leadership team, compliance department, or operations staff. Half-day or full-day formats.</p>
          <Link href="/contact" className="btn-primary">Book a Training Consultation</Link>
        </div>
      </section>
    </>
  )
}
