import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { companyInfo } from '@/lib/data/company';

interface InquiryData {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  emailSent: boolean;
}

// Ensure the local storage directory and file exist for zero lead loss
const INQUIRIES_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(INQUIRIES_DIR, 'inquiries.json');

function saveInquiryLocally(inquiry: InquiryData) {
  try {
    if (!fs.existsSync(INQUIRIES_DIR)) {
      fs.mkdirSync(INQUIRIES_DIR, { recursive: true });
    }

    let existing: InquiryData[] = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      const content = fs.readFileSync(INQUIRIES_FILE, 'utf8');
      try {
        existing = JSON.parse(content);
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }
    }

    existing.unshift(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf8');
  } catch (err) {
    console.error('[CONTACT API] Failed to save inquiry locally:', err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Basic Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    const inquiryId = `INQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const timestamp = new Date().toISOString();

    const recipientEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.SMTP_RECEIVER ||
      companyInfo.contact.email.info ||
      'info@palmhills-gulf.com';

    let emailSent = false;
    let emailError: string | null = null;

    // Check if SMTP credentials are provided
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const formattedDate = new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Riyadh',
          dateStyle: 'full',
          timeStyle: 'medium',
        });

        // 1. Send Notification Email to Corporate Inbox
        await transporter.sendMail({
          from: `"Palm Hills Gulf Website" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `🔔 New Client Inquiry: ${name} ${company ? `(${company})` : ''}`,
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
                .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08); }
                .header { background: linear-gradient(135deg, #0b1120 0%, #0f172a 100%); padding: 32px; text-align: center; color: #ffffff; border-bottom: 3px solid #0284c7; }
                .badge { display: inline-block; padding: 6px 14px; background: rgba(2, 132, 199, 0.25); border: 1px solid rgba(56, 189, 248, 0.5); color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-radius: 9999px; margin-bottom: 12px; }
                .title { font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; }
                .body { padding: 32px; }
                .item-row { margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #f1f5f9; }
                .item-label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
                .item-value { font-size: 16px; font-weight: 600; color: #0f172a; }
                .item-value a { color: #0284c7; text-decoration: none; }
                .item-value a:hover { text-decoration: underline; }
                .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
                .footer { background: #f1f5f9; padding: 20px 32px; font-size: 12px; color: #64748b; text-align: center; }
                .btn { display: inline-block; background: #0284c7; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; text-decoration: none; margin-top: 16px; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">
                  <div class="badge">New Lead Notification</div>
                  <h1 class="title">Palm Hills Gulf Client Inquiry</h1>
                </div>
                <div class="body">
                  <div class="item-row">
                    <div class="item-label">Client Name</div>
                    <div class="item-value">${name}</div>
                  </div>

                  <div class="item-row">
                    <div class="item-label">Contact Phone</div>
                    <div class="item-value">
                      <a href="tel:${phone}">${phone}</a>
                    </div>
                  </div>

                  <div class="item-row">
                    <div class="item-label">Email Address</div>
                    <div class="item-value">
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>

                  ${
                    company
                      ? `
                  <div class="item-row">
                    <div class="item-label">Company / Organization</div>
                    <div class="item-value">${company}</div>
                  </div>
                  `
                      : ''
                  }

                  <div class="item-row" style="border-bottom: none;">
                    <div class="item-label">Project Scope & Message</div>
                    <div class="message-box">${message}</div>
                  </div>

                  <div style="text-align: center;">
                    <a href="mailto:${email}?subject=RE: Palm Hills Gulf Inquiry" class="btn">
                      Reply Directly to Client
                    </a>
                  </div>
                </div>
                <div class="footer">
                  Received via palmhills-gulf.com on ${formattedDate} (Riyadh Time)<br>
                  Reference ID: ${inquiryId}
                </div>
              </div>
            </body>
            </html>
          `,
        });

        emailSent = true;
        console.log(`[CONTACT API] Email sent successfully to corporate inbox: ${recipientEmail}`);
      } catch (err: unknown) {
        emailError = err instanceof Error ? err.message : String(err);
        console.error('[CONTACT API] SMTP delivery failed:', emailError);
      }
    } else {
      console.log(
        `[CONTACT API] SMTP credentials not set in .env.local. Inquiry saved locally to data/inquiries.json. Recipient intended: ${recipientEmail}`
      );
    }

    // Always record locally so no lead is ever lost
    saveInquiryLocally({
      id: inquiryId,
      timestamp,
      name,
      email,
      phone,
      company: company || undefined,
      message,
      emailSent,
    });

    return NextResponse.json({
      success: true,
      inquiryId,
      emailSent,
      storedLocally: true,
      message: 'Inquiry received successfully',
    });
  } catch (error: unknown) {
    console.error('[CONTACT API] Unexpected error handling request:', error);
    return NextResponse.json({ error: 'Internal server error processing inquiry' }, { status: 500 });
  }
}
