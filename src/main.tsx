import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import "@fontsource/poiret-one/index.css";
import "./styles/styles.css";
import MonumentsContextProvider from "./monument/context/MonumentsContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MonumentsContextProvider>
        <AppRouter />
      </MonumentsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
