import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Items from "./Items";

describe("Items Component", () => {
  test("Items render correctly", () => {
    render(<Items />);
    const toBtn = screen.getByRole("call-timeout");
    expect(toBtn).toBeInTheDocument();
    expect(toBtn).toHaveTextContent("Call Timeout");
  });

  test("After onClick, state changes to Second", async () => {
    render(<Items />);
    const toBtn = screen.getByRole("call-timeout");
    await user.click(toBtn);
    await waitFor(() =>
      expect(screen.getByRole("to-value")).toHaveTextContent("Second")
    );
  });
});
