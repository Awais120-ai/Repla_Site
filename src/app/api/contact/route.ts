import { NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/lib/site";

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(4000),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? COMPANY.email;

  if (!key) {
    return NextResponse.json(
      {
        error: "not_configured",
        message: `Email delivery is not configured. Write to ${to}.`,
      },
      { status: 503 },
    );
  }

  const { firstName, lastName, email, phone, subject, message } = parsed.data;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "REPLA Website <noreply@replatechnologies.com>",
      to: [to],
      reply_to: email,
      subject: `[REPLA] ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
