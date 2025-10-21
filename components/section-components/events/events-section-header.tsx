interface EventsSectionHeaderProps {
  title?: string;
}

export function EventsSectionHeader({
  title = "Recent Events",
}: EventsSectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
