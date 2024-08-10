import type { NextApiRequest, NextApiResponse } from "next";
import problems from "../allproblems/problems";
interface Problem {
  id: string;
  title: string;
  statement: string;
  examples: Array<{
    input: string;
    output: string;
    explanation: string;
  }>;
  approach: string;
  code: {
    javascript: string;
    python: string;
    java: string;
  };
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { problemId } = req.query;
  const problem = problems.find((problem) => problem.id === problemId);

  if (problem) {
    res.status(200).json(problem);
  } else {
    res.status(404).json({ error: "Problem not found" });
  }
}
