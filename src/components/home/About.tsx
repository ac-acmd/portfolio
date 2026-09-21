import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";

const skills = [
  "Swift", "Kotlin", "Objective-C", "Java", "React Native",
  "Node.js", "Ruby", "Bash", "Python",
  "Bitrise", "GitHub Actions", "Fastlane",
  "Firebase", "Google Cloud", "Stripe",
];

export default function About() {
  return (
    <PageSection id="about">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
        <p>
          I'm a mobile engineer with 6+ years building iOS and Android apps.
          I now work directly with founders and small teams who need an app
          shipped without building a mobile department.
        </p>
        <p>
          Before freelancing, I worked on enterprise POS and payments apps at
          Freshop by NCR Voyix, managing releases across 200+ white label
          apps. That's where I picked up the habit of automating the slow
          parts: onboarding, CI/CD, releases. You get big-company reliability
          at small-team speed and cost.
        </p>
        <p>
          I've also done Bluetooth (BLE) work for hardware products, on both
          the app and the firmware testing.
        </p>
        <p>You work with me directly, with no account managers and no handoffs.</p>
      </div>

      <div className="mt-10">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 border border-border rounded text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
