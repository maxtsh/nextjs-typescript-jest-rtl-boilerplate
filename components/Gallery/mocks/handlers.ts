import { DefaultBodyType, PathParams, rest } from "msw";
import { ImageType } from "../Gallery.types";
import type { GeneralResponse } from "types";

const handlers = [
  rest.get<DefaultBodyType, PathParams<keyof GeneralResponse<ImageType>>>(
    "/api/photos",
    (req, res, ctx) => {
      return res(
        ctx.delay(150),
        ctx.status(200),
        ctx.json({
          message: "success",
          data: [
            {
              id: 1,
              name: "Photo-01",
              src: "https://images.unsplash.com/photo-1656425950105-b89c0c19e185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
              favorite: false,
            },
          ],
        })
      );
    }
  ),
];

export default handlers;
