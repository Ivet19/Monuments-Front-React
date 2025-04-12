import { createContext } from "react";
import MonumentsContextStructure from "./types";

export const MonumentsContext = createContext<MonumentsContextStructure | null>(
  null,
);

MonumentsContext.displayName = "MonumentsContext";
