"use client";

import { Button } from "@/components/shared/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export function BookingCalendarHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black z-0" />
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Large Hero Text with Premium Typography */}
          <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-black text-white mb-12 tracking-tighter animate-fade-in drop-shadow-lg">
            <span className="block transform hover:scale-105 transition-transform duration-700 ease-out">
              LET'S GET
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 transform hover:scale-105 transition-transform duration-700 ease-out delay-100">
              THE PARTY
            </span>
            <span className="block transform hover:scale-105 transition-transform duration-700 ease-out delay-200">
              STARTED.
            </span>
          </h1>

          {/* Subtitle with premium brand styling */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-display-sm md:text-display-md font-bold text-pink-300 mb-4 tracking-wide animate-bounce-in drop-shadow-md">
              WORK WITH WINK!
            </h2>
            {/* Premium decorative wave line with animation */}
            <div className="flex justify-center animate-scale-in">
              <svg
                className="w-48 h-6 text-pink-300 animate-pulse"
                viewBox="0 0 180 24"
                fill="currentColor"
              >
                <defs>
                  <linearGradient
                    id="waveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="currentColor"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="50%"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="0.3"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0,12 Q22,0 45,12 T90,12 T135,12 T180,12"
                  stroke="url(#waveGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Premium Booking Calendar Section */}
          <div className="glass-effect rounded-3xl border border-white/20 p-12 md:p-16 mb-16 animate-scale-in premium-hover">
            <h3 className="text-display-sm md:text-display-md font-black text-white mb-6 tracking-tight drop-shadow-md">
              Booking Calendar
            </h3>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light drop-shadow-sm">
              Choose your perfect date
            </p>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 premium-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Open Calendar
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-white/40  hover:bg-white/20 hover:border-white/60 px-12 py-6 text-xl font-semibold rounded-full backdrop-blur-md transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/10 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Check Availability
                </div>
              </Button>
            </div>
          </div>

          {/* Premium Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up">
            <div className="glass-effect rounded-2xl p-8 border border-white/20 premium-hover group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg drop-shadow-sm">
                Easy Booking
              </h4>
              <p className="text-white/80 leading-relaxed">
                Select your perfect date in just a few clicks with our intuitive
                interface
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-white/20 premium-hover group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg drop-shadow-sm">
                Real-time Availability
              </h4>
              <p className="text-white/80 leading-relaxed">
                See available slots updated instantly for seamless planning
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 border border-white/20 premium-hover group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg drop-shadow-sm">
                Perfect Venues
              </h4>
              <p className="text-white/80 leading-relaxed">
                Premium locations carefully curated for your special day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
