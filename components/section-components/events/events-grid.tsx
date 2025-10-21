"use client";
import { useState } from "react";
import { EVENTS } from "@/utils/events/events-data";
import { EventsSectionHeader } from "./events-section-header";
import { Events3DCarousel } from "./events-3d-carousel";
import { CarouselNavigation } from "./carousel-navigation";

export function EventsGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = EVENTS.length;

  const handleIndexChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <div>
      <EventsSectionHeader title="Recent Events" />

      <Events3DCarousel
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
        autoRotate={true}
        rotationInterval={4000}
      />

      <CarouselNavigation
        totalItems={totalCards}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />
    </div>
  );
}
