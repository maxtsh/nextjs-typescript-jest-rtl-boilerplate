import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Render Hello World", () => {
  render(<Hello />);
  const myElm = screen.getByText("Hello World");
  expect(myElm).toBeInTheDocument();
});
