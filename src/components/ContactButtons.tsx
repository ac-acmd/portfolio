import { site } from "@/lib/site";
import { bluetoothAuditRequestPath } from "@/lib/services";
import ButtonLink from "@/src/components/ButtonLink";

type ContactButtonsProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

export default function ContactButtons({
  primaryLabel = "Request a BLE audit",
  secondaryLabel = "Book a 15-min call",
  className = "",
}: ContactButtonsProps) {
  const wrapperClassName = className ? `flex flex-wrap gap-3 ${className}` : "flex flex-wrap gap-3";

  return (
    <div className={wrapperClassName}>
      <ButtonLink href={bluetoothAuditRequestPath} variant="primary">
        {primaryLabel}
      </ButtonLink>
      <ButtonLink href={site.schedulingUrl} variant="secondary">
        {secondaryLabel}
      </ButtonLink>
    </div>
  );
}
