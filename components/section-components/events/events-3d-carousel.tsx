"use client";
import { useState, useEffect } from "react";
import { EVENTS, calculateCardStyle } from "@/utils/events/events-data";
import { EventCard } from "./event-card";

interface Events3DCarouselProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  autoRotate?: boolean;
  rotationInterval?: number;
}

export function Events3DCarousel({
  activeIndex,
  onIndexChange,
  autoRotate = true,
  rotationInterval = 4000,
}: Events3DCarouselProps) {
  const totalCards = EVENTS.length;
  const radius = 400;

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      onIndexChange((activeIndex + 1) % totalCards);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [activeIndex, totalCards, autoRotate, rotationInterval, onIndexChange]);

  const getCardStyle = (index: number) => {
    return calculateCardStyle(index, activeIndex, totalCards, radius);
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div
        style={{
          perspective: "1200px",
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "400px",
            height: "480px",
            transformStyle: "preserve-3d",
            transform: `rotateX(0deg)`,
          }}
        >
          {EVENTS.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              style={getCardStyle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
