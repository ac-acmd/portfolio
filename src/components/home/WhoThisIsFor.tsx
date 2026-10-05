import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

const fitPoints = [
  "Your app drops connections, fails to pair, or loses data mid-sync.",
  "Bluetooth works on one phone or OS version and breaks on another.",
  "An iOS or Android update broke something and nobody knows why.",
  "You're about to ship hardware and want the app's Bluetooth checked first.",
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
        Not a fit: firmware-only work with no mobile app.
      </p>
    </PageSection>
  );
}
