export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "white-label-automation",
    title: "White Label Automation",
    description:
      "Built tooling to automate mobile app white label onboarding, eliminating repetitive manual configuration across 200+ client apps.",
    tags: ["Bash", "Python", "iOS", "Android"],
    metric: "2 hrs/day saved per engineer",
  },
  {
    id: "cicd-optimization",
    title: "CI/CD Pipeline Optimization",
    description:
      "Redesigned the Android build pipeline on Bitrise, cutting build times by 67% and unblocking daily releases.",
    tags: ["Bitrise", "GitHub Actions", "Fastlane", "Android"],
    metric: "1 hr → 20 min build time",
  },
  {
    id: "release-management",
    title: "White Label Release Management",
    description:
      "Implemented a quarterly release schedule and automated versioning system to bring 200+ white label apps up to date.",
    tags: ["Git", "Fastlane", "iOS", "Android"],
    metric: "30% → 90%+ apps current",
  },
  {
    id: "store-selection-performance",
    title: "Store Selection Performance",
    description:
      "Diagnosed and resolved a critical UI performance bottleneck causing extreme load times in the enterprise POS app.",
    tags: ["Swift", "Kotlin", "Performance"],
    metric: "10+ min → <5 sec load time",
  },
  {
    id: "api-optimization",
    title: "API Latency Reduction",
    description:
      "Flattened nested algorithms and rewrote outdated SQL across multiple Ruby API endpoints serving the enterprise platform.",
    tags: ["Ruby", "SQL", "Backend"],
    metric: "50%+ latency reduction",
  },
  {
    id: "firmware-test-library",
    title: "Firmware Test Library",
    description:
      "Developed a Node.js test library from scratch to verify correctness of outsourced BLE firmware against spec.",
    tags: ["Node.js", "BLE", "Testing"],
  },
];
