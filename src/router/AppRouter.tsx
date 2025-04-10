import { Route, Routes } from "react-router";
import App from "../components/App/App";
import MonumentsPage from "../monument/pages/MonumentsPage/MonumentsPage";
import AddMonumentPage from "../monument/pages/AddMonumentPage/AddMonumentPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/monuments" element={<MonumentsPage />} />
        <Route path="/add" element={<AddMonumentPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
