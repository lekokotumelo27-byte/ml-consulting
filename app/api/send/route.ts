import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// This stops Vercel from trying to "collect data" during the build
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { client_name, client_email, total_price, duration, services } = body;

    // We initialize Resend INSIDE the function so it doesn't crash the build
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'M.L Consulting <onboarding@resend.dev>',
      to: client_email,
      subject: `Project Agreement: M.L Consulting x ${client_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 40px; color: #0f172a;">
          <div style="text-align: center; border-bottom: 3px solid #0f172a; padding-bottom: 20px;">
            <h1 style="margin: 0; font-size: 22px;">M.L CONSULTING</h1>
            <p style="margin: 5px 0 0; font-size: 10px; color: #2563eb; font-weight: bold; letter-spacing: 3px;">SYSTEMS ARCHITECTURE</p>
          </div>
          <div style="margin-top: 30px;">
            <p style="font-size: 10px; font-weight: bold; color: #64748b; margin: 0;">OFFICIAL SERVICE AGREEMENT</p>
            <h2 style="font-size: 20px; margin-top: 5px;">Prepared for: ${client_name}</h2>
          </div>
          <div style="margin-top: 30px; background: #f8fafc; padding: 20px; border-radius: 4px;">
            <p style="font-size: 10px; font-weight: bold; color: #0f172a; margin-bottom: 15px; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px;">ENGINEERING SCOPE</p>
            <ul style="padding-left: 0; list-style: none;">
              ${services.map((s: string) => `<li style="font-size: 13px; font-weight: bold; margin-bottom: 10px;">✓ ${s.toUpperCase()}</li>`).join('')}
            </ul>
          </div>
          <div style="margin-top: 30px; background: #0f172a; color: white; padding: 20px; border-radius: 4px;">
             <p style="font-size: 9px; color: #60a5fa; margin: 0; font-weight: bold;">TOTAL INVESTMENT</p>
             <h3 style="margin: 5px 0 0; font-size: 18px;">${total_price}</h3>
             <p style="font-size: 9px; color: #64748b; margin-top: 10px; font-weight: bold;">PROJECT DURATION: ${duration}</p>
          </div>
          <div style="margin-top: 50px; background: #eff6ff; padding: 30px; border-radius: 8px; text-align: center; border: 1px solid #dbeafe;">
            <p style="font-style: italic; color: #1e3a8a; font-size: 14px; margin: 0;">
              "Thank you for choosing M.L Consulting. We engineer the digital engines that drive your business forward."
            </p>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #0f172a; font-size: 15px; margin: 0;">Junior Tumelo Malapela</p>
              <p style="color: #2563eb; font-size: 10px; font-weight: bold; margin: 5px 0 0;">CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}