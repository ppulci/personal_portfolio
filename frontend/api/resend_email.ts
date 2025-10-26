import type { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email: emailRaw, message } = await req.json();

    if (!name || !emailRaw || !message) {
      return new Response(
        JSON.stringify({ error: "All fields (name, email, message) are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const email = emailRaw.toString();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await resend.emails.send({
      from: "Portfolio Website <contact@peterpulcini.ca>",
      to: process.env.MY_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div>
          <p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ status: "sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: any) {
    console.error("Send email error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong sending the message." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
