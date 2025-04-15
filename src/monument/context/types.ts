import { Monument } from "../types";
import { MonumentData } from "../types";

interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
  createMonument: (monumentData: MonumentData) => Promise<void>;
  removeMonumentById: (monumentId: string) => Promise<void>;
}

export default MonumentsContextStructure;
