import { cleanup, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  afterAll(() => {
    cleanup();
    jest.resetAllMocks();
  });

  // Default Value = 0
  describe("initialized with defaultValue = 0 and buttons on the screen", () => {
    beforeEach(() => {
      render(<Counter defaultValue={0} />);
    });

    test("Renders correctly with defaultValue = 0", () => {
      expect(screen.getByRole("counter-number")).toBeInTheDocument();
      expect(screen.getByRole("counter-number")).toHaveTextContent("0");
      expect(screen.getByRole("add")).toBeInTheDocument();
      expect(screen.getByRole("reduce")).toBeInTheDocument();
    });

    describe("When add clicked", () => {
      beforeEach(async () => {
        await user.click(screen.getByRole("add"));
      });

      test("On add click it changes to 1", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("1");
      });
    });

    describe("When reduce clicked", () => {
      beforeEach(async () => {
        await user.click(screen.getByRole("reduce"));
      });

      test("On reduce click it changes to -1", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("-1");
      });
    });
  });

  // Default Value = 10
  describe("initialized with defaultValue = 10 and buttons on the screen", () => {
    beforeEach(() => {
      render(<Counter defaultValue={10} />);
    });

    test("Renders correctly with defaultValue = 10", () => {
      expect(screen.getByRole("counter-number")).toBeInTheDocument();
      expect(screen.getByRole("counter-number")).toHaveTextContent("10");
      expect(screen.getByRole("add")).toBeInTheDocument();
      expect(screen.getByRole("reduce")).toBeInTheDocument();
    });

    describe("when incrementor changes to 5 and add is clicked", () => {
      beforeEach(async () => {
        await user.type(screen.getByRole("incrementor"), "5");
        await user.click(screen.getByRole("add"));
      });

      test("value is 15", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("15");
      });
    });

    describe("when incrementor changes to 5 and reduce is clicked", () => {
      beforeEach(async () => {
        await user.type(screen.getByRole("incrementor"), "5");
        await user.click(screen.getByRole("reduce"));
      });

      test("value is 5", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("5");
      });
    });
  });

  // Default Value = 11 and we have max limit of 12
  describe("initialized with defaultValue = 12 and buttons on the screen with max = 12", () => {
    beforeEach(() => {
      render(<Counter defaultValue={12} max={12} />);
    });

    test("Renders correctly with defaultValue = 12", () => {
      expect(screen.getByRole("counter-number")).toBeInTheDocument();
      expect(screen.getByRole("counter-number")).toHaveTextContent("12");
      expect(screen.getByRole("add")).toBeInTheDocument();
      expect(screen.getByRole("reduce")).toBeInTheDocument();
    });

    describe("When add clicked", () => {
      beforeEach(async () => {
        await user.click(screen.getByRole("add"));
      });

      test("On add click it should not change to 13", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("12");
      });
    });
  });

  // Default Value = 0 and we have max limit of 0
  describe("initialized with defaultValue = 0 and buttons on the screen with max = 0", () => {
    beforeEach(() => {
      render(<Counter defaultValue={0} min={0} />);
    });

    test("Renders correctly with defaultValue = 0", () => {
      expect(screen.getByRole("counter-number")).toBeInTheDocument();
      expect(screen.getByRole("counter-number")).toHaveTextContent("0");
      expect(screen.getByRole("add")).toBeInTheDocument();
      expect(screen.getByRole("reduce")).toBeInTheDocument();
    });

    describe("When add clicked", () => {
      beforeEach(async () => {
        await user.click(screen.getByRole("reduce"));
      });

      test("On add click it should not change to -1", () => {
        expect(screen.getByRole("counter-number")).toHaveTextContent("0");
      });
    });
  });
});
