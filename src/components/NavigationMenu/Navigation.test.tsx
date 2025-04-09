import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' and an 'Add new monument' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
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
