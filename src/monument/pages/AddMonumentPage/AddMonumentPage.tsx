import MonumentForm from "../../components/MonumentForm/MonumentForm";
import useMonuments from "../../hooks/useMonuments";
import "./AddMonumentPage.css";

const AddMonumentPage: React.FC = () => {
  const { createMonument } = useMonuments();

  return (
    <div className="form-container">
      <h2 className="main-title">Add a new monument</h2>
      <MonumentForm action={createMonument} />
    </div>
  );
};

export default AddMonumentPage;
