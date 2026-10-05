import { site } from "@/lib/site";
import { bluetoothAudit } from "@/lib/services";
import ContactButtons from "@/src/components/ContactButtons";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <p className="text-sm font-mono text-teal mb-6 tracking-wide">
        Austin Cole · Bluetooth (BLE) engineer for iOS & Android
      </p>
      <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight mb-6">
        Find out why your app's Bluetooth is unreliable.
      </h1>
      <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
        A fixed-price audit of your app's BLE code. In{" "}
        {bluetoothAudit.turnaroundBusinessDays} business days you get a
        severity-ranked report, a recommended fix, and a fixed-price quote to
        do it.
      </p>
      <ContactButtons />
      <p className="text-xs text-muted mt-4">
        ${bluetoothAudit.pricePerOperatingSystem} per OS · Credited toward the
        fix if you sign within {bluetoothAudit.projectCreditWindowDays} days ·
        Reply within {site.replyTimeframe}
      </p>
    </section>
  );
}
