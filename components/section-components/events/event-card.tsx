import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { type EventItem } from "@/utils/events/events-data";

interface EventCardProps {
  event: EventItem;
  style: React.CSSProperties;
}

export function EventCard({ event, style }: EventCardProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: "280px",
        height: "360px",
        left: "50%",
        top: "50%",
        marginLeft: "-140px",
        marginTop: "-180px",
        transformStyle: "preserve-3d",
        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transformOrigin: "center center",
        ...style,
      }}
    >
      <Card className="overflow-hidden h-full shadow-lg">
        <div className="aspect-video bg-muted">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{event.caption}</p>
          <p className="mt-2 text-xs">
            See more →{" "}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram gallery
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
