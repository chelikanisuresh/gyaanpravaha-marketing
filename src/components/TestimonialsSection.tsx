import { createClient } from '@supabase/supabase-js'

type Testimonial = {
  id: string
  name: string
  role: string
  institution: string
  quote: string
  photo_url: string | null
  sort_order: number
}

// ISR: revalidate every hour
export const revalidate = 3600

async function getTestimonials(): Promise<Testimonial[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return []

  try {
    const supabase = createClient(url, key)
    const { data } = await supabase
      .from('testimonials')
      .select('id, name, role, institution, quote, photo_url, sort_order')
      .eq('active', true)
      .order('sort_order', { ascending: true })
    return data || []
  } catch {
    return []
  }
}

function PlaceholderCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '2rem' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: 'rgba(201,168,76,0.2)', lineHeight: 0.8, marginBottom: '1rem' }}>"</div>
          <div style={{ background: 'rgba(201,168,76,0.05)', border: '1px dashed rgba(201,168,76,0.2)', borderRadius: '4px', padding: '1rem', marginBottom: '1.5rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>CLIENT TESTIMONIAL — COMING SOON</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px dashed rgba(201,168,76,0.25)', flexShrink: 0 }} />
            <div>
              <div style={{ width: '120px', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', marginBottom: '6px' }} />
              <div style={{ width: '80px', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials()

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2rem', background: 'var(--navy)', borderTop: '1px solid var(--border-dark)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--gold)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>What Clients Say</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#fff', marginBottom: '2.5rem' }}>Trusted by BFSI Leaders</h2>

        {testimonials.length === 0 ? <PlaceholderCards /> : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.id} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column' as const }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', color: 'rgba(201,168,76,0.25)', lineHeight: 0.8, marginBottom: '1rem' }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.8, flex: 1, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {t.photo_url ? <img src={t.photo_url} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#c9a84c' }}>👤</span>}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{t.role}, {t.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
