import { pricingOptions, type PricingOption } from "@/lib/pricing";
import { site } from "@/lib/site";
import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

function describe(option: PricingOption): string {
  if (option.id === "retainer" && site.retainerMinimumHoursPerMonth !== null) {
    return `${option.description} Minimum ${site.retainerMinimumHoursPerMonth} hrs/month.`;
  }
  if (option.id === "fixed-scope" && site.typicalProjectStartingPrice !== null) {
    return `${option.description} Most projects start around $${site.typicalProjectStartingPrice}.`;
  }
  return option.description;
}

export default function Pricing() {
  return (
    <PageSection id="pricing">
      <SectionHeading eyebrow="Pricing" title="Simple pricing" />
      <div className="grid sm:grid-cols-3 gap-4">
        {pricingOptions.map((option) => (
          <div key={option.id} className="p-6 border border-border rounded-lg">
            <p className="text-xs font-mono text-teal uppercase tracking-widest mb-3">
              {option.name}
            </p>
            <p className="text-2xl font-medium text-foreground mb-3">{option.price}</p>
            <p className="text-sm text-muted leading-relaxed">{describe(option)}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted mt-8">
        Not sure which fits?{" "}
        <a
          href={site.schedulingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-teal transition-colors"
        >
          A 15-minute call will sort it out.
        </a>
      </p>
    </PageSection>
  );
}
