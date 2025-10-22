"use client";

import { Button } from "@/components/shared/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  typography,
  buttonSizes,
  iconSizes,
  responsiveSpacing,
  gaps,
  containers,
} from "@/constants";

export function BookingCalendarHero() {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${responsiveSpacing.sectionY} overflow-hidden ${responsiveSpacing.containerX}`}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black z-0" />
      {/* Content Container */}
      <div
        className={`relative z-20 container mx-auto ${responsiveSpacing.containerX} text-center`}
      >
        <div
          className={`${containers["2xl"]} mx-auto ${responsiveSpacing.blockGap}`}
        >
          {/* Large Hero Text with Premium Typography */}
          <h1
            className={`${typography.display["2xl"]} ${typography.weight.black} text-white tracking-tighter animate-fade-in drop-shadow-lg leading-tight ${responsiveSpacing.contentGap}`}
          >
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
          <div className={`animate-slide-up ${responsiveSpacing.cardGap}`}>
            <h2
              className={`${typography.heading.h2} ${typography.weight.bold} text-pink-300 tracking-wide animate-bounce-in drop-shadow-md`}
            >
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
          <div
            className={`glass-effect rounded-3xl border border-white/20 p-8 md:p-12 lg:p-16 animate-scale-in premium-hover ${responsiveSpacing.blockGap}`}
          >
            <div className={responsiveSpacing.cardGap}>
              <h3
                className={`${typography.heading.h1} ${typography.weight.black} text-white tracking-tight drop-shadow-md`}
              >
                Booking Calendar
              </h3>
              <p
                className={`${typography.body.xl} text-white/90 ${typography.weight.light} drop-shadow-sm ${containers.lg} mx-auto`}
              >
                Choose your perfect date
              </p>
            </div>

            {/* Premium Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row ${gaps.responsive.lg} justify-center items-stretch sm:items-center`}
            >
              <Button
                size="lg"
                className={`group relative ${buttonSizes.touchTarget.large} bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 md:px-12 py-4 md:py-6 ${typography.body.lg} ${typography.weight.bold} rounded-full shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 premium-hover`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Calendar className={`${iconSizes.md} mr-3`} />
                  Open Calendar
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`group relative ${buttonSizes.touchTarget.large} border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 md:px-12 py-4 md:py-6 ${typography.body.lg} ${typography.weight.semibold} rounded-full backdrop-blur-md transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-white/10 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Clock
                    className={`${iconSizes.responsive.md} mr-2 md:mr-3`}
                  />
                  <span>Check Availability</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Premium Info Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 ${gaps.responsive.lg} animate-slide-up`}
          >
            <div
              className={`glass-effect rounded-2xl p-6 md:p-8 border border-white/20 premium-hover group ${responsiveSpacing.cardGap}`}
            >
              <div
                className={`${iconSizes.responsive["2xl"]} bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Calendar className={`${iconSizes.responsive.xl} text-white`} />
              </div>
              <div className={responsiveSpacing.contentGap}>
                <h4
                  className={`text-white ${typography.weight.bold} ${typography.body.lg} drop-shadow-sm`}
                >
                  Easy Booking
                </h4>
                <p
                  className={`text-white/80 leading-relaxed ${typography.body.sm}`}
                >
                  Select your perfect date in just a few clicks with our
                  intuitive interface
                </p>
              </div>
            </div>

            <div
              className={`glass-effect rounded-2xl p-6 md:p-8 border border-white/20 premium-hover group ${responsiveSpacing.cardGap}`}
            >
              <div
                className={`${iconSizes.responsive["2xl"]} bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Clock className={`${iconSizes.responsive.xl} text-white`} />
              </div>
              <div className={responsiveSpacing.contentGap}>
                <h4
                  className={`text-white ${typography.weight.bold} ${typography.body.lg} drop-shadow-sm`}
                >
                  Real-time Availability
                </h4>
                <p
                  className={`text-white/80 leading-relaxed ${typography.body.sm}`}
                >
                  See available slots updated instantly for seamless planning
                </p>
              </div>
            </div>

            <div
              className={`glass-effect rounded-2xl p-6 md:p-8 border border-white/20 premium-hover group ${responsiveSpacing.cardGap}`}
            >
              <div
                className={`${iconSizes.responsive["2xl"]} bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <MapPin className={`${iconSizes.responsive.xl} text-white`} />
              </div>
              <div className={responsiveSpacing.contentGap}>
                <h4
                  className={`text-white ${typography.weight.bold} ${typography.body.lg} drop-shadow-sm`}
                >
                  Perfect Venues
                </h4>
                <p
                  className={`text-white/80 leading-relaxed ${typography.body.sm}`}
                >
                  Premium locations carefully curated for your special day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
