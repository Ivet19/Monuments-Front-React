import "./App.css";
import Header from "../Header/Header";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
