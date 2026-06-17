import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { clients } from "@/lib/clients";
import { projects } from "@/lib/projects";
import { caseStudies } from "@/lib/case-studies";
import SEO from "../components/SEO";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <SEO path="/" />
      <Hero />
      <TrustedBy />
      <CaseStudiesSection />
      <ProjectsSection />
      <About />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <p className="text-sm font-mono text-teal mb-6 tracking-wide">
        Austin Cole
      </p>
      <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight mb-6">
        iOS & Android engineer<span className="text-teal">.</span>
      </h1>
      <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
        I write the app. I write the automation.
        <br />
        Then I find the next bottleneck.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#work"
          className="px-5 py-2.5 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors"
        >
          View my work
        </a>
        <Link
          to="/contact"
          className="px-5 py-2.5 border border-border text-sm rounded text-foreground hover:border-foreground transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-8">
          Trusted by
        </p>
        <div className="flex flex-wrap gap-3">
          {clients.map((client) => (
            <span
              key={client.id}
              className="text-sm px-4 py-2 border border-border rounded text-foreground"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="border-t border-border" id="case-studies">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
              Case Studies
            </p>
            <h2 className="text-2xl font-medium text-foreground">Deep dives</h2>
          </div>
          {caseStudies.length > 0 && (
            <Link
              to="/case-studies"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          )}
        </div>

        {caseStudies.length === 0 ? (
          <div className="border border-dashed border-border rounded-lg p-12 text-center">
            <p className="text-sm text-muted mb-1">Case studies in progress</p>
            <p className="text-xs text-muted opacity-60">
              Detailed write-ups publishing soon
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="group block p-6 border border-border rounded-lg hover:border-foreground transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted mb-2">{study.client}</p>
                    <h3 className="text-base font-medium text-foreground group-hover:text-teal transition-colors mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {study.summary}
                    </p>
                  </div>
                  <span className="text-muted group-hover:text-foreground transition-colors shrink-0 mt-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="border-t border-border" id="work">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
            Work
          </p>
          <h2 className="text-2xl font-medium text-foreground">
            Selected projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              {project.metric && (
                <p className="text-xs font-mono text-teal mb-3">
                  {project.metric}
                </p>
              )}
              <h3 className="text-base font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-teal-light text-teal-dark rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-border" id="about">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
            About
          </p>
          <h2 className="text-2xl font-medium text-foreground">
            A bit about me
          </h2>
        </div>

        <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
          <p>
            I'm a mobile software engineer with 6+ years building iOS and
            Android applications. Most of my career has been at the intersection
            of shipping features and shipping faster — writing the app, then
            writing the tools that get it out the door reliably.
          </p>
          <p>
            At Freshop by NCR Voyix I worked on enterprise POS and payments apps, managing
            releases across 200+ white label clients. I spent a lot of time
            automating the slow parts: onboarding workflows, CI/CD pipelines,
            release schedules. The problems I'm most proud of solving
            weren't the hardest ones — they were the ones nobody else had
            stopped to fix.
          </p>
          <p>
            I'm now freelancing and building in public. If you need a
            mobile engineer who brings both product instincts and a habit of
            optimizing the workflow around them, let's talk.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Swift", "Kotlin", "Objective-C", "Java", "React Native",
              "Node.js", "Ruby", "Bash", "Python",
              "Bitrise", "GitHub Actions", "Fastlane",
              "Firebase", "Google Cloud", "Stripe",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 border border-border rounded text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-mono text-teal uppercase tracking-widest mb-4">
          Let's work together
        </p>
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Got a project in mind?
        </h2>
        <p className="text-muted mb-8 max-w-md mx-auto leading-relaxed">
          Whether it's a new app, a broken pipeline, or a workflow nobody
          has bothered to fix yet — I'd like to hear about it.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors"
        >
          Get in touch →
        </Link>
      </div>
    </section>
  );
}
