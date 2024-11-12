import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: 'Email sent successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        message: `Error sending email: ${error}`,
      },
      { status: 500 }
    );
  }
}
