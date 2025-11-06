"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { gaps, typography, iconSizes, packages } from "@/constants";
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

// Icon mapping for package services
const serviceIcons: Record<string, LucideIcon> = {
  "Venue Decor": Palette,
  Catering: UtensilsCrossed,
  Photography: Camera,
  "Guest Management": Users,
  "Venue Booking": Building,
  "AV & Stage": Zap,
  Logistics: Settings,
  "Theme Decor": PartyPopper,
  "Cakes & Snacks": CandyCane,
  Games: Gamepad2,
};

// Package type mapping for main icons
const packageIcons: Record<string, LucideIcon> = {
  "Wedding Management": Heart,
  "Corporate Events": Briefcase,
  "Birthday Parties": Cake,
};

interface PackageItem {
  icon: LucideIcon;
  label: string;
}

interface Package {
  title: string;
  icon: LucideIcon;
  items: PackageItem[];
}

export function Packages() {
  // Transform packages from constants to match component structure
  const transformedPackages: Package[] = packages.items.map((pkg) => ({
    title: pkg.title,
    icon: packageIcons[pkg.title] || Briefcase,
    items: pkg.services.map((service) => ({
      icon: serviceIcons[service] || Settings,
      label: service,
    })),
  }));
  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-1 ${gaps.element.comfortable} md:grid-cols-2 lg:grid-cols-3 w-full`}
      >
        {transformedPackages.map((pkg) => {
          const IconComponent = pkg.icon;
          return (
            <Card
              key={pkg.title}
              className="w-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative shadow-lg hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <IconComponent
                      className={`${iconSizes.lg} text-primary group-hover:text-primary/80 transition-colors`}
                    />
                  </div>
                  <CardTitle
                    className={`${typography.heading.h3} text-card-foreground group-hover:text-primary transition-colors`}
                  >
                    {pkg.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className={`space-y-3 mb-6`}>
                  {pkg.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 group/item"
                      >
                        <ItemIcon
                          className={`${iconSizes.sm} text-primary group-hover/item:text-primary/80 transition-colors`}
                        />
                        <span
                          className={`${typography.body.sm} text-muted-foreground group-hover:text-foreground transition-colors`}
                        >
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <a
                    href={whatsappUrl(packages.cta.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {packages.cta.text}
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
