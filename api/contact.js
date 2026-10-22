// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message fields are required.' });
  }

  const user = process.env.OUTLOOK_USER;       // e.g. contact_pc@petrotek.com or petrotekadmin@petrotek.com
  const pass = process.env.OUTLOOK_PASSWORD;   // Dedicated password or App Password

  if (!user || !pass) {
    console.error('Missing Outlook credentials in environment variables.');
    return res.status(500).json({ error: 'Mail server credentials are not configured.' });
  }

  // Configure official Microsoft 365 SMTP relay
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // TLS via STARTTLS
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Petrotek Web Inquiry" <${user}>`,
      to: 'petrotekadmin@petrotek.com',
      replyTo: email, // Clicking 'Reply' in Outlook replies directly to the client
      subject: `New Website Inquiry: ${firstName || ''} ${lastName || ''}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px;">
          <h2 style="color: #972037; border-bottom: 2px solid #972037; padding-bottom: 8px;">
            New Website Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #972037;">${email}</a></p>
          <div style="margin-top: 16px; padding: 12px; background-color: #f9f9f9; border-left: 4px solid #972037; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="margin-top: 8px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SMTP Delivery Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email via Outlook.' });
  }
}