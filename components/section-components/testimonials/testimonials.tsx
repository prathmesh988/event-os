"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/shared/ui/card";
import { gaps, typography, components, responsiveSpacing } from "@/constants";
import { useAdminStore } from "@/store/admin-store";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Golden Hour Events consistently delivers exceptional wedding celebrations at our venue. Their attention to detail and professional coordination makes every event memorable.",
    author: "JW MARRIOT",
    location: "Premium Hotel Partner",
    rating: 5,
    event: "Wedding Events",
  },
  {
    quote:
      "Professional, reliable, and creative. Golden Hour Events handles corporate conferences and events flawlessly at our property. Their team's vendor management is impressive.",
    author: "ITC GARDENIA",
    location: "Luxury Hotel Partner",
    rating: 5,
    event: "Corporate Event",
  },
  {
    quote:
      "Golden Hour Events transforms our venues into magical experiences. Their lighting, decor, and coordination excellence makes every celebration unforgettable.",
    author: "SHANGRI-LA",
    location: "Elite Hotel Partner",
    rating: 5,
    event: "Birthday Party",
  },
  {
    quote:
      "Golden Hour Events brings exceptional event management to our boutique property. Every arrangement from decor to catering coordination is handled with perfection.",
    author: "CHAMARA VAJRA",
    location: "Boutique Hotel Partner",
    rating: 5,
    event: "Anniversary",
  },
  {
    quote:
      "Outstanding event management across our properties. Golden Hour Events handles everything professionally - from lighting setups to complete vendor coordination.",
    author: "CHANCERY HOTELS",
    location: "Hotel Chain Partner",
    rating: 5,
    event: "All Events",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const adminTestimonials = useAdminStore((s) => s.testimonials);
  const source = (adminTestimonials && adminTestimonials.length > 0 ? adminTestimonials : TESTIMONIALS) as typeof TESTIMONIALS;

  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Remove duplicate header since it's handled in page.tsx */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          {/* Grid layout for larger screens, scroll for mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {source.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile scroll layout */}
          <div
            ref={ref}
            className={`md:hidden flex ${gaps.element.comfortable} overflow-x-auto snap-x snap-mandatory pb-4`}
            aria-label="Client testimonials"
          >
            {source.map((testimonial, idx) => (
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
