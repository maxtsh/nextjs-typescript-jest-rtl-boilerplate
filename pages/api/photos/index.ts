import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const Handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({
      message: "success",
      data: [
        {
          id: 1,
          name: "Photo-01",
          src: "https://images.unsplash.com/photo-1656425950105-b89c0c19e185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
          favorite: false,
        },
        {
          id: 2,
          name: "Photo-02",
          src: "https://images.unsplash.com/photo-1656181606803-4591c30ac2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
          favorite: false,
        },
      ],
    });
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};

export default Handler;
