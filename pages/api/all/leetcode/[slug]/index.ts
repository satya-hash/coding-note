import type { NextApiRequest, NextApiResponse } from "next";
import problems from "../../problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { slug } = req.query;
  let filteredPosts = problems.filter(problem=>problem.id===slug)
  const limitPosts = [...filteredPosts];
  res.status(200).json({ limitPosts });

}
