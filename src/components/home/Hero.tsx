import { site } from "@/lib/site";
import ContactButtons from "@/src/components/ContactButtons";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <p className="text-sm font-mono text-teal mb-6 tracking-wide">
        Austin Cole · Freelance iOS, Android & BLE engineer
      </p>
      <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight mb-6">
        Mobile apps for solo founders and small teams.
      </h1>
      <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
        I build, ship, and maintain iOS, Android, and Bluetooth-connected
        apps, so you don't have to hire a mobile team or pay for agency
        overhead.
      </p>
      <ContactButtons primaryLabel="Book a free 15-min scope call" />
      <p className="text-xs text-muted mt-4">
        From ${site.retainerHourlyRate}/hr · Fixed quotes available · Reply
        within {site.replyTimeframe}
      </p>
    </section>
  );
}
