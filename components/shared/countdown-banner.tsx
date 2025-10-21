"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  const clamped = Math.max(0, diff)
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24))
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((clamped / (1000 * 60)) % 60)
  return { days, hours, minutes }
}

export function CountdownBanner() {
  const [target] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14) // next availability in 14 days (demo)
    return d
  })
  const [left, setLeft] = useState(getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000 * 30)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <p className="text-pretty">
          Next availability in {left.days}d {left.hours}h {left.minutes}m
        </p>
        <Link href="#booking" className="underline">
          Book now
        </Link>
      </div>
    </div>
  )
}
