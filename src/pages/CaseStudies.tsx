import { Link } from "react-router-dom";
import { caseStudies } from "@/lib/case-studies";
import SEO from "../components/SEO";

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Deep dives into mobile engineering work — architecture, automation, and shipping at scale."
        path="/case-studies"
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
          Case Studies
        </p>
        <h1 className="text-3xl font-medium text-foreground">Deep dives</h1>
      </div>

      {caseStudies.length === 0 ? (
        <div className="border border-dashed border-border rounded-lg p-16 text-center">
          <p className="text-sm text-muted mb-1">Case studies in progress</p>
          <p className="text-xs text-muted opacity-60 mb-8">
            Detailed write-ups publishing soon
          </p>
          <Link
            to="/"
            className="text-sm text-foreground hover:text-teal transition-colors"
          >
            ← Back home
          </Link>
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
                  <h2 className="text-base font-medium text-foreground group-hover:text-teal transition-colors mb-2">
                    {study.title}
                  </h2>
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
    </>
  );
}
