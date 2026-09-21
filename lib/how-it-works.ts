export type ProcessStep = {
  title: string;
  detail: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Scope call",
    detail: "15 min, free",
    description: "You describe the problem. I tell you whether I'm the right fit and give a rough price range.",
  },
  {
    title: "Written quote",
    detail: "within 48 hours",
    description: "Scope, price, and timeline in writing. No surprises.",
  },
  {
    title: "Build",
    detail: "weekly test builds",
    description: "You get test builds on your phone and async progress updates.",
  },
  {
    title: "Ship and handoff",
    detail: "you own everything",
    description: "I handle App Store and Play Store submission. Code lives in your repo, and you own everything.",
  },
];
