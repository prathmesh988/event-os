"use client";

import { Card, CardContent } from "@/components/shared/ui/card";

export function ContactMap() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a className="underline" href="tel:+911234567890">
                +91 12345 67890
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a className="underline" href="mailto:hello@eventplanner.demo">
                hello@eventplanner.demo
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span> Connaught Place, New
              Delhi
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <iframe
            title="Event Planner Location"
            aria-label="Google map to our area"
            className="w-full h-[320px] md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi&output=embed"
          />
        </CardContent>
      </Card>
    </div>
  );
}
