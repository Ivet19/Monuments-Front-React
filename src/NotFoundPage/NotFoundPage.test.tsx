import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the MonumentsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Page not found' inside a level 1 heading", () => {
      render(<NotFoundPage />);

      const pageTitle = screen.getByRole("heading", {
        name: /page not found/i,
        level: 1,
      });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show an image of 404 error", () => {
      render(<NotFoundPage />);

      const pageImageAlt = screen.getByAltText("error 404");

      expect(pageImageAlt).toBeVisible();
    });
  });
});
