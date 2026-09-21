import { Link } from "react-router-dom";
import { workItems, type WorkItem } from "@/lib/work";
import PageSection from "@/src/components/PageSection";
import SectionHeading from "@/src/components/SectionHeading";
import TagList from "@/src/components/TagList";

function WorkCard({ item }: { item: WorkItem }) {
  const content = (
    <>
      {item.metric && <p className="text-xs font-mono text-teal mb-3">{item.metric}</p>}
      <h3
        className={
          item.caseStudySlug
            ? "text-base font-medium text-foreground mb-1 group-hover:text-teal transition-colors"
            : "text-base font-medium text-foreground mb-1"
        }
      >
        {item.title}
      </h3>
      <p className="text-xs text-muted mb-3">{item.client}</p>
      <p className="text-sm text-muted leading-relaxed mb-4">{item.outcome}</p>
      <TagList tags={item.tags} />
      {item.caseStudySlug && (
        <p className="text-xs text-foreground mt-4">Read the case study →</p>
      )}
    </>
  );

  if (item.caseStudySlug) {
    return (
      <Link
        to={`/case-studies/${item.caseStudySlug}`}
        className="group block p-6 border border-border rounded-lg hover:border-foreground transition-colors"
      >
        {content}
      </Link>
    );
  }

  return <div className="p-6 border border-border rounded-lg">{content}</div>;
}

export default function WorkSection() {
  return (
    <PageSection id="work">
      <SectionHeading eyebrow="Work" title="Selected results" />
      <div className="grid sm:grid-cols-2 gap-4">
        {workItems.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
      <div className="border border-dashed border-border rounded-lg p-8 text-center mt-4">
        <p className="text-sm text-muted mb-1">Small-scale case study coming soon</p>
        <p className="text-xs text-muted opacity-60">MVP, personal app, or early client project</p>
      </div>
    </PageSection>
  );
}
