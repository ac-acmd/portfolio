import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function PageSection({ id, children, className = "" }: PageSectionProps) {
  return (
    <section className="border-t border-border" id={id}>
      <div className={"max-w-4xl mx-auto px-6 py-20 " + className}>{children}</div>
    </section>
  );
}
