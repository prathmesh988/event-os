"use client";

import { useState } from "react";
import { Button } from "@/components/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shared/ui/sheet";
import { Menu, X } from "lucide-react";
import { NavigationMenu } from "./navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { gaps, iconSizes, buttonSizes, typography } from "@/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`md:hidden ${buttonSizes.touchTarget.minimum} rounded-full`}
          aria-label="Open navigation menu"
        >
          <Menu className={iconSizes.base} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader className="text-left">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className={`mt-6 ${gaps.element.comfortable}`}>
          <NavigationMenu isMobile={true} onItemClick={handleItemClick} />
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className={`${typography.body.sm} text-muted-foreground`}>
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
