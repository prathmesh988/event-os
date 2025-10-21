import { ReactNode } from "react";
import { WaveTransition } from "@/components/shared/wave-transition";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  withTopWave?: boolean;
  withBottomWave?: boolean;
  overlayOpacity?: "light" | "medium" | "dark" | "none";
}

export function ParallaxSection({
  children,
  className = "",
  withTopWave = false,
  withBottomWave = false,
  overlayOpacity = "medium",
}: ParallaxSectionProps) {
  const overlayStyles = {
    none: "",
    light: "bg-black/10",
    medium: "bg-black/20",
    dark: "bg-black/40",
  };

  return (
    <section className={`relative ${className}`}>
      {withTopWave && (
        <WaveTransition
          variant="top"
          className="absolute top-0 left-0 right-0 -mt-1 z-10"
        />
      )}

      {/* Section overlay */}
      <div className={`absolute inset-0 ${overlayStyles[overlayOpacity]}`} />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {withBottomWave && (
        <WaveTransition
          variant="bottom"
          className="absolute bottom-0 left-0 right-0 -mb-1 z-10"
        />
      )}
    </section>
  );
}
