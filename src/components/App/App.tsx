import Header from "../Header/Header";
import { Outlet } from "react-router";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
