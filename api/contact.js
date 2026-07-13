import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, phone, service, note } = req.body

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ success: false, error: 'All fields are required.' })
  }

  // Server-side email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, error: 'Invalid email address format.' })
  }

  // Server-side phone number validation
  const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/
  if (!phoneRegex.test(phone.trim())) {
    return res.status(400).json({ success: false, error: 'Invalid phone number format.' })
  }

  console.log('Environment Debug:', {
    SMTP_USER_exists: !!process.env.SMTP_USER,
    SMTP_PASS_exists: !!process.env.SMTP_PASS,
    RECEIVER_EMAIL_exists: !!process.env.RECEIVER_EMAIL,
  })

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Beautiful HTML Email Template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #f8fafc;
          margin: 0;
          padding: 0;
          color: #334155;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        .header {
          background-color: #0A1E3D;
          padding: 32px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .content {
          padding: 32px;
        }
        .welcome {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 24px;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }
        .details-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        .details-table td.label {
          font-weight: 700;
          color: #0A1E3D;
          width: 30%;
        }
        .details-table td.value {
          color: #334155;
        }
        .footer {
          background-color: #f8fafc;
          padding: 24px;
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          border-top: 1px solid #f1f5f9;
        }
        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          background-color: #ffedd5;
          color: #ea580c;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Lead Received</h1>
        </div>
        <div class="content">
          <p class="welcome">Hey Team 👋,<br>You have received a new growth audit request/lead inquiry from the website. Here are the details:</p>
          
          <table class="details-table">
            <tr>
              <td class="label">Name:</td>
              <td class="value">${name}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td class="value">${phone}</td>
            </tr>
            <tr>
              <td class="label">Service:</td>
              <td class="value"><span class="badge">${service}</span></td>
            </tr>
            ${note ? `
            <tr>
              <td class="label">Note:</td>
              <td class="value" style="white-space: pre-wrap;">${note}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Adample. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"Adample Website" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
    subject: `🚀 New Lead: ${name} (${service})`,
    html: htmlContent,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Nodemailer Error:', error)
    return res.status(500).json({ success: false, error: 'Failed to send email. Please check server credentials.' })
  }
}
