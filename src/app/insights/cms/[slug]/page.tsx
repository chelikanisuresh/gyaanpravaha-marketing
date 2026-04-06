import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { sanitizeHtml } from '@/lib/security'
import ArticleEnhancements from '@/components/ArticleEnhancements'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

async function getInsight(slug: string) {
  try {
    const { data } = await getSupabase()
      .from('cms_insights')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .single()
    return data
  } catch { return null }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = await getInsight(params.slug)
  if (!insight) return { title: 'Article Not Found' }
  return {
    title: `${insight.title} | Gyaan Pravaha`,
    description: insight.excerpt,
    alternates: { canonical: `https://gyaanpravaha.com/insights/${insight.slug}` },
  }
}

function renderMarkdown(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2 style="font-family:Georgia,serif;font-size:1.7rem;color:#0d1b2e;margin:2.5rem 0 1rem;font-weight:600">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-family:Georgia,serif;font-size:1.25rem;color:#0d1b2e;margin:2rem 0 0.75rem;font-weight:600">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#0d1b2e;font-weight:700">$1</strong>')
    .replace(/^- (.+)$/gm, '<li style="margin:0.4rem 0;color:#5a6a7a;line-height:1.75">$1</li>')
    .replace(/(<li[^>]*>[^<]*<\/li>\n?)+/gm, '<ul style="padding-left:1.5rem;margin:1rem 0">$&</ul>')
    .replace(/\n\n/g, '</p><p style="margin:1rem 0;color:#5a6a7a;line-height:1.9;font-size:1rem">')
}

export default async function CMSInsightPage({ params }: { params: { slug: string } }) {
  const insight = await getInsight(params.slug)
  if (!insight) notFound()

  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: insight.title,
    author: { '@type': 'Person', name: insight.author, url: 'https://gyaanpravaha.com/about' },
    publisher: { '@type': 'Organization', name: 'Gyaan Pravaha', url: 'https://gyaanpravaha.com' },
    datePublished: insight.published_at,
    dateModified: insight.updated_at,
    mainEntityOfPage: `https://gyaanpravaha.com/insights/${insight.slug}`,
  }

  return (
    <>
      <ArticleEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ background: '#0d1b2e', padding: 'clamp(4rem, 8vw, 6rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', fontSize: '0.6rem', letterSpacing: '0.12em', padding: '0.25rem 0.7rem', borderRadius: '2px', fontFamily: 'monospace' }}>{insight.badge}</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
              {insight.published_at ? new Date(insight.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''} · {insight.read_time}
            </span>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem' }}>{insight.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.8 }}>{insight.excerpt}</p>
        </div>
      </section>
      <article style={{ padding: 'clamp(3rem, 6vw, 6rem) 2rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ color: '#5a6a7a', lineHeight: 1.9, fontSize: '1rem' }}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(`<p style="margin:0;color:#5a6a7a;line-height:1.9;font-size:1rem">${renderMarkdown(insight.body)}</p>`) }}
          />
          <div style={{ marginTop: '3rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#0d1b2e', fontWeight: 600, marginBottom: '0.5rem' }}>Navigating this regulation?</p>
            <p style={{ color: '#5a6a7a', marginBottom: '1.5rem', fontSize: '0.9rem' }}>A 30-minute discovery call will identify your gaps and build a prioritised action plan.</p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
          </div>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e4ddd0' }}>
            <Link href="/insights" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.9rem' }}>← All Insights</Link>
          </div>
        </div>
      </article>
    </>
  )
}
