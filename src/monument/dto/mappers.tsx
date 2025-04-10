import Monument from "../types";
import MonumentDto from "./types";

export const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  const monuments = monumentsDto.map<Monument>(({ name, ...monumentDto }) => ({
    ...monumentDto,
    name,
    imageAlt: `general view of the ${name} monument`,
  }));

  return monuments;
};
