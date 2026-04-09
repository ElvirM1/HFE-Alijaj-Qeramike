import { NextRequest, NextResponse } from "next/server";

// Input validation helper to prevent injection
function sanitizeText(input: unknown): string {
  if (typeof input !== "string") return "";
  // Remove any HTML tags and limit length
  return input
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 2000);
}

const ALLOWED_SERVICES = [
  "shtrim-pllakash",
  "ujësjellës",
  "nxemje-qendrore",
  "te-gjitha",
  "tjeter",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = sanitizeText(body.name);
    const email = sanitizeText(body.email);
    const phone = sanitizeText(body.phone);
    const service = sanitizeText(body.service);
    const message = sanitizeText(body.message);

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Emri i pavlefshëm" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email i pavlefshëm" },
        { status: 400 },
      );
    }

    const phoneRegex = /^[\d\s\+\-\(\)]{6,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Numër i pavlefshëm" },
        { status: 400 },
      );
    }

    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Shërbim i pavlefshëm" },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Mesazhi shumë i shkurtër" },
        { status: 400 },
      );
    }

    // Log the submission (in production, send via email service like Resend, SendGrid, etc.)
    console.log("📧 New contact submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, integrate an email service here.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'HFE-ALIJAJ Website <noreply@hfe-alijaj.com>',
    //   to: ['info@hfe-alijaj.com'],
    //   subject: `Kërkesë e re nga ${name}`,
    //   text: `Emri: ${name}\nEmail: ${email}\nTelefon: ${phone}\nShërbimi: ${service}\nMesazhi: ${message}`,
    // });

    return NextResponse.json(
      { success: true, message: "Mesazhi u dërgua me sukses" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Gabim i brendshëm i serverit" },
      { status: 500 },
    );
  }
}
