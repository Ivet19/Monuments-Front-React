import { MonumentDto } from "../dto/types";
import { MonumentData } from "../types";
import { Monument } from "../types";

export interface MonumentsClientStructure {
  getMonuments: () => Promise<MonumentDto[]>;
  addMonument: (monumentData: MonumentData) => Promise<Monument>;
}
