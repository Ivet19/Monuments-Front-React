import { render, screen } from "@testing-library/react";
import { sagradaFamilia } from "../../fixtures";
import MonumentCard from "./MonumentCard";
import { Monument } from "../../types";

describe("Given the MonumentCard component", () => {
  describe("When it recieves Sagrada Familia", () => {
    test("Then it should show 'Sagrada Familia' inside a heading", () => {
      const monument: Monument = sagradaFamilia;
      render(<MonumentCard monument={monument} />);

      const cardName = screen.getByRole("heading", {
        name: /sagrada familia/i,
      });

      expect(cardName).toBeVisible();
    });
  });
});
