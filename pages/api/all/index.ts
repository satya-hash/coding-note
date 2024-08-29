import type { NextApiRequest, NextApiResponse } from "next";
import problems from "./problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { limit, page, type } = req.query;
  const limitNumber = parseInt(limit as string) || 10;
  const pageNumber = parseInt(page as string) || 1;

  let filteredPosts = problems.sort(
    (a, b) =>
      new Date(b.dateOfUpload).getTime() - new Date(a.dateOfUpload).getTime()
  );

  if (type?.length !== 0) {
    filteredPosts = filteredPosts.filter((problem) => problem.type === type);
  }

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  res.status(200).json({ paginatedPosts, total: filteredPosts.length });
}
