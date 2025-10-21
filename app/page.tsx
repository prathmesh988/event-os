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

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black">
      <FixedVideoBackground />
      {/* Navigation */}
      <div className="relative z-50">
        <TopBar />
      </div>

      <div className="relative z-10 pt-16">
        <Hero />
      </div>
      <div className="relative z-10">
        <BookingCalendarHero />
      </div>

      <section id="events" className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Amazing Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the magic we create
            </p>
          </div>
          <EventsGrid />
        </div>
      </section>

      {/* Wave Transition */}

      {/* Packages Section */}
      <section id="packages" className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Event Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Perfect plans for every celebration
            </p>
          </div>
          <Packages />
        </div>
      </section>

      {/* Wave Transition */}

      {/* Booking Section */}
      <section id="booking" className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Event
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's make your dream event reality
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
      <EnhancedWaveTransition />

      {/* Calendar Section with Video Background */}
      <section className="relative z-10 overflow-hidden min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Check Availability
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              Find your perfect date
            </p>
          </div>
          <BookingCalendar />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Happy Clients
            </h2>
            <p className="text-xl text-muted-foreground">
              What our customers say about us
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Gallery Section with Video Background */}
      <section
        id="gallery"
        className="relative z-10 overflow-hidden min-h-screen flex items-center justify-center py-20"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Event Gallery
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              Moments that matter
            </p>
          </div>
          <Suspense>
            <InstagramFeed />
          </Suspense>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Event Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Manage your events with ease
            </p>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
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
