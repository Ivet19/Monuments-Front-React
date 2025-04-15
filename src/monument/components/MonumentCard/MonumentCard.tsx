import { Monument } from "../../types";
import useMonuments from "../../hooks/useMonuments";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { id, name, imageUrl, imageAlt, description, city, country },
}) => {
  const { removeMonumentById } = useMonuments();

  return (
    <article className="monument">
      <h2 className="monument__name">{name}</h2>
      <img className="monument__image" src={imageUrl} alt={imageAlt} />
      <p className="monument__description">{description}</p>
      <span className="monument__location">{`${city}, ${country}`}</span>
      <button
        className="monument__delete-button"
        onClick={() => removeMonumentById(id)}
      >
        Delete
      </button>
    </article>
  );
};

export default MonumentCard;
