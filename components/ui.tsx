export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
