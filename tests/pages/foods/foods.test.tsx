import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Foods from "pages/foods";
import server from "./mocks";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Foods Page", () => {
  describe("Page is being rendered correctly", () => {
    beforeEach(() => render(<Foods />));

    test("Title is rendered", () => {
      expect(screen.getByRole("title")).toBeInTheDocument();
    });

    test("Title is USE SWR TESTS", () => {
      expect(screen.getByRole("title")).toHaveTextContent("USE SWR TESTS");
    });

    test("Renders Persian Button", () => {
      expect(screen.getByRole("persianBtn")).toBeInTheDocument();
      expect(screen.getByRole("persianBtn")).toHaveTextContent("Persian");
    });

    test("Renders American Button", () => {
      expect(screen.getByRole("americanBtn")).toBeInTheDocument();
      expect(screen.getByRole("americanBtn")).toHaveTextContent("American");
    });

    test("Renders German Button", () => {
      expect(screen.getByRole("germanBtn")).toBeInTheDocument();
      expect(screen.getByRole("germanBtn")).toHaveTextContent("German");
    });
  });

  describe("Persian Foods Listing", () => {
    beforeEach(async () => {
      render(<Foods />);
      await user.click(screen.getByRole("persianBtn"));
    });

    test("Loading to appear", async () => {
      await screen.findByRole("loading");
      expect(screen.getByRole("loading")).toBeInTheDocument();
    });

    test("Render list", async () => {
      await screen.findByRole("loading");
      await waitForElementToBeRemoved(() => screen.queryByRole("loading"));
      expect(screen.getByRole("food-list")).toBeInTheDocument();
      expect(screen.getByRole("food-list-item")).toHaveTextContent(
        "Unit Test String Persian"
      );
    });
  });
});
