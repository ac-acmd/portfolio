import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function PageSection({ id, children, className = "" }: PageSectionProps) {
  const hasPaddingOverride = /(^|\s)py-/.test(className);
  const basePadding = hasPaddingOverride ? "max-w-4xl mx-auto px-6" : "max-w-4xl mx-auto px-6 py-20";
  const containerClassName = className ? `${basePadding} ${className}` : basePadding;

  return (
    <section className="border-t border-border" id={id}>
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
