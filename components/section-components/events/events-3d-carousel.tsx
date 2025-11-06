"use client";
import { useState, useEffect, useRef } from "react";
import { EVENTS, calculate2DCardStyle } from "@/utils/events/events-data";
import { EventCard } from "./event-card";

interface Events2DCarouselProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  autoRotate?: boolean;
  rotationInterval?: number;
  cardSpacing?: number; // Space between cards
  visibleCards?: number; // Number of visible cards on each side
}

export function Events3DCarousel({
  activeIndex,
  onIndexChange,
  autoRotate = true,
  rotationInterval = 4000,
  cardSpacing = 280, // Default spacing between card centers
  visibleCards = 2,
}: Events2DCarouselProps) {
  const totalCards = EVENTS.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Container width calculation
  const containerWidth = 1200;

  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      // Linear auto-rotation with boundary check
      if (activeIndex < totalCards - 1) {
        onIndexChange(activeIndex + 1);
      } else {
        onIndexChange(0); // Reset to start when reaching the end
      }
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [
    activeIndex,
    totalCards,
    autoRotate,
    rotationInterval,
    onIndexChange,
    isDragging,
  ]);

  const getCardStyle = (index: number) => {
    // Simple linear distance calculation
    const distance = index - activeIndex;

    // Only show center card + specified cards on each side
    if (Math.abs(distance) > visibleCards) {
      return {
        opacity: 0, // Hide cards that are too far
        transform: "translateY(-50%) scale(0.3)", // Make very small but keep in flow
        zIndex: 0,
        filter: "blur(0px)",
        transition: "all 0.3s ease-out",
        pointerEvents: "none" as const, // Prevent interaction with hidden cards
        position: "absolute" as const,
        left: "-1000px", // Move far off screen
        top: "50%",
        width: "280px",
        height: "360px",
      };
    }

    const baseStyle = calculate2DCardStyle(
      index,
      activeIndex,
      cardSpacing,
      containerWidth
    );

    // Reveal card on hover - remove blur and increase opacity for non-active cards
    if (hoveredIndex === index && index !== activeIndex) {
      return {
        ...baseStyle,
        opacity: 0.9, // Much higher opacity to reveal the card
        filter: "blur(0px)", // Remove blur completely on hover
        transition: "all 0.3s ease-out",
      };
    }

    return baseStyle;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const threshold = 50; // Minimum drag distance to trigger navigation

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Drag right - go to previous (with boundary check)
        if (activeIndex > 0) {
          onIndexChange(activeIndex - 1);
        }
      } else {
        // Drag left - go to next (with boundary check)
        if (activeIndex < totalCards - 1) {
          onIndexChange(activeIndex + 1);
        }
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      onIndexChange(index);
    }
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div
        ref={carouselRef}
        className="cursor-pointer select-none"
        style={{
          width: "100%",
          height: "400px", // Reduced height for 2D layout
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible", // Allow side cards to be visible
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            position: "relative",
            width: `${containerWidth}px`,
            height: "380px",
            margin: "0 auto", // Center the container
          }}
        >
          {EVENTS.map((event, index) => {
            const distance = index - activeIndex;
            const shouldShow = Math.abs(distance) <= visibleCards;

            return (
              <EventCard
                key={event.id}
                event={event}
                style={getCardStyle(index)}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
