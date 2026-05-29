import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
          Contact
        </p>
        <h1 className="text-3xl font-medium text-foreground">Get in touch</h1>
      </div>

      <div className="max-w-lg">
        <p className="text-muted leading-relaxed mb-10">
          Have a project in mind? Send me a message and I'll get back to
          you within a day or two.
        </p>

        <ContactForm />

        <p className="text-xs text-muted mt-6">
          Prefer email?{" "}
          <a
            href="mailto:austin@austincolemobiledev.com"
            className="text-foreground hover:text-teal transition-colors"
          >
            austin@austincolemobiledev.com
          </a>
        </p>
      </div>
    </div>
  );
}
