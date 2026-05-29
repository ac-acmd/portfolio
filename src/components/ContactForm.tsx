import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (result.status === 200) {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSendMessage}>
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
          required
          value={formData.name}
          className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors"
          placeholder="Your name"
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
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
          required
          value={formData.email}
          className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors"
          placeholder="you@example.com"
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
          required
          rows={5}
          value={formData.message}
          className="w-full px-4 py-2.5 border border-border rounded text-sm text-foreground bg-white focus:outline-none focus:border-foreground transition-colors resize-none"
          placeholder="Tell me about your project..."
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-5 py-2.5 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-teal">Message sent! I'll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
