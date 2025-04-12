import MonumentsContextStructure from "../context/types";
import { MonumentsContext } from "../context/MonumentsContext";
import { useContext } from "react";

const useMonuments = (): MonumentsContextStructure => {
  const context = useContext(MonumentsContext);

  if (!context) {
    throw new Error("Missing Provider for MonumentContext");
  }

  return context;
};

export default useMonuments;
