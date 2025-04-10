import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">Monuments</h1>
      <Navigation />
    </header>
  );
};

export default Header;
