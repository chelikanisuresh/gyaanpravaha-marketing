import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import {
  escapeHtml,
  isValidEmail,
  isValidPhone,
  truncate,
  checkRateLimit,
} from '@/lib/security'

const TO_EMAIL = 'suresh@gyaanpravaha.com'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (!checkRateLimit(ip, 3, 3600000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': '3600' } }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY || '')

  try {
    const body = await req.json()

    const name        = truncate(body.name, 200)
    const institution = truncate(body.institution, 200)
    const email       = truncate(body.email, 320)
    const phone       = truncate(body.phone, 30)
    const practice    = truncate(body.practice, 200)
    const message     = truncate(body.message, 2000)

    if (!name || !institution || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    // Save enquiry to Supabase
    try {
      const supabase = getSupabase()
      const { error: dbError } = await supabase.from('enquiries').insert({
        name, institution, email, phone,
        practice: practice || null,
        message: message || null,
      })
      if (dbError) {
        console.error('Supabase insert error:', JSON.stringify(dbError))
      } else {
        console.log('Enquiry saved to Supabase successfully')
      }
    } catch (err) {
      console.error('Supabase insert exception:', err)
    }

    const safeName        = escapeHtml(name)
    const safeInstitution = escapeHtml(institution)
    const safeEmail       = escapeHtml(email)
    const safePhone       = escapeHtml(phone)
    const safePractice    = escapeHtml(practice || 'Not specified')
    const safeMessage     = escapeHtml(message)

    await resend.emails.send({
      from: 'Gyaan Pravaha Website <noreply@gyaanpravaha.com>',
      to: TO_EMAIL,
      reply_to: email,
      subject: `New Discovery Call Request — ${safeInstitution}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <div style="background: #0d1b2e; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.5rem;">Gyaan Pravaha</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 4px 0 0; letter-spacing: 0.1em;">NEW DISCOVERY CALL REQUEST</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Name', safeName],
              ['Institution', safeInstitution],
              ['Email', safeEmail],
              ['Phone', safePhone],
              ['Practice Area', safePractice],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 10px 16px; background: #fff; border: 1px solid #eee; font-size: 0.8rem; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">${label}</td>
                <td style="padding: 10px 16px; background: #fff; border: 1px solid #eee; font-size: 0.95rem; color: #1a1a1a;">${value}</td>
              </tr>
            `).join('')}
          </table>
          ${safeMessage ? `
          <div style="background: #fff; border: 1px solid #eee; border-radius: 4px; padding: 16px; margin-top: 16px;">
            <div style="font-size: 0.8rem; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
            <p style="font-size: 0.95rem; color: #333; line-height: 1.7; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>` : ''}
          <div style="margin-top: 24px; padding: 16px; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.3); border-radius: 4px; font-size: 0.85rem; color: #666;">
            Reply directly to this email to reach ${safeName} at ${safeEmail}
          </div>
        </div>
      `
    })

    await resend.emails.send({
      from: 'Gyaan Pravaha <noreply@gyaanpravaha.com>',
      to: email,
      subject: 'Your Discovery Call Request — Gyaan Pravaha',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <div style="background: #0d1b2e; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.5rem;">Gyaan Pravaha</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 4px 0 0; letter-spacing: 0.1em;">BFSI ADVISORY · MUMBAI</p>
          </div>
          <h2 style="font-family: Georgia, serif; color: #0d1b2e; font-size: 1.4rem; margin-bottom: 0.75rem;">Thank you, ${safeName}.</h2>
          <p style="color: #555; line-height: 1.8; margin-bottom: 1rem;">We've received your discovery call request from <strong>${safeInstitution}</strong>. We will get back to you within 1 business day to confirm a convenient time for a 30-minute call.</p>
          <p style="color: #555; line-height: 1.8; margin-bottom: 2rem;">In the meantime, you can reach us directly at <a href="tel:+919833823262" style="color: #c9a84c;">+91-9833823262</a> or connect on <a href="https://linkedin.com/in/sureshchelikani" style="color: #c9a84c;">LinkedIn</a>.</p>
          <div style="border-top: 1px solid #eee; padding-top: 1.5rem; font-size: 0.78rem; color: #aaa;">
            <p>Gyaan Pravaha · Mumbai, India · gyaanpravaha.com</p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Contact API error:', message)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.', detail: message },
      { status: 500 }
    )
  }
}
