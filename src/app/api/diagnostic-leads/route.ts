import { NextResponse } from "next/server";

type LeadPayload = {
  lead?: {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    sector?: string;
    size?: string;
    challenge?: string;
    role?: string;
    function?: string;
    preferredTime?: string;
  };
  result?: {
    opportunityScore?: number;
    readinessScore?: number;
    impactScore?: number;
    riskScore?: number;
    visibilityScore?: number;
    maturity?: string;
    risk?: string;
    opportunity?: string;
  };
  intake?: Record<string, unknown>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead = payload.lead;
  const fields = [lead?.name, lead?.company, lead?.phone, lead?.sector, lead?.size, lead?.challenge, lead?.role, lead?.function, lead?.preferredTime];

  if (!lead || fields.some((field) => !field?.trim()) || !lead.email || !emailPattern.test(lead.email)) {
    return NextResponse.json({ error: "Complete business profile required." }, { status: 400 });
  }

  const webhookUrl = process.env.DIAGNOSTIC_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ captured: false, reason: "integration_not_configured" }, { status: 202 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.DIAGNOSTIC_LEAD_WEBHOOK_TOKEN
          ? { authorization: `Bearer ${process.env.DIAGNOSTIC_LEAD_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        event: "diagnostic.completed",
        source: "sentientengineering.com/diagnostic",
        submittedAt: new Date().toISOString(),
        lead,
        intake: payload.intake,
        result: payload.result,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Lead delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ captured: true });
  } catch {
    return NextResponse.json({ error: "Lead delivery failed." }, { status: 502 });
  }
}
