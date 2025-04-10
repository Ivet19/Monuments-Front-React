import MonumentDto from "../dto/types";

export interface MonumentsClientStructure {
  getMonuments: () => Promise<MonumentDto[]>;
}
