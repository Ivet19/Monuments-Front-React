import { Monument } from "../../types";
import "./monumentCard.css";

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument: { name } }) => {
  return (
    <article className="monument">
      <h2 className="monument__name">{name}</h2>
    </article>
  );
};

export default MonumentCard;
