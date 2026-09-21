export type PricingOption = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export const pricingOptions: PricingOption[] = [
  {
    id: "retainer",
    name: "Retainer",
    price: "$60/hr",
    description: "Preferred rate for ongoing work. Best for continuous development and maintenance.",
  },
  {
    id: "hourly",
    name: "Hourly",
    price: "$80/hr",
    description: "No commitment. Bug fixes, audits, performance work, small features.",
  },
  {
    id: "fixed-scope",
    name: "Fixed-scope project",
    price: "Quoted up front",
    description: "One price, agreed before work starts.",
  },
];
