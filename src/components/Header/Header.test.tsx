import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
    });
    test("Then it should show 'Monuments' inside a level 1 heading", () => {
      const appTitle = screen.queryByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      screen.debug();

      expect(appTitle).toBeVisible();
    });
    test("Then it should show a 'Monuments' and an 'Add new monument' link", () => {
      const monumentsLink = screen.queryByRole("link", { name: /monuments/i });

      expect(monumentsLink).toBeVisible();

      expect(monumentsLink).toBeVisible();
    });
  });
});
