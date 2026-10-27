// api/contact.js
import nodemailer from 'nodemailer';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const oneLine = (value = '') => String(value).replace(/[\r\n]+/g, ' ').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message, token } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message fields are required.' });
  }
  if (!token) {
    return res.status(400).json({ error: 'reCAPTCHA verification is required.' });
  }

  // 1. Verify reCAPTCHA on the server
  const recaptchaSecret = process.env.RECAPTCHA_SECRET;
  if (!recaptchaSecret) {
    console.error('Missing RECAPTCHA_SECRET environment variable.');
    return res.status(500).json({ error: 'Server is not configured correctly.' });
  }

  try {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: recaptchaSecret, response: token }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return res.status(500).json({ error: 'Could not verify reCAPTCHA.' });
  }

  // 2. Send the email
  const user = process.env.OUTLOOK_USER;
  const pass = process.env.OUTLOOK_PASSWORD;

  if (!user || !pass) {
    console.error('Missing Outlook credentials in environment variables.');
    return res.status(500).json({ error: 'Server is not configured correctly.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // upgrades to TLS automatically (STARTTLS)
    auth: { user, pass },
  });

  const safeFirst = escapeHtml(firstName);
  const safeLast = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    await transporter.sendMail({
      from: `"Petrotek Web Inquiry" <${user}>`,
      to: 'contactus@petrotek.com',
      replyTo: oneLine(email),
      subject: oneLine(`New Website Inquiry: ${firstName || ''} ${lastName || ''}`),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px;">
          <h2 style="color: #972037; border-bottom: 2px solid #972037; padding-bottom: 8px;">
            New Website Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${safeFirst} ${safeLast}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #972037;">${safeEmail}</a></p>
          <div style="margin-top: 16px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #972037; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="margin-top: 8px; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SMTP Delivery Error:', error);
    return res.status(500).json({ error: 'Failed to send your message. Please try again later.' });
  }
}