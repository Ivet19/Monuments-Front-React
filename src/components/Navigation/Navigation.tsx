import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="navigation-links">
        <li>
          <NavLink className="navigation-link" to="/monuments">
            Monuments
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-link" to="/add-new-monument">
            Add new monument
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
