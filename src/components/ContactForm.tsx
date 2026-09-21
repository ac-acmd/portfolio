import { useState } from "react";
import emailjs from "@emailjs/browser";
import FormField, { formControlClassName } from "./FormField";
import { site } from "@/lib/site";
import { projectTypeOptions, budgetOptions, timelineOptions } from "@/lib/contact-form-options";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

type SubmissionStatus = "idle" | "sending" | "sent" | "error";

const emptyFormValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

type SelectFieldProps = {
  id: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

function SelectField({ id, value, options, onChange }: SelectFieldProps) {
  return (
    <select
      id={id}
      required
      value={value}
      className={formControlClassName}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select one
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(emptyFormValues);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const updateField = (field: keyof FormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (submissionStatus === "sent" || submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submissionStatus === "sending") return;

    setSubmissionStatus("sending");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formValues.name,
          email: formValues.email,
          project_type: formValues.projectType,
          budget: formValues.budget,
          timeline: formValues.timeline,
          message: formValues.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmittedEmail(formValues.email);
        setFormValues(emptyFormValues);
        setSubmissionStatus("sent");
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormField id="name" label="Name">
        <input
          id="name"
          type="text"
          required
          value={formValues.name}
          className={formControlClassName}
          placeholder="Your name"
          onChange={(e) => updateField("name", e.target.value)}
        />
      </FormField>

      <FormField id="email" label="Email">
        <input
          id="email"
          type="email"
          required
          value={formValues.email}
          className={formControlClassName}
          placeholder="you@example.com"
          onChange={(e) => updateField("email", e.target.value)}
        />
      </FormField>

      <FormField id="projectType" label="Project type">
        <SelectField
          id="projectType"
          value={formValues.projectType}
          options={projectTypeOptions}
          onChange={(value) => updateField("projectType", value)}
        />
      </FormField>

      <FormField id="budget" label="Budget">
        <SelectField
          id="budget"
          value={formValues.budget}
          options={budgetOptions}
          onChange={(value) => updateField("budget", value)}
        />
      </FormField>

      <FormField id="timeline" label="Timeline">
        <SelectField
          id="timeline"
          value={formValues.timeline}
          options={timelineOptions}
          onChange={(value) => updateField("timeline", value)}
        />
      </FormField>

      <FormField id="message" label="Message">
        <textarea
          id="message"
          required
          rows={5}
          value={formValues.message}
          className={`${formControlClassName} resize-none`}
          placeholder="What are you building, and what's blocking you right now? Links to an existing app or designs help."
          onChange={(e) => updateField("message", e.target.value)}
        />
      </FormField>

      <button
        type="submit"
        disabled={submissionStatus === "sending"}
        className="w-full px-5 py-2.5 bg-foreground text-white text-sm rounded hover:bg-teal transition-colors disabled:opacity-60"
      >
        {submissionStatus === "sending" ? "Sending…" : "Send project details"}
      </button>

      {submissionStatus === "sent" && (
        <p className="text-sm text-teal">
          Got it. I'll reply to {submittedEmail} within {site.replyTimeframe}. Want to move
          faster?{" "}
          <a
            href={site.schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Book a call →
          </a>
        </p>
      )}
      {submissionStatus === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Email me directly at{" "}
          <a href={`mailto:${site.contactEmail}`} className="underline">
            {site.contactEmail}
          </a>
        </p>
      )}
    </form>
  );
}
