type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  headingLevel?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  headingLevel = "h2",
  align = "left",
  className = "mb-10",
}: SectionHeadingProps) {
  const wrapperClassName = align === "center" ? `${className} text-center` : className;
  const titleClassName =
    headingLevel === "h1"
      ? "text-3xl font-medium text-foreground"
      : "text-2xl font-medium text-foreground";

  return (
    <div className={wrapperClassName}>
      <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">{eyebrow}</p>
      {headingLevel === "h1" ? (
        <h1 className={titleClassName}>{title}</h1>
      ) : (
        <h2 className={titleClassName}>{title}</h2>
      )}
    </div>
  );
}
