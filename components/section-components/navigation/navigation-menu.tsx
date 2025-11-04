"use client";

import { useState } from "react";
import { scroller } from "react-scroll";
import { Button } from "@/components/shared/ui/button";
import { gaps } from "@/constants";

interface NavMenuItem {
  label: string;
  href: string;
  id: string;
}

const navigationItems: NavMenuItem[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Events", href: "#events", id: "events" },
  { label: "Packages", href: "#packages", id: "packages" },
  { label: "Booking", href: "#booking", id: "booking" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
];

interface NavigationMenuProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavigationMenu({
  isMobile = false,
  onItemClick,
}: NavigationMenuProps) {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    onItemClick?.();

    if (href.startsWith("#")) {
      // react-scroll Elements are registered by name, so use scroller.scrollTo
      const target = href.slice(1) || "hero";
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
      return;
    }

    // fallback for non-hash links
    if (href.startsWith("http") || href.startsWith("/")) {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`${
        isMobile
          ? `flex flex-col ${gaps.element.tight}`
          : `hidden lg:flex items-center ${gaps.element.tight}`
      }`}
    >
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          onClick={() => handleNavClick(item.href, item.id)}
          className={`${
            activeSection === item.id
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground"
          } ${
            isMobile ? "w-full justify-start" : "px-3 py-2"
          } transition-colors`}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
