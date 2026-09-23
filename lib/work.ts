export type WorkItem = {
  id: string;
  title: string;
  client: string;
  outcome: string;
  metric?: string;
  tags: string[];
  caseStudySlug?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "ble-connection-time",
    title: "BLE connection time",
    client: "PitchSix",
    outcome: "Users waited 15 seconds for the app to connect to the device. Now it takes 5.",
    metric: "15 sec → 5 sec",
    tags: ["Android", "BLE", "Performance"],
    caseStudySlug: "force-board-ble-connection-time-optimization",
  },
    {
    id: "white-label-automation",
    title: "White label onboarding and releases",
    client: "Freshop by NCR Voyix",
    outcome: "Automated onboarding and releases across 200+ apps. Onboarding dropped from 2 hrs to 40 min, and up-to-date apps went from 30% to 90%+.",
    metric: "2 hrs → 40 min · 30% → 90%+ current",
    tags: ["Bash", "Python", "Fastlane", "iOS", "Android"],
    caseStudySlug: "freshop-mobile-app-onboarding-automation",
  },
  {
    id: "firmware-test-library",
    title: "Firmware test library",
    client: "VSSL",
    outcome: "Built a test suite that checks outsourced BLE firmware against the spec, so problems surface before release, not after.",
    tags: ["Node.js", "BLE", "Testing"],
  },
  {
    id: "store-selection-performance",
    title: "Store selection performance",
    client: "Freshop by NCR Voyix",
    outcome: "A screen that took 10+ minutes to load now loads in under 5 seconds.",
    metric: "10+ min → <5 sec",
    tags: ["Swift", "Kotlin", "Performance"],
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD pipeline",
    client: "Freshop by NCR Voyix",
    outcome: "Android builds went from 1 hour to 20 minutes, which unblocked daily releases.",
    metric: "1 hr → 20 min",
    tags: ["Bitrise", "GitHub Actions", "Fastlane", "Android"],
  },
  {
    id: "api-latency",
    title: "API latency",
    client: "Freshop by NCR Voyix",
    outcome: "Cut response times by 50%+ by rewriting slow SQL and flattening nested logic.",
    metric: "50%+ faster",
    tags: ["Ruby", "SQL", "Backend"],
  },
];
