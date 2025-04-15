import { mapMonumentsDtoToMonuments } from "../dto/mappers";
import { Monument } from "../types";
import { MonumentDto } from "../dto/types";
import { MonumentData } from "../types";
import { MonumentsClientStructure } from "./types";
import { mapMonumentDtoToMonument } from "../dto/mappers";

class MonumentsClient implements MonumentsClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getMonuments = async (): Promise<Monument[]> => {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monuments);
  };

  public async addMonument(monumentData: MonumentData): Promise<Monument> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/monuments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monumentData),
    });

    if (!response.ok) {
      throw new Error("Error creating monument");
    }

    const newMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(newMonument);
  }

  public async deleteMonument(monumentId: string): Promise<Monument> {
    const response = await fetch(`${this.apiUrl}/monuments/${monumentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const deletedMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(deletedMonument);
  }
}

export default MonumentsClient;
