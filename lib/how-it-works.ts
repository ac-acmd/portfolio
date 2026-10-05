export type ProcessStep = {
  title: string;
  detail: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Request an audit",
    detail: "reply within 1 business day",
    description: "Tell me about your app and your Bluetooth device. I confirm the scope and the price.",
  },
  {
    title: "Share access",
    detail: "spec, code, hardware",
    description: "Send the peripheral spec and read access to the code. Send a device too if you want on-device testing.",
  },
  {
    title: "Get your report",
    detail: "5 business days",
    description: "Severity-ranked findings, a recommended approach, and a fixed-price quote for the fix. Delivered even if nothing is wrong.",
  },
  {
    title: "Fix it and stay covered",
    detail: "optional",
    description: "Sign the project within 30 days and the $400 is credited. A retainer then keeps the app working through OS updates.",
  },
];
