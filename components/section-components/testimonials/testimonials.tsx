"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/shared/ui/card";

const TESTIMONIALS = [
  {
    quote: "They made our wedding unforgettable — everything was seamless!",
    author: "Riya & Karan, Delhi",
  },
  {
    quote: "Flawless corporate summit. Our attendees loved the experience.",
    author: "A. Mehra, CTO",
  },
  {
    quote: "Professional, creative, and on time. Highly recommended!",
    author: "N. Singh",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        aria-label="Client testimonials"
      >
        {TESTIMONIALS.map((t, idx) => (
          <Card
            key={idx}
            className="min-w-[280px] md:min-w-[360px] snap-center"
          >
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">“{t.quote}”</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
