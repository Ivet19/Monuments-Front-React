import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <Header />
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
          <Header />
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
