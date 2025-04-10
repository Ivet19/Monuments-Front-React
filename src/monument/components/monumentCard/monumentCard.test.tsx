import { MemoryRouter } from "react-router";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import MonumentCard from "./monumentCard";
import Monument from "../../types";
import { sagradaFamilia } from "../../fixtures";

describe("Given the MonumentCard component", () => {
  describe("When it recieves Sagrada Familia", () => {
    test("Then it should show 'Sagrada Familia' inside a heading", () => {
      const monument: Monument = sagradaFamilia;
      render(
        <MemoryRouter>
          <MonumentCard monument={monument} />
        </MemoryRouter>,
      );

      const cardName = screen.getByRole("heading", {
        name: /sagrada familia/i,
      });

      expect(cardName).toBeVisible();
    });
  });
});
