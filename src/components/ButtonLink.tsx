import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const primaryClassName =
  "px-5 py-2.5 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors";
const secondaryClassName =
  "px-5 py-2.5 border border-border text-sm rounded text-foreground hover:border-foreground transition-colors";

export default function ButtonLink({
  href,
  variant = "primary",
  children,
  onClick,
  className = "",
}: ButtonLinkProps) {
  const variantClassName = variant === "primary" ? primaryClassName : secondaryClassName;
  const combinedClassName = className ? `${variantClassName} ${className}` : variantClassName;

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (href.includes("#")) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
