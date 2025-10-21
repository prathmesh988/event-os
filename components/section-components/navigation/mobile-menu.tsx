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
          className="md:hidden w-9 h-9 rounded-full"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader className="text-left">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <NavigationMenu isMobile={true} onItemClick={handleItemClick} />
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
