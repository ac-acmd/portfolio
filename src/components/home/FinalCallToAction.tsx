import { bluetoothAudit } from "@/lib/services";
import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";
import ContactButtons from "@/src/components/ContactButtons";

export default function FinalCallToAction() {
  return (
    <PageSection className="text-center">
      <SectionHeading
        align="center"
        eyebrow="Start here"
        title="Bluetooth problems you can't pin down?"
        className="mb-4"
      />
      <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed">
        Request an audit. In {bluetoothAudit.turnaroundBusinessDays} business
        days you'll know what's wrong, how to fix it, and what the fix costs.
      </p>
      <ContactButtons className="justify-center" />
    </PageSection>
  );
}
