"use client";

import { useTheme } from "next-themes";
import VideoBackground from "./video-background";

interface EnhancedWaveTransitionProps {
  direction?: "up" | "down";
  className?: string;
  showVideo?: boolean;
  videoOpacity?: number;
  height?: "sm" | "md" | "lg";
}

export function EnhancedWaveTransition({
  direction = "down",
  className = "",
  showVideo = false,
  videoOpacity = 0.3,
  height = "md",
}: EnhancedWaveTransitionProps) {
  const { theme } = useTheme();

  const heightClasses = {
    sm: "h-12 md:h-16",
    md: "h-16 md:h-24",
    lg: "h-24 md:h-32",
  };

  return (
    <div
      className={`
     bg-black/50
    relative w-full overflow-hidden  ${className}`}
    >
      {/* Video peek-through effect */}
      {showVideo && (
        <div className="absolute inset-0 z-0">
          <VideoBackground />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Wave shape with theme-aware styling */}
      <svg
        viewBox="0 0 1440 120"
        className={`fill-background relative z-10 w-full ${
          heightClasses[height]
        } ${direction === "up" ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        {/* Primary wave - fills from top (0) with wave curve at bottom */}
        <path
          d="M0,0 L0,64 L48,80 C96,96,192,128,288,128 C384,128,480,96,576,85.3 C672,75,768,85,864,90.7 C960,96,1056,96,1152,90.7 C1248,85,1344,75,1392,69.3 L1440,64 L1440,0 Z"
          style={{ opacity: 1 }}
        />

        {/* Secondary wave for depth - slightly different curve */}
        <path
          d="M0,0 L0,80 L48,90 C96,100,192,120,288,115 C384,110,480,80,576,75 C672,70,768,90,864,95 C960,100,1056,90,1152,85 C1248,80,1344,80,1392,80 L1440,80 L1440,0 Z"
          style={{ opacity: 0.7 }}
        />
      </svg>
    </div>
  );
}
