import type { NextApiRequest, NextApiResponse } from "next";
import problems from "../../problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { slug } = req.query;
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  let filteredPosts = problems.filter(problem=>problem.id===slugStr)
  const limitPosts = [...filteredPosts];
  res.status(200).json({ limitPosts });

}
