import { Suspense } from "react";
import { Hero } from "@/components/section-components/hero/hero";
import { EventsGrid } from "@/components/section-components/events/events-grid";
import { Packages } from "@/components/section-components/packages/packages";
import { BookingForm } from "@/components/section-components/booking/booking-form";
import { Testimonials } from "@/components/section-components/testimonials/testimonials";
import { InstagramFeed } from "@/components/section-components/gallery/instagram-feed";
import { ContactMap } from "@/components/section-components/contact/contact-map";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { DashboardPreview } from "@/components/section-components/dashboard/dashboard-preview";
import { BookingCalendar } from "@/components/section-components/booking/booking-calendar";
import { BookingCalendarHero } from "@/components/section-components/booking/booking-calendar-hero";
import { TopBar } from "@/components/section-components/navigation/top-bar";
import { EnhancedWaveTransition } from "@/components/shared/enhanced-wave-transition";
import FixedVideoBackground from "@/components/shared/fixed-video-background";
import { responsiveSpacing, components, containers } from "@/constants";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Fixed Video Background for parallax effect across entire page */}
      <FixedVideoBackground />

      {/* Navigation */}
      <div className="relative z-50">
        <TopBar />
      </div>

      {/* Hero Section with proper spacing */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Main Featured Section */}
      <div className="relative z-10">
        <BookingCalendarHero />
      </div>

      {/* Events Section with improved spacing */}
      <section
        id="events"
        className={`relative z-10 bg-background ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>
              Our Amazing Events
            </h2>
            <p className={components.sectionHeader.description}>
              Discover the magic we create
            </p>
          </div>
          <EventsGrid />
        </div>
      </section>

      {/* Packages Section with improved spacing */}
      <section
        id="packages"
        className={`relative z-10 bg-background ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>Event Packages</h2>
            <p className={components.sectionHeader.description}>
              Perfect plans for every celebration
            </p>
          </div>
          <Packages />
        </div>
      </section>

      {/* Booking Section with improved spacing */}
      <section
        id="booking"
        className={`relative z-10 bg-background ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>Book Your Event</h2>
            <p className={components.sectionHeader.description}>
              Let's make your dream event reality
            </p>
          </div>
          <div className={`${containers.xl} mx-auto`}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <EnhancedWaveTransition />

      {/* Calendar Section with improved spacing */}
      <section
        className={`relative z-10 overflow-hidden min-h-screen flex items-center justify-center ${responsiveSpacing.sectionY}`}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div
          className={`relative z-10 container mx-auto ${responsiveSpacing.containerX}`}
        >
          <div className={components.sectionHeader.container}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Check Availability
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Find your perfect date
            </p>
          </div>
          <BookingCalendar />
        </div>
      </section>

      {/* Testimonials Section with improved spacing */}
      <section
        id="testimonials"
        className={`relative z-10 bg-background ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>Happy Clients</h2>
            <p className={components.sectionHeader.description}>
              What our customers say about us
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Gallery Section with improved spacing */}
      <section
        id="gallery"
        className={`relative z-10 overflow-hidden min-h-screen flex items-center justify-center ${responsiveSpacing.sectionY}`}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div
          className={`relative z-10 container mx-auto ${responsiveSpacing.containerX}`}
        >
          <div className={components.sectionHeader.container}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Event Gallery
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Moments that matter
            </p>
          </div>
          <Suspense>
            <InstagramFeed />
          </Suspense>
        </div>
      </section>

      {/* Dashboard Section with improved spacing */}
      <section
        id="dashboard"
        className={`relative z-10 bg-background ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>Event Dashboard</h2>
            <p className={components.sectionHeader.description}>
              Manage your events with ease
            </p>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Contact Section with improved spacing */}
      <section
        id="contact"
        className={`relative z-10 bg-muted/50 ${responsiveSpacing.sectionY}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className={components.sectionHeader.container}>
            <h2 className={components.sectionHeader.title}>Get In Touch</h2>
            <p className={components.sectionHeader.description}>
              Ready to plan your perfect event?
            </p>
          </div>
          <ContactMap />
        </div>
      </section>

      {/* Floating Elements */}
      <div className="relative z-50">
        <FloatingWhatsApp />
      </div>
    </main>
  );
}
