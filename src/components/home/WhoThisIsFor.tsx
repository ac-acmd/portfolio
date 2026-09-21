import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

const fitPoints = [
  "You have a product or hardware device and no mobile developer.",
  "Your app is slow, buggy, or stuck in a painful release process.",
  "You need ongoing mobile work but not a full-time hire.",
];

export default function WhoThisIsFor() {
  return (
    <PageSection id="fit">
      <SectionHeading eyebrow="Who this is for" title="A good fit if…" />
      <ul className="text-muted leading-relaxed space-y-2">
        {fitPoints.map((point) => (
          <li key={point} className="pl-5 relative before:content-['•'] before:text-teal before:absolute before:left-0">
            {point}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted mt-8">
        Not a fit: large teams looking for staff augmentation through a
        procurement process.
      </p>
    </PageSection>
  );
}
