import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  console.log("[v0] Inquiry received:", data)

  // In a real app, send emails or push to CRM here.
  return NextResponse.json({ ok: true })
}
