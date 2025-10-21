"use client";

import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/shared/booking-modal";

export function Hero() {
  const waMessage =
    "Hi! I'd like to check availability for my event. Could you help me with dates and packages?";
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <header
      className="relative min-h-screen flex items-center justify-center"
      ref={sectionRef}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      {/* Hero content (motion entrance) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 bg-background/0"
      >
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-pretty text-4xl md:text-6xl font-semibold text-white drop-shadow-lg">
              Turn Your Dream Events into Reality
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-2xl text-white/90 drop-shadow-md">
              Book your next event in just 3 clicks – seamless planning from
              venue to vendors.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Button
                onClick={() => setBookingOpen(true)}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              >
                Book Now
              </Button>
              <a
                href={whatsappUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <Button
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </header>
  );
}
