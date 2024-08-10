import type { NextApiRequest, NextApiResponse } from "next";
import problems from "./problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ problems });
}
