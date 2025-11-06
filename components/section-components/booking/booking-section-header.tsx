import { booking } from "@/constants";

interface BookingSectionHeaderProps {
  title?: string;
}

export function BookingSectionHeader({
  title = booking.title,
}: BookingSectionHeaderProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
