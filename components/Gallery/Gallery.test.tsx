import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Gallery from "./Gallery";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Gallery", () => {
  describe("Component renders  correctly", () => {
    beforeEach(() => {
      render(<Gallery />);
    });

    test("Renders title", () => {
      expect(screen.getByRole("title")).toBeInTheDocument();
    });
  });

  describe("Renders Loading after requesting", () => {
    beforeEach(() => {
      render(<Gallery />);
    });

    test("Renders loading text", async () => {
      await screen.findByRole("loading");
      expect(screen.getByRole("loading")).toBeInTheDocument();
    });

    test("Renders images", async () => {
      await waitForElementToBeRemoved(() => screen.queryByRole("loading"));
      expect(screen.getByRole("image-list")).toBeInTheDocument();
    });
  });
});
