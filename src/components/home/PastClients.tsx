import { clients } from "@/lib/clients";
import PageSection from "@/src/components/PageSection";

export default function PastClients() {
  return (
    <PageSection className="py-12">
      <p className="text-xs font-mono text-muted uppercase tracking-widest mb-8">
        Past clients
      </p>
      <div className="flex flex-wrap gap-3">
        {clients.map((client) => (
          <span
            key={client.id}
            className="text-sm px-4 py-2 border border-border rounded text-foreground"
          >
            {client.name}: <span className="text-muted">{client.sizeLabel}</span>
          </span>
        ))}
      </div>
    </PageSection>
  );
}
