export const metadata = {
  title: "Contact — Austin Cole",
  description: "Get in touch with Austin Cole, iOS & Android engineer.",
};

export default function ContactPage() {
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
          Have a project in mind? Send me a message and I&apos;ll get back to
          you within a day or two.
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-muted uppercase tracking-widest mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2.5 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors"
          >
            Send message
          </button>
        </form>

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
