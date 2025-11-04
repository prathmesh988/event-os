"use client";

import { Card, CardContent } from "@/components/shared/ui/card";
import { gaps, typography } from "@/constants";

export function ContactMap() {
  return (
    <div className={`grid ${gaps.responsive.lg} md:grid-cols-2`}>
      <Card>
        <CardContent className="p-6">
          <h3 className={`${typography.heading.h3}`}>Contact</h3>
          <ul className={`mt-4 ${gaps.element.tight}`}>
            <li>
              <span className={typography.weight.medium}>Phone:</span>{" "}
              <a className="underline" href="tel:+911234567890">
                +91 8888397597
              </a>
            </li>

            <li>
              <span className={typography.weight.medium}>Address:</span> M G D
              Tale CREATRIX | Leading Event Management & Best Wedding Planners
              in Pune Flat No-09, 3rd Floor, Shreeyash Apartment, Appasaheb
              Kulkarni Path, Navasahyadri Society, Ganesh Nagar, Karvenagar,
              Pune, Maharashtra 411052
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
