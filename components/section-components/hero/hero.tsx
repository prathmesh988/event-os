"use client";

import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/shared/booking-modal";
import {
  typography,
  buttonSizes,
  gaps,
  responsiveSpacing,
  containers,
} from "@/constants";

export function Hero() {
  const waMessage =
    "Hi! I'd like to check availability for my event. Could you help me with dates and packages?";
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <header
      className={`relative min-h-screen flex items-center justify-center ${responsiveSpacing.containerX} py-20 md:py-24`}
      ref={sectionRef}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      {/* Hero content (motion entrance) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={containers.xl}>
            <h1
              className={`text-pretty ${typography.display["2xl"]} ${typography.weight.semibold} text-white drop-shadow-lg leading-tight`}
            >
              Turn Your Dream Events into Reality
            </h1>
            <p
              className={`mt-6 md:mt-8 ${typography.body.xl} leading-relaxed ${containers.lg} text-white/90 drop-shadow-md`}
            >
              Book your next event in just 3 clicks – seamless planning from
              venue to vendors.
            </p>
            <div
              className={`mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center ${gaps.responsive.lg}`}
            >
              <Button
                onClick={() => setBookingOpen(true)}
                size="lg"
                className={`${buttonSizes.sizes.lg} bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 font-medium`}
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
                  size="lg"
                  className={`${buttonSizes.sizes.lg} border-white/50 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm font-medium`}
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
