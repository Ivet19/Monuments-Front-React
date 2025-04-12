import { useEffect } from "react";
import MonumentsList from "../../components/MonumentsList/MonumentsList";
import useMonuments from "../../hooks/useMonuments";

const MonumentsPage: React.FC = () => {
  const { monuments, loadMonuments } = useMonuments();

  useEffect(() => {
    loadMonuments();
  }, [loadMonuments]);

  return <MonumentsList monuments={monuments} />;
};

export default MonumentsPage;
