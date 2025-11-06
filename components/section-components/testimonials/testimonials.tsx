"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/shared/ui/card";
import { gaps, typography, components, responsiveSpacing } from "@/constants";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "They made our wedding unforgettable — everything was seamless!",
    author: "Riya & Karan",
    location: "Delhi",
    rating: 5,
    event: "Wedding",
  },
  {
    quote: "Flawless corporate summit. Our attendees loved the experience.",
    author: "A. Mehra",
    location: "CTO, Tech Corp",
    rating: 5,
    event: "Corporate Event",
  },
  {
    quote: "Professional, creative, and on time. Highly recommended!",
    author: "N. Singh",
    location: "Mumbai",
    rating: 5,
    event: "Birthday Party",
  },
  {
    quote: "Outstanding service and attention to detail. Perfect execution!",
    author: "S. Sharma",
    location: "Bangalore",
    rating: 5,
    event: "Anniversary",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Remove duplicate header since it's handled in page.tsx */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          {/* Grid layout for larger screens, scroll for mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile scroll layout */}
          <div
            ref={ref}
            className={`md:hidden flex ${gaps.element.comfortable} overflow-x-auto snap-x snap-mandatory pb-4`}
            aria-label="Client testimonials"
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="min-w-[280px] snap-center">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
        </div>

        {/* Quote text */}
        <div className="flex-1 mb-6">
          <p
            className={`${typography.body.base} leading-relaxed text-foreground/90 italic`}
          >
            "{testimonial.quote}"
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Author info */}
        <div className="border-t border-border/30 pt-4">
          <p className={`${typography.body.sm} font-semibold text-foreground`}>
            {testimonial.author}
          </p>
          <p className={`${typography.body.xs} text-muted-foreground`}>
            {testimonial.location}
          </p>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {testimonial.event}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
