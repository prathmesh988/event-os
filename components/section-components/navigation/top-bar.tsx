"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Button } from "@/components/shared/ui/button";
import { NavigationMenu } from "./navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Calendar, Sparkles } from "lucide-react";

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
        className={`transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Animated Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div
                className={`w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  isScrolled ? "shadow-md" : "shadow-lg"
                }`}
              >
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                EventPro
              </span>
              <Sparkles className="h-4 w-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4">
              <NavigationMenu />

              {/* Enhanced CTA Button */}
              <Button
                size="sm"
                className="hidden md:flex group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Book Event</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Theme Toggle - Desktop */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
