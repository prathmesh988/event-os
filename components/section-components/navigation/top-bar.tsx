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
                  <img
                    src="https://glimageurl.golocall.com/golocopg-logo/698692_logo_urbanevents1576850461.png"
                    className="img-fluid"
                    width="75"
                    height="100%"
                    alt="Urban Events wedding planners in pune, wedding decoraters in pune, destination wedding Pune, wedding planners in pune, wedding decoraters in pune, flower decoration in pune, destination wedding planners in pune, destination wedding decor in Pune, destination wedding decor in Pune, Haldi Decor In Pune, Mehendi Décor in pune , eco friendly wedding décor In Pune, , eco friendly wedding décor In Pune,  mandap  décor in pune, mandap décor in pune,  mandap decorations in pune, wedding venues in pune, wedding designer in pune, wedding decoraters in Kolhapur, wedding planers in Kolhapur, baby shower décor in pune, baby shower planners in pune, varamala in pune, wedding garland in pune, bride and groom entry setup in pune, special entry ideas, birthday planners in pune, wedding decoraters, corporate events planner in pune, corporate events in pune, florist in pune, flower décor, wedding planners in lonavala, artificial flower decoration in pune, house warming décor in pune, marigold décor in pune, dj and sound in pune, sangeet décor, vidhi mandap décor in pune, wedding  decorater in mahabaleshwar, bridal shower décor in pune, bride to be décor  wedding decorater wedding planners wedding planners in Maharashtra, wedding planners in goa, wedding decoraters in goa, destination wedding Goa, wedding planners in goa, wedding decoraters in goa, flower decoration in goa, destination wedding planners in goa, destination wedding decor in Goa, destination wedding decor in Goa, Haldi Decor In Goa, Mehendi Décor in goa , eco friendly wedding décor In Goa, , eco friendly wedding décor In Goa,  mandap  décor in goa, mandap décor in goa,  mandap decorations in goa, wedding venues in goa, wedding designer in goa, wedding decoraters in Kolhapur, wedding planers in Kolhapur, baby shower décor in goa, baby shower planners in goa, varamala in goa, wedding garland in goa, bride and groom entry setup in goa, special entry ideas, birthday planners in goa, wedding decoraters, corporate events planner in goa, corporate events in goa, florist in goa, flower décor, wedding planners in lonavala, artificial flower decoration in goa, house warming décor in goa, marigold décor in goa, dj and sound in goa, sangeet décor, vidhi mandap décor in goa, wedding  decorater in mahabaleshwar, bridal shower décor in goa, bride to be décor  wedding decorater wedding planners wedding planners in Maharashtra, Event Management Company In Pune, Event Management Company In Kalyani Nagar, Event Management Company In Viman Nagar, Event Management Company In Hadapsar, Event Management Company In Hinjewadi, Wedding Planner In Pune, Wedding Planner In Kalyani Nagar, Wedding Planner In Viman Nagar, Wedding Planner In Hadapsar, Wedding Planner In Hinjewadi, Wedding Planner In Koregaon Park, Corporate Event Planner In Pune, Corporate Event Planner In Kalyani Nagar, Corporate Event Planner In Viman Nagar, Corporate Event Planner In Hadapsar, Corporate Event Planner In Hinjewadi, Theme Based Party Organizer In Pune, Theme Based Party Organizer In Kalyani Nagar, Theme Based Party Organizer In Viman Nagar, Theme Based Party Organizer In Hadapsar, Party planner in pune, customised decorator in viman nagar, birthday organiser in kalyani nagar, customised theme birthday event decor in pune, party planner in viman nagar, event management in viman nagar, wedding planning service in pune, event customisation in viman nagar, baby shower decor in pune, birthday decor in maharashtra, event  management in viman nagar, customized photo corner for wedding, event photography in pune, event decor in kalyani nagar, event decor in viman nagar, wedding decor ideas in pune, wedding curatives in pune, event planner in pune, wedding customization in pune, wedding planner in maharashtra, event decorator in pune, flower decorator in maharashtra, best wedding planner in pune, customized birthday party decor, customized events in pune, creative themes for birthday in pune, creative decor in kalynai nagar, event decor ideas for birthday, grand wedding decor in viman nagar, creative decor ideas for wedding, event management in kalyani nagar, wedding management in pune, theme wedding in pune, costomized wedding decor in kalyani nagar, customized planning in pune, wedding printing in pune, event decor in pune, wedding decor in pune, wedding planning in pune, customised decor in pune, event planning in kalyani nagar, wedding decoration in pune, best wedding management company in pune, customized decor in pune, quirky gifts in pune, customized giveaways for wedding, event management in pune, wedding gifts in pune, customized wedding gifts, initial corner design company in pune, customized hashtags in pune, best initial corner company in pune, best weeding planner in kalyani nagar, best wedding planner company in pune, vidhi mandap decoration in pune, vidhi mandap decoration company in pune, vidhi mandap decoration management company in pune, best vidhi mandap decoration company in pune, best vidhi mandap decoration management company in pune, initial corner design company in pune, initial corner design management company in pune, best initial corner design company in pune, best initial corner design management company in pune, wedding planner in kalyani nagar, wedding planner company in kalyani nagar, wedding planner management company in kalyani nagar, best wedding planner in kalyani nagar, best wedding planner company in kalyani nagar, best wedding planner management company in kalyani nagar, corporate events, corporate events in kalyani nagar, corporate events company in kalyani nagar, corporate events management company in kalyani nagar, corporate event services in kalyani nagar, birthday parties, birthday parties in pune, birthday parties company in pune, birthday parties management company in pune, birthday parties services in pune, best birthday parties in pune, pathway and entrance decor, pathway and entrance decor in pune, pathway and entrance decor company in pune, pathway and entrance decor services in pune,  pathway and entrance decor management company in pune, "
                  />
                </div>
                <span
                  className={`${typography.body.lg} ${typography.weight.bold} bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent`}
                >
                  D Tale Creatrix
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
