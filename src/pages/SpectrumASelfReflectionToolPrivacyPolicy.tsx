import SEO from "../components/SEO";

export default function SpectrumASelfReflectionToolPrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Spectrum"
        description="Privacy policy for the Spectrum BITE model questionnaire app."
        path="/spectrum-a-self-reflection-tool-privacy-policy"
        noIndex
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-mono text-teal uppercase tracking-widest mb-2">
            Privacy Policy
          </p>
          <h1 className="text-3xl font-medium text-foreground">
            Spectrum
          </h1>
          <p className="text-xs text-muted mt-2">
            Last updated: September 2, 2026
          </p>
        </div>

        <div className="max-w-2xl">
          <p className="text-sm text-muted leading-relaxed mb-4">
            Spectrum (&quot;the app&quot;) is an educational self-reflection questionnaire based on the BITE model. It is published by Austin Cole Mobile Development (&quot;we&quot;).
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Summary
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            We do not collect, store, transmit, or sell any personal data. The app has no network access.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Data the app stores
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            The app saves your questionnaire answers, in-progress sessions, and past results on your device only, using the operating system&apos;s secure storage. This data never leaves your device and is not accessible to us.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Data we collect
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            None. The app contains no analytics, advertising, crash reporting, or third-party SDKs, and it does not request internet permission.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Deleting your data
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Open Settings inside the app and choose &quot;Delete all data&quot; to erase every saved result and in-progress questionnaire. Uninstalling the app also removes all stored data.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Children
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            The app is not directed at children under 13 and does not knowingly collect information from anyone.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Support resources
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            The app includes a static list of support organizations with phone numbers and websites. Contacting any of them happens through your device&apos;s phone or browser and is subject to that organization&apos;s own privacy practices.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Changes
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            If this policy changes, the updated version will be published at this address with a new date.
          </p>

          <h2 className="text-xl font-medium text-foreground mt-10 mb-3">
            Contact
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Questions? Email us at{" "}
            <a
              href="mailto:austin@austincolemobiledev.com"
              className="text-foreground hover:text-teal transition-colors"
            >
              austin@austincolemobiledev.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
