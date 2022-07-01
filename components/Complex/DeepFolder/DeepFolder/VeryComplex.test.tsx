import { render, screen } from "@testing-library/react";
import VeryComplex from "./VeryComplex";

jest.mock("./VeryComplex.tsx");

describe("Very Complex Component", () => {
  test("It renders Very Simple Component", () => {
    render(<VeryComplex />);
    expect(screen.getByRole("title")).toBeInTheDocument();
    expect(screen.getByRole("title")).toHaveTextContent(
      "Simple Mocked Version"
    );
  });
});
