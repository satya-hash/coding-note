import type { NextApiRequest, NextApiResponse } from "next";
import problems from "@/pages/api/all/problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let { query } = req.query;
    let data = problems.filter((problem) => {
        return (
            problem.title.toLowerCase().includes(query as string) ||
            problem.id.toLowerCase().includes(query as string)
        );
    });
  res.status(200).json({ data, total: data.length });
}
