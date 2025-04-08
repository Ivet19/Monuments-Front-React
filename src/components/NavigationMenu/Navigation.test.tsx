import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' and an 'Add new monument' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>,
      );

      const monumentsLink = screen.queryByRole("link", { name: /monuments/i });

      expect(monumentsLink).toBeVisible();
    });
  });
});
