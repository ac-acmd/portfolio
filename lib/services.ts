export const bluetoothAuditServiceQueryValue = "bluetooth-audit";
export const bluetoothAuditRequestPath = "/contact?service=bluetooth-audit";

export type ServicePathStep = {
  stepNumber: number;
  serviceName: string;
  summary: string;
  anchorId: string;
};

export const servicePathSteps: ServicePathStep[] = [
  {
    stepNumber: 1,
    serviceName: "Audit",
    summary: "Find what's wrong",
    anchorId: "bluetooth-audit",
  },
  {
    stepNumber: 2,
    serviceName: "Project",
    summary: "Fix it at a fixed price",
    anchorId: "project",
  },
  {
    stepNumber: 3,
    serviceName: "Retainer",
    summary: "Keep it working",
    anchorId: "retainer",
  },
];

export type BluetoothAudit = {
  name: string;
  pricePerOperatingSystem: number;
  turnaroundBusinessDays: number;
  projectCreditWindowDays: number;
  highlights: string[];
  additionalDetails: string[];
};

export const bluetoothAudit: BluetoothAudit = {
  name: "BLE Code Audit",
  pricePerOperatingSystem: 400,
  turnaroundBusinessDays: 5,
  projectCreditWindowDays: 30,
  highlights: [
    "Review of your app on one OS and one peripheral: BLE spec and static audit of your app's BLE stack. Additional peripherals quoted separately. Both iOS and Android = 2 audits.",
    "Deliverable: severity-ranked report with recommended approach and a fixed-price estimate",
    "Turnaround: 5 business days from receipt of spec, code access, and (if testing) hardware.",
    "$400 is credited toward the quoted project if signed within 30 days of report delivery",
  ],
  additionalDetails: [
    "On-device testing: up to 2 hrs, client provides hardware. May include up to one peripheral.",
    "Paid and delivered even if no issues are found",
    "Quote valid for 30 days",
    "Report is for the client's internal use",
  ],
};

export type ProjectService = {
  name: string;
  typicalPriceRange: string;
  minimumPrice: number;
  highlights: string[];
  additionalDetails: string[];
};

export const projectService: ProjectService = {
  name: "Project",
  typicalPriceRange: "$2k–$7k",
  minimumPrice: 1000,
  highlights: [
    "Fixed price, scoped and quoted per project",
    "Billing: 40% deposit, 30% midpoint, 30% on delivery (50/50 for projects under $2k).",
    "1 revision round per milestone",
    "30-day bug-fix warranty for defects in delivered work, not new issues from OS updates or third-party changes",
  ],
  additionalDetails: [
    "Designer or third-party costs are itemized as pass-through",
    "Work starts once the deposit clears",
    "Deposit is non-refundable once work begins",
  ],
};

export const retainerFeatureNames = [
  "Included hours",
  "OS monitoring",
  "Monthly report",
  "Releases",
  "Response time",
  "Project discount",
  "Rollover",
] as const;

export type RetainerFeatureName = (typeof retainerFeatureNames)[number];

export type RetainerPlan = {
  id: "standard-retainer" | "essentials-retainer";
  name: string;
  firstOperatingSystemMonthlyPrice: number;
  secondOperatingSystemMonthlyPrice: number;
  featureValues: Record<RetainerFeatureName, string>;
};

export const retainerPlans: RetainerPlan[] = [
  {
    id: "standard-retainer",
    name: "Standard",
    firstOperatingSystemMonthlyPrice: 1000,
    secondOperatingSystemMonthlyPrice: 500,
    featureValues: {
      "Included hours": "5 hrs of fixes, maintenance, consulting",
      "OS monitoring": "Summary in monthly report",
      "Monthly report": "1-page monthly report, delivered by the 5th",
      Releases: "Up to 1 per OS per month, handling up to 1.5 hours",
      "Response time": "First reply within 1 business day",
      "Project discount": "15%",
      Rollover: "1 month, capped at 5 hrs",
    },
  },
  {
    id: "essentials-retainer",
    name: "Essentials",
    firstOperatingSystemMonthlyPrice: 350,
    secondOperatingSystemMonthlyPrice: 175,
    featureValues: {
      "Included hours": "1 hr of fixes, maintenance, consulting",
      "OS monitoring": "Email alerts when something affects your app",
      "Monthly report": "None",
      Releases: "Not included, billed at overage rate",
      "Response time": "First reply within 2 business days",
      "Project discount": "10%",
      Rollover: "None",
    },
  },
];

export const retainerSharedFeatures: string[] = [
  "Quarterly compatibility check against the latest OS release or beta",
  "2-month minimum (waived if it follows a completed project)",
];

export const retainerNotes: string[] = [
  "Monitoring, report, quarterly check, and release handling are provided in addition to the included hours.",
  "Store rejections and rework draw from the included hours.",
  "Essentials clients can upgrade to Standard at any time.",
  "Unused hours on the Standard plan roll over once and expire after the following month.",
];

export type ServiceTerm = {
  title: string;
  description: string;
};

export const serviceTerms: ServiceTerm[] = [
  {
    title: "Per OS",
    description:
      "iOS (including iPadOS) or Android. watchOS, Wear OS, macOS, and web are quoted separately. Native BLE code that differs per platform may be quoted separately.",
  },
  {
    title: "Billing",
    description:
      "Retainers are billed upfront on the 1st, with 30 days' notice to cancel. Work and retainer coverage pause on overdue invoices.",
  },
  {
    title: "Overage work",
    description:
      "$120/hr for active retainer clients, $130/hr for everyone else, 1 hr minimum. Work over 8 hrs is re-scoped as a project.",
  },
  {
    title: "Discounts and credits",
    description:
      "The retainer discount applies to the project price first, then the audit credit is applied to the deposit.",
  },
];

export const customServiceNote =
  "Need something different? Let's talk and tailor it to your needs.";
