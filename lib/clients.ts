export type Client = {
  id: string;
  name: string;
  description?: string;
};

export const clients: Client[] = [
  {
    id: "freshop-ncr-voyix",
    name: "Freshop by NCR Voyix",
  },
  {
    id: "pitchsix",
    name: "PitchSix",
  },
];
