export type SiteDetails = {
  ownerName: string;
  contactEmail: string;
  schedulingUrl: string;
  replyTimeframe: string;
  retainerHourlyRate: number;
  standardHourlyRate: number;
  retainerMinimumHoursPerMonth: number | null;
  typicalProjectStartingPrice: number | null;
  quoteTurnaround: string;
  buildUpdateCadence: string;
};

export const site: SiteDetails = {
  ownerName: "Austin Cole",
  contactEmail: "austin@austincolemobiledev.com",
  schedulingUrl: "https://REPLACE-WITH-SCHEDULING-LINK",
  replyTimeframe: "1 business day",
  retainerHourlyRate: 60,
  standardHourlyRate: 80,
  retainerMinimumHoursPerMonth: null,
  typicalProjectStartingPrice: null,
  quoteTurnaround: "48 hours",
  buildUpdateCadence: "weekly",
};
