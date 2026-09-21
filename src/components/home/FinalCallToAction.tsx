import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";
import ContactButtons from "@/src/components/ContactButtons";

export default function FinalCallToAction() {
  return (
    <PageSection className="text-center">
      <SectionHeading
        align="center"
        eyebrow="Let's work together"
        title="Have an app to build or fix?"
        className="mb-4"
      />
      <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed">
        Book a free 15-minute call. You'll leave with a straight answer on
        fit, rough cost, and timeline, whether or not we work together.
      </p>
      <ContactButtons className="justify-center" />
    </PageSection>
  );
}
