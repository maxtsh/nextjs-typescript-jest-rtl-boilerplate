import { DefaultBodyType, PathParams, rest } from "msw";
import { GeneralResponse } from "types";

const handlers = [
  rest.get<DefaultBodyType, PathParams<keyof GeneralResponse<string[]>>>(
    "/api/foods",
    (req, res, ctx) => {
      const type = req.url.searchParams.get("type");
      if (type === "persian") {
        return res(
          ctx.delay(200),
          ctx.status(200),
          ctx.json({
            message: "success",
            data: ["Unit Test String Persian"],
          })
        );
      }
      if (type === "american") {
        return res(
          ctx.delay(200),
          ctx.status(200),
          ctx.json({
            message: "success",
            data: ["Unit Test String American"],
          })
        );
      }
      if (type === "german") {
        return res(
          ctx.delay(200),
          ctx.status(200),
          ctx.json({
            message: "success",
            data: ["Unit Test String German"],
          })
        );
      }
      return res(
        ctx.delay(200),
        ctx.status(400),
        ctx.json({ data: null, message: "Bad Request Test!" })
      );
    }
  ),
];
export default handlers;
