import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import AddMonumentPage from "./AddMonumentPage";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the AddMonumentPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add a new monument' inside a heading", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <AddMonumentPage />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const pageTitle = screen.getByRole("heading", {
        name: /add a new monument/i,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show 'Please fill out the following form to create a new monument' inside a heading", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <AddMonumentPage />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const formTitle = screen.getByRole("heading", {
        name: /please fill out the following form to create a new monument/i,
      });

      expect(formTitle).toBeVisible();
    });
  });
});
