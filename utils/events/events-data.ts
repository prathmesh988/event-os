// Event data and utilities
export type EventItem = {
  id: string;
  title: string;
  category: "Wedding" | "Corporate" | "Party";
  image: string;
  caption: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Beach Wedding",
    category: "Wedding",
    image: "/beach-wedding-ceremony.png",
    caption: "Intimate sunset vows",
  },
  {
    id: "2",
    title: "Corporate Summit",
    category: "Corporate",
    image: "/corporate-conference-stage.jpg",
    caption: "Seamless AV and staging",
  },
  {
    id: "3",
    title: "Birthday Soiree",
    category: "Party",
    image: "/birthday-party-balloons.jpg",
    caption: "Personalized decor and cake",
  },
  {
    id: "4",
    title: "Luxury Wedding",
    category: "Wedding",
    image: "/luxury-wedding-banquet.jpg",
    caption: "Orchids and gold accents",
  },
  {
    id: "5",
    title: "Team Offsite",
    category: "Corporate",
    image: "/team-offsite-retreat.jpg",
    caption: "Bonding + productivity",
  },
  {
    id: "6",
    title: "Kids Theme Party",
    category: "Party",
    image: "/kids-theme-party-decor.jpg",
    caption: "Memories for a lifetime",
  },
  {
    id: "7",
    title: "Garden Gala",
    category: "Wedding",
    image: "/garden-wedding-gala.jpg",
    caption: "Floral arrangements and lights",
  },
  {
    id: "8",
    title: "Product Launch",
    category: "Corporate",
    image: "/product-launch-event.png",
    caption: "Interactive booths and demos",
  },
  {
    id: "9",
    title: "Anniversary Bash",
    category: "Party",
    image: "/anniversary-party-celebration.jpg",
    caption: "Nostalgic decor and music",
  },
];

// Utility functions for 3D carousel
export function calculateCardStyle(
  index: number,
  activeIndex: number,
  totalCards: number,
  radius: number = 400
) {
  const angle = ((index - activeIndex) * 360) / totalCards;
  const isActive = index === activeIndex;
  const distance = isActive ? 0 : radius;
  const scale = isActive ? 1.2 : 0.8;

  return {
    transform: `rotateY(${angle}deg) translateZ(${distance}px) scale(${scale})`,
    opacity: isActive ? 1 : 0.4,
    zIndex: isActive ? 10 : 5 - Math.abs(index - activeIndex),
  };
}

export function filterEventsByCategory(
  events: EventItem[],
  category?: EventItem["category"]
) {
  if (!category) return events;
  return events.filter((event) => event.category === category);
}
