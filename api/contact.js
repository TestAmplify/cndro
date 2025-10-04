/* eslint-env node */
/* global process, Buffer */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }
  try {
    const { name, email, phone = '', company = '', subject, message, service = '' } = req.body || {}
    const missing = []
    if (!name) missing.push('name')
    if (!email) missing.push('email')
    if (!subject) missing.push('subject')
    if (!message) missing.push('message')
    if (missing.length) return res.status(400).json({ ok: false, error: `Missing: ${missing.join(', ')}` })

    const {
      MAILGUN_API_KEY,
      MAILGUN_DOMAIN,
      MAILGUN_FROM,
      MAILGUN_TO,
      MAILGUN_SUBJECT_PREFIX = '[CNDRO Contact]'
    } = process.env

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_FROM || !MAILGUN_TO) {
      return res.status(500).json({ ok: false, error: 'Mailgun not configured' })
    }

    const mgUrl = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`
    const subjectLine = `${MAILGUN_SUBJECT_PREFIX} ${subject}`.trim()
    const text = [
      'New contact form submission:',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      service ? `Service: ${service}` : null,
      'Message:',
      message
    ].filter(Boolean).join('\n')

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `

    const formData = new URLSearchParams()
    formData.append('from', MAILGUN_FROM)
    formData.append('to', MAILGUN_TO)
    formData.append('subject', subjectLine)
    formData.append('text', text)
    formData.append('html', html)

    const auth = 'Basic ' + Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')
    const resp = await fetch(mgUrl, {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '')
      return res.status(502).json({ ok: false, error: `Mailgun error: ${resp.status} ${errText}` })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}