"use client";

import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl("Hi! I’d like to chat about my event.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
      >
        <Button className="rounded-full h-12 w-12 p-0 bg-primary text-primary-foreground shadow-lg hover:opacity-90">
          <span className="sr-only">Chat on WhatsApp</span>
          {/* Simple chat glyph using text to avoid external icons */}
          <span aria-hidden="true" className="text-lg">
            ✉️
          </span>
        </Button>
      </a>
    </div>
  );
}
