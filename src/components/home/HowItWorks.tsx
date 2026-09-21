import { processSteps } from "@/lib/how-it-works";
import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

export default function HowItWorks() {
  return (
    <PageSection id="how-it-works">
      <SectionHeading eyebrow="Process" title="How it works" />
      <ol className="grid sm:grid-cols-2 gap-4">
        {processSteps.map((step, index) => (
          <li key={step.title} className="p-6 border border-border rounded-lg">
            <p className="text-xs font-mono text-teal mb-3">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-base font-medium text-foreground mb-1">{step.title}</h3>
            <p className="text-xs text-muted mb-3">{step.detail}</p>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
