import { render, screen } from "@testing-library/react";
import { sagradaFamilia, simpsonsHouse } from "../../fixtures";
import MonumentsList from "./MonumentsList";

describe("Given the MonumentsList component", () => {
  describe("When it receives Simpson's house and Sagrada Familia", () => {
    test("Then it should show the names of Simpson's house and Sagrada Familia inside a heading", () => {
      render(<MonumentsList monuments={[simpsonsHouse, sagradaFamilia]} />);

      const simpsonsHouseName = screen.getByRole("heading", {
        name: simpsonsHouse.name,
      });
      const sagradaFamiliaName = screen.getByRole("heading", {
        name: sagradaFamilia.name,
      });

      expect(simpsonsHouseName).toBeVisible();
      expect(sagradaFamiliaName).toBeVisible();
    });
  });
});
