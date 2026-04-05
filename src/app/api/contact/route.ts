import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'thornleyadvisoryservices@gmail.com'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY || '')
  try {
    const body = await req.json()
    const { name, institution, email, phone, practice, message } = body

    if (!name || !institution || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send notification to Suresh
    await resend.emails.send({
      from: 'Gyaan Pravaha Website <noreply@gyaanpravaha.in>',
      to: TO_EMAIL,
      reply_to: email,
      subject: `New Discovery Call Request — ${institution}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <div style="background: #0d1b2e; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.5rem;">Gyaan Pravaha</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 4px 0 0; letter-spacing: 0.1em;">NEW DISCOVERY CALL REQUEST</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Name', name],
              ['Institution', institution],
              ['Email', email],
              ['Phone', phone],
              ['Practice Area', practice || 'Not specified'],
            ].map(([label, value]) => `
              <tr>
                <td style="padding: 10px 16px; background: #fff; border: 1px solid #eee; font-size: 0.8rem; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">${label}</td>
                <td style="padding: 10px 16px; background: #fff; border: 1px solid #eee; font-size: 0.95rem; color: #1a1a1a;">${value}</td>
              </tr>
            `).join('')}
          </table>

          ${message ? `
          <div style="background: #fff; border: 1px solid #eee; border-radius: 4px; padding: 16px; margin-top: 16px;">
            <div style="font-size: 0.8rem; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
            <p style="font-size: 0.95rem; color: #333; line-height: 1.7; margin: 0;">${message}</p>
          </div>` : ''}

          <div style="margin-top: 24px; padding: 16px; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.3); border-radius: 4px; font-size: 0.85rem; color: #666;">
            Reply directly to this email to reach ${name} at ${email}
          </div>
        </div>
      `
    })

    // Send confirmation to enquirer
    await resend.emails.send({
      from: 'Gyaan Pravaha <noreply@gyaanpravaha.in>',
      to: email,
      subject: 'Your Discovery Call Request — Gyaan Pravaha',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <div style="background: #0d1b2e; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.5rem;">Gyaan Pravaha</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 0.8rem; margin: 4px 0 0; letter-spacing: 0.1em;">BFSI ADVISORY · MUMBAI</p>
          </div>
          <h2 style="font-family: Georgia, serif; color: #0d1b2e; font-size: 1.4rem; margin-bottom: 0.75rem;">Thank you, ${name}.</h2>
          <p style="color: #555; line-height: 1.8; margin-bottom: 1rem;">We've received your discovery call request from <strong>${institution}</strong>. We will get back to you within 1 business day to confirm a convenient time for a 30-minute call.</p>
          <p style="color: #555; line-height: 1.8; margin-bottom: 2rem;">In the meantime, you can reach us directly at <a href="tel:+919833823262" style="color: #c9a84c;">+91-9833823262</a> or connect on <a href="https://linkedin.com/in/sureshchelikani" style="color: #c9a84c;">LinkedIn</a>.</p>
          <div style="border-top: 1px solid #eee; padding-top: 1.5rem; font-size: 0.78rem; color: #aaa;">
            <p>Gyaan Pravaha · Mumbai, India · gyaanpravaha.in</p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error('Contact email error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
