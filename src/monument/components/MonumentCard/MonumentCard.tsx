import { Monument } from "../../types";
import "./MonumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({
  monument: { name, imageUrl, imageAlt, description, city, country },
}) => {
  return (
    <article className="monument">
      <h2 className="monument__name">{name}</h2>
      <img className="monument__image" src={imageUrl} alt={imageAlt} />
      <p className="monument__description">{description}</p>
      <span className="monument__location">{`${city}, ${country}`}</span>
    </article>
  );
};

export default MonumentCard;
