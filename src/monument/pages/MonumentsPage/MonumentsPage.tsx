import { useContext, useEffect } from "react";
import { MonumentsContext } from "../../context/MonumentsContext";
import MonumentsList from "../../components/MonumentsList/MonumentsList";

const MonumentsPage: React.FC = () => {
  const { monuments, loadMonuments } = useContext(MonumentsContext)!;

  useEffect(() => {
    loadMonuments();
  }, [loadMonuments]);

  return <MonumentsList monuments={monuments} />;
};

export default MonumentsPage;
