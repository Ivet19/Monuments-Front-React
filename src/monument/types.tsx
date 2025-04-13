export interface Monument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  country: string;
  city: string;
}

export type MonumentData = Omit<Monument, "id" | "imageAlt">;
