import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    console.log(data)

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Site <contact@peterpulcini.ca>",
      to: process.env.MY_EMAIL!,
      subject: "Portfolio Contact Form",
      html: `
        <strong>Sender Name:</strong> ${name}<br/>
        <strong>From:</strong> ${email}<br/><br/>
        ${message.replace(/\n/g, "<br/>")}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending the message." },
      { status: 500 }
    );
  }
}
