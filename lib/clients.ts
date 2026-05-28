export type Client = {
  id: string;
  name: string;
  description?: string;
};

export const clients: Client[] = [
  {
    id: "ncr-voyix",
    name: "NCR Voyix",
  },
  {
    id: "pitchsix",
    name: "PitchSix",
  },
];
