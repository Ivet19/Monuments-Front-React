import Monument from "../../types";
import { MonumentDto } from "./types";

export const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  return monumentsDto.map<Monument>(({ ...monumentDto }) => ({
    ...monumentDto,
    imageAlt: `general view of the ${monumentDto.name} monument`,
  }));
};
