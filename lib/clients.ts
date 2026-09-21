export type Client = {
  id: string;
  name: string;
  description?: string;
  sizeLabel: string;
};

export const clients: Client[] = [
  {
    id: "pitchsix",
    name: "PitchSix",
    sizeLabel: "hardware startup",
  },
  {
    id: "vssl",
    name: "VSSL",
    sizeLabel: "hardware startup",
  },
  {
    id: "freshop-ncr-voyix",
    name: "Freshop by NCR Voyix",
    sizeLabel: "enterprise, 200+ apps",
  },
];
