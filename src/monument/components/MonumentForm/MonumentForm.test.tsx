import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });
  describe("When it renders", () => {
    test("Then it should show 'Please fill out the following form to create a new monument", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const formTitle = screen.getByRole("heading", {
        name: /please fill out the following form to create a new monument/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show an input for Name", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const inputName = screen.getByLabelText(/name/i);

      expect(inputName).toBeVisible();
    });

    test("Then it should show an input for Image URL", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const inputDescription = screen.getByLabelText(/image url/i);

      expect(inputDescription).toBeVisible();
    });

    test("Then it should 'Add monument' inside a button", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const buttonText = screen.getByRole("button", { name: /add monument/i });

      expect(buttonText).toBeVisible();
    });
  });
});
