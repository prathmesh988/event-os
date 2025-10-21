import { NextResponse } from "next/server"

export async function GET() {
  const posts = Array.from({ length: 8 }).map((_, i) => ({
    id: String(i + 1),
    image: `/placeholder.svg?height=500&width=500&query=event%20highlight%20${i + 1}`,
    caption: `Event highlight #${i + 1}`,
  }))
  return NextResponse.json({ posts })
}
