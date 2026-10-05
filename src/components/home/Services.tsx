import type { ReactNode } from "react";
import {
  bluetoothAudit,
  bluetoothAuditRequestPath,
  customServiceNote,
  projectService,
  retainerFeatureNames,
  retainerNotes,
  retainerPlans,
  retainerSharedFeatures,
  servicePathSteps,
  serviceTerms,
  type RetainerPlan,
  type ServicePathStep,
} from "@/lib/services";
import { site } from "@/lib/site";
import ButtonLink from "@/src/components/ButtonLink";
import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

const labelClassName = "text-xs font-mono text-teal uppercase tracking-widest mb-3";

function formatDollars(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

function formatStepNumber(stepNumber: number): string {
  return String(stepNumber).padStart(2, "0");
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function DetailsDisclosure({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="mt-4 group">
      <summary className="cursor-pointer text-sm text-foreground hover:text-teal transition-colors">
        {summary}
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}

function ServicePathStepLink({ step }: { step: ServicePathStep }) {
  return (
    <a
      href={`#${step.anchorId}`}
      className="block flex-1 p-4 border border-border rounded-lg hover:border-foreground transition-colors"
    >
      <p className="text-xs font-mono text-teal mb-1">{formatStepNumber(step.stepNumber)}</p>
      <p className="text-base font-medium text-foreground">{step.serviceName}</p>
      <p className="text-sm text-muted">{step.summary}</p>
    </a>
  );
}

function ServicePathStrip() {
  return (
    <nav aria-label="Service path" className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
      {servicePathSteps.map((step, index) => (
        <div key={step.anchorId} className="contents">
          {index > 0 && (
            <span aria-hidden="true" className="hidden sm:block text-muted">
              →
            </span>
          )}
          <ServicePathStepLink step={step} />
        </div>
      ))}
    </nav>
  );
}

function AuditCard() {
  return (
    <div
      id="bluetooth-audit"
      className="p-6 border border-foreground rounded-lg scroll-mt-20 mb-4"
    >
      <p className={labelClassName}>{`Step 1 · ${bluetoothAudit.name}`}</p>
      <p className="text-2xl font-medium text-foreground mb-4">
        {`${formatDollars(bluetoothAudit.pricePerOperatingSystem)} per OS`}
      </p>
      <BulletList items={bluetoothAudit.highlights} />
      <div className="mt-5">
        <ButtonLink href={bluetoothAuditRequestPath}>Request a BLE audit</ButtonLink>
      </div>
      <DetailsDisclosure summary="Audit details">
        <BulletList items={bluetoothAudit.additionalDetails} />
      </DetailsDisclosure>
    </div>
  );
}

function ProjectCard() {
  const priceLine = `${projectService.typicalPriceRange} typical · ${formatDollars(projectService.minimumPrice)} minimum`;
  const creditLine = `Audit fee is credited toward the project when signed within ${bluetoothAudit.projectCreditWindowDays} days.`;

  return (
    <div id="project" className="p-6 border border-border rounded-lg scroll-mt-20 mb-4">
      <p className={labelClassName}>{`Step 2 · ${projectService.name}`}</p>
      <p className="text-2xl font-medium text-foreground mb-4">{priceLine}</p>
      <BulletList items={[creditLine, ...projectService.highlights]} />
      <DetailsDisclosure summary="Project details">
        <BulletList items={projectService.additionalDetails} />
      </DetailsDisclosure>
    </div>
  );
}

function RetainerPlanCard({ plan }: { plan: RetainerPlan }) {
  const priceLine = `${formatDollars(plan.firstOperatingSystemMonthlyPrice)}/mo first OS · ${formatDollars(plan.secondOperatingSystemMonthlyPrice)}/mo second OS`;

  return (
    <div className="p-6 border border-border rounded-lg">
      <h3 className="text-base font-medium text-foreground mb-1">{plan.name}</h3>
      <p className="text-sm text-muted mb-4">{priceLine}</p>
      <dl className="space-y-3">
        {retainerFeatureNames.map((featureName) => (
          <div key={featureName}>
            <dt className="text-xs font-mono text-teal uppercase tracking-widest">
              {featureName}
            </dt>
            <dd className="text-sm text-muted leading-relaxed">
              {plan.featureValues[featureName]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RetainerBlock() {
  return (
    <div id="retainer" className="scroll-mt-20 mb-4">
      <p className={labelClassName}>Step 3 · Retainer, choose one</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {retainerPlans.map((plan) => (
          <RetainerPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <div className="mt-4 p-6 border border-border rounded-lg">
        <p className={labelClassName}>Both plans</p>
        <BulletList items={retainerSharedFeatures} />
        <DetailsDisclosure summary="Retainer details">
          <BulletList items={retainerNotes} />
        </DetailsDisclosure>
      </div>
    </div>
  );
}

function TermsDisclosure() {
  return (
    <DetailsDisclosure summary="Terms">
      <dl className="space-y-3">
        {serviceTerms.map((term) => (
          <div key={term.title}>
            <dt className="text-sm font-medium text-foreground">{term.title}</dt>
            <dd className="text-sm text-muted leading-relaxed">{term.description}</dd>
          </div>
        ))}
      </dl>
    </DetailsDisclosure>
  );
}

export default function Services() {
  return (
    <PageSection id="services">
      <SectionHeading eyebrow="Services" title="Start with an audit" />
      <ServicePathStrip />
      <AuditCard />
      <ProjectCard />
      <RetainerBlock />
      <TermsDisclosure />
      <p className="text-sm text-muted mt-8">
        {customServiceNote}{" "}
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
