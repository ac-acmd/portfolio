import { useParams, Link, Navigate } from "react-router-dom";
import { caseStudies } from "@/lib/case-studies";
import Markdown from "@/src/components/Markdown";
import SEO from "@/src/components/SEO";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  return (
    <>
      <SEO
        title={study.title}
        description={study.summary}
        path={`/case-studies/${study.slug}`}
      />
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-2">
          <Link
            to="/case-studies"
            className="text-xs font-mono text-muted hover:text-foreground transition-colors"
          >
            ← Case Studies
          </Link>
        </div>

        <div className="mb-12 mt-8">
          <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
            {study.client}
          </p>
          <h1 className="text-3xl font-medium text-foreground mb-4">
            {study.title}
          </h1>
          <p className="text-sm text-muted leading-relaxed mb-6">{study.summary}</p>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-teal bg-teal-light px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-border mb-12" />

        <Markdown content={study.content} />
      </div>
    </>
  );
}
