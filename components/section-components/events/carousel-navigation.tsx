import { gaps } from "@/constants";

interface CarouselNavigationProps {
  totalItems: number;
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export function CarouselNavigation({
  totalItems,
  activeIndex,
  onIndexChange,
}: CarouselNavigationProps) {
  return (
    <div className={`flex justify-center ${gaps.element.tight} mt-8`}>
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onIndexChange(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === activeIndex
              ? "bg-primary w-8"
              : "bg-muted-foreground hover:bg-primary"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
