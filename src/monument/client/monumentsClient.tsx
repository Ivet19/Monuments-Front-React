import { mapMonumentsDtoToMonuments } from "../dto/mappers";
import { Monument } from "../types";
import MonumentDto from "../dto/types";
import { MonumentsClientStructure } from "./types";

class MonumentsClient implements MonumentsClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getMonuments = async (): Promise<Monument[]> => {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monuments);
  };
}

export default MonumentsClient;
