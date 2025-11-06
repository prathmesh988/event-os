import { typography, responsiveSpacing, events } from "@/constants";

interface EventsSectionHeaderProps {
  title?: string;
}

export function EventsSectionHeader({
  title = events.title,
}: EventsSectionHeaderProps) {
  return (
    <div className={responsiveSpacing.headerMargin}>
      <h2 className={typography.heading.h2}>{title}</h2>
    </div>
  );
}
