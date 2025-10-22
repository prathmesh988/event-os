"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Button } from "@/components/shared/ui/button";
import { NavigationMenu } from "./navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Calendar, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import {
  buttonSizes,
  iconSizes,
  gaps,
  typography,
  responsiveSpacing,
} from "@/constants";

export function TopBar() {
  const { scrollDirection, isScrolled } = useScrollDirection();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        scrollDirection === "down" && isScrolled
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
    >
      <div
        className={`transition-all duration-300 ease-out ${"bg-background/80 backdrop-blur-lg border-b shadow-lg"}`}
      >
        <div className={`container mx-auto ${responsiveSpacing.containerX}`}>
          <div className="flex items-center justify-between min-h-[64px] py-2">
            {/* Animated Logo */}
            <Link to="hero" smooth={true} offset={-80} duration={500}>
              <div
                className={`flex items-center ${gaps.element.normal} group cursor-pointer ${buttonSizes.touchTarget.minimum} py-2`}
              >
                <div
                  className={`${
                    iconSizes.responsive.lg
                  } bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    isScrolled ? "shadow-md" : "shadow-lg"
                  }`}
                >
                  <Calendar
                    className={`${iconSizes.md} text-primary-foreground`}
                  />
                </div>
                <span
                  className={`${typography.body.lg} ${typography.weight.bold} bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent`}
                >
                  EventPro
                </span>
                <Sparkles
                  className={`${iconSizes.responsive.sm} text-primary opacity-70 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`flex items-center ${gaps.responsive.md}`}>
              <NavigationMenu />

              {/* Enhanced CTA Button */}
              <Link to="booking" smooth={true} offset={-80} duration={500}>
                <Button
                  size="default"
                  className={`hidden lg:flex group relative overflow-hidden ${buttonSizes.sizes.md} bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <span
                    className={`relative z-10 ${typography.body.base} ${typography.weight.medium}`}
                  >
                    Book Event
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>

              {/* Theme Toggle - Desktop */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Animated border bottom - removed to prevent visual artifacts */}
      {/* 
      <div
        className={`h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      */}
    </div>
  );
}
