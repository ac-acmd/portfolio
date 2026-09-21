import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Tell Austin Cole about your iOS, Android, or Bluetooth app project. Replies within 1 business day."
        path="/contact"
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading
          headingLevel="h1"
          eyebrow="Contact"
          title="Tell me about your project"
          className="mb-12"
        />

        <div className="max-w-lg">
          <p className="text-muted leading-relaxed mb-10">
            Fill this out and I'll reply within {site.replyTimeframe}, usually within a few
            hours. Prefer to talk?{" "}
            <a
              href={site.schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-teal transition-colors"
            >
              Book a 15-min call instead →
            </a>
          </p>

          <ContactForm />

          <p className="text-xs text-muted mt-6">
            Prefer email?{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-foreground hover:text-teal transition-colors"
            >
              {site.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
