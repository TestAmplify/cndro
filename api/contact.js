/* eslint-env node */
/* eslint-env node */
/* global process, Buffer */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { name, email, phone, company, service, subject, message } = req.body || {}
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const apiKey = process.env.MAILGUN_API_KEY
    const domain = process.env.MAILGUN_DOMAIN
    const from = process.env.MAILGUN_FROM
    const to = process.env.MAILGUN_TO
    const region = process.env.MAILGUN_REGION || 'us'
    if (!apiKey || !domain || !from || !to) {
      return res.status(500).json({ error: 'Mailgun not configured' })
    }
    const base = region === 'eu' ? 'https://api.eu.mailgun.net' : 'https://api.mailgun.net'
    const form = new URLSearchParams()
    form.append('from', from)
    form.append('to', to)
    form.append('subject', `[CNDRO Contact] ${subject}`)
    form.append('text', `
Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Company: ${company || '-'}
Service: ${service || '-'}

Message:
${message}
`.trim())
    const mgRes = await fetch(`${base}/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: form.toString()
    })
    if (!mgRes.ok) {
      const text = await mgRes.text().catch(() => '')
      return res.status(502).json({ error: 'Mailgun send failed', detail: text })
    }
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Server error' })
  }
}
