import { site } from "@/lib/site";
import ButtonLink from "@/src/components/ButtonLink";

type ContactButtonsProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

export default function ContactButtons({
  primaryLabel = "Book a call",
  secondaryLabel = "Send project details",
  className = "",
}: ContactButtonsProps) {
  const wrapperClassName = className ? `flex flex-wrap gap-3 ${className}` : "flex flex-wrap gap-3";

  return (
    <div className={wrapperClassName}>
      <ButtonLink href={site.schedulingUrl} variant="primary">
        {primaryLabel}
      </ButtonLink>
      <ButtonLink href="/contact" variant="secondary">
        {secondaryLabel}
      </ButtonLink>
    </div>
  );
}
