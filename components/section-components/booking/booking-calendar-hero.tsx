"use client";

import { Button } from "@/components/shared/ui/button";
import {
  Users,
  Award,
  Heart,
  Star,
  Clock,
  MapPin,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import {
  typography,
  buttonSizes,
  iconSizes,
  responsiveSpacing,
  gaps,
  containers,
} from "@/constants";

const STATS = [
  {
    number: "500+",
    label: "Events Planned",
    icon: Award,
    description: "Successful celebrations",
  },
  {
    number: "10+",
    label: "Years Experience",
    icon: Clock,
    description: "In the industry",
  },
  {
    number: "50+",
    label: "Premium Venues",
    icon: MapPin,
    description: "Carefully curated",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    icon: Heart,
    description: "Happy customers",
  },
];

const FEATURES = [
  {
    title: "Expert Planning",
    description:
      "Our experienced team handles every detail with precision and care",
    icon: Users,
  },
  {
    title: "Creative Excellence",
    description: "Innovative designs that make your event truly unforgettable",
    icon: Sparkles,
  },
  {
    title: "Quality Assurance",
    description: "Premium vendors and venues for exceptional experiences",
    icon: CheckCircle,
  },
];

export function AboutUsHero() {
  return (
    <section
      className={`relative min-h-screen bg-background flex items-center justify-center ${responsiveSpacing.sectionY} overflow-hidden ${responsiveSpacing.containerX}`}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 z-0" />

      {/* Content Container */}
      <div
        className={`relative z-20 container mx-auto ${responsiveSpacing.containerX} text-center`}
      >
        <div
          className={`${containers["2xl"]} mx-auto ${responsiveSpacing.blockGap}`}
        >
          {/* Large Hero Text */}
          <h1
            className={`${typography.display["2xl"]} ${typography.weight.black} tracking-tighter animate-fade-in drop-shadow-lg leading-tight ${responsiveSpacing.contentGap}`}
          >
            <span className="block transform hover:scale-105 transition-transform duration-700 ease-out">
              Creating Magical
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform hover:scale-105 transition-transform duration-700 ease-out delay-100">
              Moments
            </span>
          </h1>

          {/* Subtitle */}
          <div className={`animate-slide-up ${responsiveSpacing.cardGap}`}>
            <h2
              className={`${typography.heading.h2} ${typography.weight.bold} text-muted-foreground tracking-wide animate-bounce-in drop-shadow-md`}
            >
              Your Dream Event, Our Expertise
            </h2>

            {/* Decorative element */}
            <div className="flex justify-center animate-scale-in">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>

          {/* About Us Content Section */}
          <div
            className={`glass-effect rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-lg p-8 md:p-12 lg:p-16 animate-scale-in ${responsiveSpacing.blockGap}`}
          >
            <div className={responsiveSpacing.cardGap}>
              <h3
                className={`${typography.heading.h1} ${typography.weight.black} tracking-tight drop-shadow-md`}
              >
                About Our Story
              </h3>
              <p
                className={`${typography.body.xl} text-muted-foreground ${typography.weight.light} leading-relaxed ${containers.lg} mx-auto`}
              >
                We are passionate event planners dedicated to turning your
                vision into reality. With over a decade of experience in
                creating extraordinary celebrations, we specialize in weddings,
                corporate events, and special occasions that leave lasting
                impressions.
              </p>
            </div>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 lg:grid-cols-4 ${gaps.responsive.lg} ${responsiveSpacing.cardGap}`}
            >
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div
                      className={`${typography.display.md} ${typography.weight.bold} text-foreground mb-2`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`${typography.body.base} ${typography.weight.semibold} text-foreground mb-1`}
                    >
                      {stat.label}
                    </div>
                    <div
                      className={`${typography.body.sm} text-muted-foreground`}
                    >
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 ${gaps.responsive.lg} animate-slide-up`}
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`glass-effect rounded-2xl p-6 md:p-8 border border-border/50 bg-card/50 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group ${responsiveSpacing.cardGap}`}
                >
                  <div
                    className={`${iconSizes.responsive["2xl"]} bg-gradient-to-r from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6`}
                  >
                    <Icon
                      className={`${iconSizes.responsive.xl} text-primary`}
                    />
                  </div>
                  <div className={responsiveSpacing.contentGap}>
                    <h4
                      className={`${typography.body.lg} ${typography.weight.bold} text-foreground drop-shadow-sm`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`text-muted-foreground leading-relaxed ${typography.body.sm}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="animate-slide-up">
            <Button
              size="lg"
              className={`group relative ${buttonSizes.touchTarget.large} bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary px-8 md:px-12 py-4 md:py-6 ${typography.body.lg} ${typography.weight.bold} rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <Heart className={`${iconSizes.md} mr-3`} />
                Start Planning Your Event
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
