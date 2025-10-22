"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/shared/ui/card";
import { gaps, typography } from "@/constants";

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
      <h2 className={`${typography.heading.h2} mb-6`}>Testimonials</h2>
      <div
        ref={ref}
        className={`flex ${gaps.element.comfortable} overflow-x-auto snap-x snap-mandatory pb-2`}
        aria-label="Client testimonials"
      >
        {TESTIMONIALS.map((t, idx) => (
          <Card
            key={idx}
            className="min-w-[280px] md:min-w-[360px] snap-center"
          >
            <CardContent className="p-6">
              <p className={`${typography.body.lg} leading-relaxed`}>
                "{t.quote}"
              </p>
              <p className={`mt-2 ${typography.body.sm} text-muted-foreground`}>
                {t.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
