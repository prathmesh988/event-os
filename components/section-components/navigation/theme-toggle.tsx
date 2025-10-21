"use client";

import { Button } from "@/components/shared/ui/button";
import { useThemeStore } from "@/store/theme-store";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {getIcon()}
    </Button>
  );
}
