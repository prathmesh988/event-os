import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { type EventItem } from "@/utils/events/events-data";
import { gaps, typography } from "@/constants";

interface EventCardProps {
  event: EventItem;
  style: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function EventCard({
  event,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: EventCardProps) {
  return (
    <div
      style={style} // All positioning and styling handled by calculate2DCardStyle
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl border border-border bg-card transition-all duration-300 group">
        {/* Removed hover:scale-105 to prevent conflicts */}
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {event.category}
            </span>
          </div>
        </div>
        <CardHeader className="relative z-10">
          <CardTitle
            className={`${typography.body.lg} text-card-foreground group-hover:text-primary transition-colors`}
          >
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p
            className={`${typography.body.sm} text-muted-foreground group-hover:text-foreground transition-colors`}
          >
            {event.caption}
          </p>
          <p
            className={`mt-3 ${typography.body.xs} text-primary hover:text-primary/80 transition-colors flex items-center gap-1`}
          >
            <span>View Gallery</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
