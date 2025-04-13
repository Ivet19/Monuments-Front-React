import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { MonumentsContext } from "./MonumentsContext";
import MonumentsContextStructure from "./types";
import MonumentsClient from "../client/monumentsClient";
import { Monument } from "../types";
import { MonumentData } from "../types";

const MonumentsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  const monumentClient = useMemo(() => new MonumentsClient(), []);

  const loadMonuments = useCallback(async (): Promise<void> => {
    const apiMonuments = await monumentClient.getMonuments();

    setMonuments(apiMonuments);
  }, [monumentClient]);

  const createMonument = async (monumentData: MonumentData): Promise<void> => {
    const newMonument = await monumentClient.addMonument(monumentData);

    setMonuments((monuments) => [...monuments, newMonument]);
  };

  const monumentsContextValue: MonumentsContextStructure = {
    monuments,
    loadMonuments,
    createMonument,
  };

  return (
    <MonumentsContext.Provider value={monumentsContextValue}>
      {children}
    </MonumentsContext.Provider>
  );
};

export default MonumentsContextProvider;
