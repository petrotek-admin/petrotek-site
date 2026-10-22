// api/contact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: missing RESEND_API_KEY.' });
  }

  const resend = new Resend(apiKey);
  const { firstName, lastName, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      // 1. MUST use onboarding@resend.dev until your own custom domain is verified
      from: 'Petrotek Inquiries <onboarding@resend.dev>',
      // 2. Must be the exact email address you registered your Resend account with
      to: ['cjmax88@gmail.com'],
      // 3. User's email from the form goes here so clicking 'Reply' in Gmail responds to them
      reply_to: email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br/>') : ''}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Execution error:', error);
    return res.status(500).json({ error: error.message });
  }
}