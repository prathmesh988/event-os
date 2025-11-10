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
  hero,
} from "@/constants";
import { useAdminStore } from "@/store/admin-store";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const texts = useAdminStore((s) => s.texts);

  const badge = texts["hero.badge"] || hero.badge;
  const titleGradient = texts["hero.titleGradient"] || hero.titleGradient;
  const subtitleText = texts["hero.subtitle"] || hero.subtitle;
  const ctaPrimary = texts["hero.cta.primary"] || hero.cta.primary;
  const ctaSecondary = texts["hero.cta.secondary"] || hero.cta.secondary;
  const whatsappMessage = texts["hero.whatsappMessage"] || hero.whatsappMessage;

  return (
    <header
      className={`relative min-h-screen flex items-center justify-center ${responsiveSpacing.containerX} py-20 md:py-24 overflow-hidden`}
      ref={sectionRef}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0" />

      {/* Floating glass card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-background/80 border border-border text-foreground text-sm font-medium mb-8 shadow-lg backdrop-blur-sm"
            >
              {badge}
            </motion.div>

            {/* Main heading with enhanced typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6"
            >
              Turn Your Dream
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {titleGradient}
              </span>{" "}
              into Reality
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-white/80 mb-12 max-w-3xl mx-auto"
            >
              {subtitleText}
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={() => setBookingOpen(true)}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
              >
                <span className="relative z-10">{ctaPrimary}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/80 border-border text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {ctaSecondary}
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex items-center justify-center gap-8 text-white/60 text-sm"
            >
              {hero.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-yellow-400">{indicator.icon}</span>
                  <span>{indicator.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </header>
  );
}
