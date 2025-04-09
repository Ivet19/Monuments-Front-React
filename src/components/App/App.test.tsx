import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.queryByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
    test("Then it should show a 'Monuments' and an 'Add new monument' link", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const monumentsLink = screen.queryByRole("link", { name: /monuments/i });
      const addMonumentsLink = screen.getByRole("link", {
        name: /add new monument/i,
      });

      expect(monumentsLink).toBeVisible();
      expect(addMonumentsLink).toBeVisible();
    });
  });
});
