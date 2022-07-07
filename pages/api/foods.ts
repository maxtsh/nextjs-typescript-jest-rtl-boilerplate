import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const Foods: { [key: string]: string[] } = {
  persian: [
    "Chicken",
    "Kebab Koobideh",
    "Kebab Bonab",
    "Ghorme Sabzi",
    "Gheyme",
  ],
  american: ["McDonald", "Fastfood", "Cheeseburger", "Donuts"],
  german: ["Vegtables", "Fish", "Bread", "Sandwitches"],
};

let to: ReturnType<typeof setTimeout> | null = null;

const Food: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    if (
      req?.query?.type &&
      typeof req.query.type === "string" &&
      Foods[req?.query?.type]
    ) {
      const data = Foods[req.query.type];
      if (to) clearTimeout(to);
      to = setTimeout(() => {
        res.status(200).json({ message: "sucess", data });
      }, 200);
    }
  } else {
    res.status(400).json({ message: "Bad Request!" });
  }
};

export default Food;
