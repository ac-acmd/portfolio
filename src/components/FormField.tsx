import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export const formControlClassName =
  "w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors";

export default function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
