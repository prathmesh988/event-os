"use client";

import { Button } from "@/components/shared/ui/button";
import { BookingModal } from "@/components/shared/booking-modal";
import { useState } from "react";
import { Play, Calendar } from "lucide-react";

export function VideoHero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow">
            Create Unforgettable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              Moments
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 text-shadow max-w-2xl mx-auto">
            Professional event planning that brings your vision to life. From
            intimate gatherings to grand celebrations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => setBookingOpen(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Start Planning
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">500+ Events</h3>
              <p className="text-white/70 text-sm">
                Successfully planned and executed
              </p>
            </div>

            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">
                100% Satisfaction
              </h3>
              <p className="text-white/70 text-sm">
                Client happiness guaranteed
              </p>
            </div>

            <div className="glass-morphism rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-white/70 text-sm">
                We're here whenever you need us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
