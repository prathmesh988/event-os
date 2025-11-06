"use client";

import { Card, CardContent } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { gaps, typography, contact, siteInfo, navigation } from "@/constants";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  ArrowUp,
} from "lucide-react";

export function ContactMap() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-12">
      {/* Main Contact Section */}
      <div className={`grid ${gaps.responsive.lg} lg:grid-cols-3 gap-8`}>
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-card border border-border shadow-lg">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className={`${typography.heading.h3} mb-4`}>
                  Get In Touch
                </h3>
                <p
                  className={`${typography.body.base} text-muted-foreground leading-relaxed`}
                >
                  Ready to create your perfect event? Contact us today and let's
                  bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className={`${typography.body.sm} font-medium text-foreground`}
                    >
                      {contact.info.phone.label}
                    </p>
                    <a
                      href={contact.info.phone.href}
                      className={`${typography.body.sm} text-primary hover:underline`}
                    >
                      {contact.info.phone.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className={`${typography.body.sm} font-medium text-foreground`}
                    >
                      {contact.info.email.label}
                    </p>
                    <a
                      href={contact.info.email.href}
                      className={`${typography.body.sm} text-primary hover:underline`}
                    >
                      {contact.info.email.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className={`${typography.body.sm} font-medium text-foreground`}
                    >
                      {contact.info.hours.label}
                    </p>
                    <p
                      className={`${typography.body.sm} text-muted-foreground`}
                    >
                      {contact.info.hours.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      className={`${typography.body.sm} font-medium text-foreground mb-1`}
                    >
                      {contact.info.address.label}
                    </p>
                    <p
                      className={`${typography.body.xs} text-muted-foreground leading-relaxed`}
                    >
                      Pune, Maharashtra 411052
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 border-t border-border/30">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                  onClick={() =>
                    window.open(
                      `https://wa.me/918888397597?text=${encodeURIComponent(
                        contact.cta.whatsappMessage
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.cta.whatsapp}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="bg-card border border-border shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <iframe
                title={contact.map.title}
                aria-label={contact.map.ariaLabel}
                className="w-full h-[400px] lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={contact.map.embedUrl}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-border/30 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h4 className={`${typography.heading.h4} mb-2`}>
                {siteInfo.name}
              </h4>
              <p
                className={`${typography.body.sm} text-muted-foreground leading-relaxed`}
              >
                {siteInfo.longDescription}
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p className={`${typography.body.sm} font-medium mb-3`}>
                Follow Us
              </p>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-primary/10 hover:bg-primary/20"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-primary/10 hover:bg-primary/20"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-primary/10 hover:bg-primary/20"
                >
                  <Twitter className="w-4 h-4 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full bg-primary/10 hover:bg-primary/20"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`${typography.heading.h5} font-semibold`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`${typography.body.sm} text-muted-foreground hover:text-primary transition-colors duration-200`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className={`${typography.heading.h5} font-semibold`}>
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Wedding Planning
                </span>
              </li>
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Corporate Events
                </span>
              </li>
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Birthday Parties
                </span>
              </li>
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Anniversary Celebrations
                </span>
              </li>
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Event Decoration
                </span>
              </li>
              <li>
                <span className={`${typography.body.sm} text-muted-foreground`}>
                  Venue Booking
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-4">
            <h4 className={`${typography.heading.h5} font-semibold`}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div>
                <p
                  className={`${typography.body.xs} text-muted-foreground mb-1`}
                >
                  Phone
                </p>
                <a
                  href={contact.info.phone.href}
                  className={`${typography.body.sm} text-foreground hover:text-primary`}
                >
                  {contact.info.phone.value}
                </a>
              </div>
              <div>
                <p
                  className={`${typography.body.xs} text-muted-foreground mb-1`}
                >
                  Email
                </p>
                <a
                  href={contact.info.email.href}
                  className={`${typography.body.sm} text-foreground hover:text-primary`}
                >
                  {contact.info.email.value}
                </a>
              </div>
              <div>
                <p
                  className={`${typography.body.xs} text-muted-foreground mb-1`}
                >
                  Location
                </p>
                <p className={`${typography.body.sm} text-foreground`}>
                  Pune, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <p className={`${typography.body.sm} text-muted-foreground`}>
                © 2025 {siteInfo.name}. Made with
              </p>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <p className={`${typography.body.sm} text-muted-foreground`}>
                in India
              </p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
