"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { gaps, typography, buttonSizes, iconSizes } from "@/constants";
import {
  Heart,
  Briefcase,
  Cake,
  Palette,
  UtensilsCrossed,
  Camera,
  Users,
  Building,
  Zap,
  Settings,
  PartyPopper,
  CandyCane,
  Gamepad2,
  LucideIcon,
} from "lucide-react";

interface PackageItem {
  icon: LucideIcon;
  label: string;
}

interface Package {
  title: string;
  icon: LucideIcon;
  items: PackageItem[];
}

const PACKAGES: Package[] = [
  {
    title: "Wedding Management",
    icon: Heart,
    items: [
      { icon: Palette, label: "Venue Decor" },
      { icon: UtensilsCrossed, label: "Catering" },
      { icon: Camera, label: "Photography" },
      { icon: Users, label: "Guest Management" },
    ],
  },
  {
    title: "Corporate Events",
    icon: Briefcase,
    items: [
      { icon: Building, label: "Venue Booking" },
      { icon: Zap, label: "AV & Stage" },
      { icon: UtensilsCrossed, label: "Catering" },
      { icon: Settings, label: "Logistics" },
    ],
  },
  {
    title: "Birthday Parties",
    icon: Cake,
    items: [
      { icon: PartyPopper, label: "Theme Decor" },
      { icon: CandyCane, label: "Cakes & Snacks" },
      { icon: Gamepad2, label: "Games" },
      { icon: Camera, label: "Photography" },
    ],
  },
];

export function Packages() {
  return (
    <div className="w-full">
      <h2 className={`${typography.heading.h2} mb-6`}>Packages & Services</h2>
      <div
        className={`grid grid-cols-1 ${gaps.element.comfortable} md:grid-cols-2 lg:grid-cols-3 w-full`}
      >
        {PACKAGES.map((pkg) => {
          const IconComponent = pkg.icon;
          return (
            <Card
              key={pkg.title}
              className="w-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IconComponent className={`${iconSizes.lg}`} />
                  <CardTitle className={typography.heading.h3}>
                    {pkg.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className={`space-y-3 mb-6`}>
                  {pkg.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-3">
                        <ItemIcon
                          className={`${iconSizes.base} text-muted-foreground`}
                        />
                        <span className={typography.body.base}>
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4">
                  <a
                    href={whatsappUrl(
                      `Hi! I'm interested in "${pkg.title}". Could I get a custom quote?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`${buttonSizes.sizes.md} w-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity`}
                    >
                      Get Quote
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
