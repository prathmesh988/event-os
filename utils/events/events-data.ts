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
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-33m9m6kkro.jpg",
    caption: "Intimate sunset vows",
  },
  {
    id: "2",
    title: "Corporate Summit",
    category: "Corporate",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-3msnstvog5.jpg",
    caption: "Seamless AV and staging",
  },
  {
    id: "3",
    title: "Birthday Soiree",
    category: "Party",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-noddcsk2xl.jpg",
    caption: "Personalized decor and cake",
  },
  {
    id: "4",
    title: "Luxury Wedding",
    category: "Wedding",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-ry10muq6qh.jpg",
    caption: "Orchids and gold accents",
  },
  {
    id: "5",
    title: "Team Offsite",
    category: "Corporate",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-ex8holjxdy.jpg",
    caption: "Bonding + productivity",
  },
  {
    id: "6",
    title: "Kids Theme Party",
    category: "Party",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-9gh7kn7p03.jpg",
    caption: "Memories for a lifetime",
  },
  {
    id: "7",
    title: "Garden Gala",
    category: "Wedding",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-33m9m6kkro.jpg",
    caption: "Floral arrangements and lights",
  },
  {
    id: "8",
    title: "Product Launch",
    category: "Corporate",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-ob7kzrmtqg.jpg",
    caption: "Interactive booths and demos",
  },
  {
    id: "9",
    title: "Anniversary Bash",
    category: "Party",
    image:
      "https://images.jdmagicbox.com/v2/comp/bangalore/a6/080pxx80.xx80.130912180749.d8a6/catalogue/effects-events-horamavu-bangalore-wedding-organisers-tbgpvyyhi5.jpg",
    caption: "Nostalgic decor and music",
  },
];

// 2D carousel with individual card positioning
export function calculate2DCardStyle(
  index: number,
  activeIndex: number,
  cardWidth: number = 320, // Card width including spacing
  containerWidth: number = 1200 // Container width
) {
  const isActive = index === activeIndex;
  const distanceFromCenter = index - activeIndex;

  // Calculate the position for each card
  const centerX = containerWidth / 2;
  const cardX = centerX + distanceFromCenter * cardWidth - 280 / 2; // 280 is card width

  // Simple scale and opacity for 2D carousel
  const scale = isActive ? 1.0 : 0.75;
  const opacity = isActive
    ? 1
    : Math.max(0.6, 0.9 - Math.abs(distanceFromCenter) * 0.1);

  // Light blur for non-active cards
  const blur = isActive ? 0 : 1.5;

  // Simple z-index layering
  const zIndex = isActive ? 10 : Math.max(5 - Math.abs(distanceFromCenter), 1);

  return {
    position: "absolute" as const,
    left: `${cardX}px`,
    top: "50%",
    transform: `translateY(-50%) scale(${scale})`,
    opacity,
    zIndex,
    filter: `blur(${blur}px)`,
    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth transitions
    width: "280px",
    height: "360px",
  };
}

export function filterEventsByCategory(
  events: EventItem[],
  category?: EventItem["category"]
) {
  if (!category) return events;
  return events.filter((event) => event.category === category);
}
