"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

const PACKAGES = [
  {
    title: "Wedding Management",
    items: ["Venue Decor", "Catering", "Photography", "Guest Management"],
  },
  {
    title: "Corporate Events",
    items: ["Venue Booking", "AV & Stage", "Catering", "Logistics"],
  },
  {
    title: "Birthday Parties",
    items: ["Theme Decor", "Cakes & Snacks", "Games", "Photography"],
  },
];

export function Packages() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Packages & Services</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <Card key={pkg.title}>
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={whatsappUrl(
                    `Hi! I’m interested in "${pkg.title}". Could I get a custom quote?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground hover:opacity-90">
                    Get Quote
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
