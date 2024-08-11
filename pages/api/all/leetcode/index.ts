import type { NextApiRequest, NextApiResponse } from "next";
import problems from '@/pages/api/all/problems'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let {limit} = req.query;
  const limitNumber = parseInt(limit as string)||10;

  let filteredPosts=problems;
    filteredPosts=problems.filter(problem=>problem.type==='problem')
  const limitPosts = filteredPosts.slice(0,limitNumber);
  res.status(200).json({ limitPosts });
}
