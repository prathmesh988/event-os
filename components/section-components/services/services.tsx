"use client";

import { Card, CardContent } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { gaps, typography, components, responsiveSpacing } from "@/constants";
import {
  Zap,
  Sofa,
  Music,
  Camera,
  FileText,
  Users,
  Volume2,
  Palette,
  Sparkles,
  Heart,
  Plus,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    title: "Lighting & Production",
    description:
      "Professional lighting setups and production services to create the perfect ambiance for your event",
    icon: Zap,
    category: "Technical",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Furniture Rentals",
    description:
      "Premium furniture and decor rentals to transform any space into your dream venue",
    icon: Sofa,
    category: "Decor",
    gradient: "from-brown-500 to-amber-500",
  },
  {
    title: "DJ Services",
    description:
      "Professional DJs and sound systems to keep your guests entertained throughout the celebration",
    icon: Music,
    category: "Entertainment",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Photography",
    description:
      "Capture every precious moment with our professional photography and videography services",
    icon: Camera,
    category: "Media",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Wedding Invites",
    description:
      "Custom-designed wedding invitations and stationery to set the tone for your special day",
    icon: FileText,
    category: "Design",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Vendor Management",
    description:
      "Complete coordination and management of all vendors to ensure seamless event execution",
    icon: Users,
    category: "Management",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Dhol Services",
    description:
      "Traditional dhol players and live music to add cultural vibrancy to your celebrations",
    icon: Volume2,
    category: "Entertainment",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Mehendi Artists",
    description:
      "Skilled mehendi artists creating beautiful traditional and contemporary henna designs",
    icon: Palette,
    category: "Beauty",
    gradient: "from-green-600 to-teal-500",
  },
  {
    title: "Make-up Artists",
    description:
      "Professional makeup artists to ensure you look stunning on your special day",
    icon: Sparkles,
    category: "Beauty",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Tattoo Artists",
    description:
      "Temporary tattoo artists for unique and personalized body art experiences",
    icon: Heart,
    category: "Beauty",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const CATEGORIES = [
  "All Services",
  "Technical",
  "Decor",
  "Entertainment",
  "Media",
  "Design",
  "Management",
  "Beauty",
];

export function Services() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <div className="space-y-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="h-full bg-card/95 backdrop-blur-md border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] group overflow-hidden"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-1 right-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service content */}
                  <div className="flex-1 space-y-4">
                    <h3
                      className={`${typography.body.lg} ${typography.weight.bold} text-foreground group-hover:text-primary transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${typography.body.sm} text-muted-foreground leading-relaxed`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Action button */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* "& More" Card */}
          <Card className="h-full bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md border-2 border-dashed border-primary/60 hover:border-primary/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] group">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/30 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/40">
                <Plus className="w-8 h-8 text-primary" />
              </div>

              <h3
                className={`${typography.body.lg} ${typography.weight.bold} text-primary mb-4`}
              >
                & Many More
              </h3>

              <p
                className={`${typography.body.sm} text-muted-foreground leading-relaxed mb-6`}
              >
                We provide comprehensive event services tailored to your
                specific needs and requirements.
              </p>

              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                <span>Get Custom Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
      </div>
    </div>
  );
}
