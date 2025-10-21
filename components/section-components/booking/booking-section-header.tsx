interface BookingSectionHeaderProps {
  title?: string;
}

export function BookingSectionHeader({
  title = "Booking & Availability",
}: BookingSectionHeaderProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
