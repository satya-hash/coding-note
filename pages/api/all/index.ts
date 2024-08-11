import type { NextApiRequest, NextApiResponse } from "next";
import problems from "./problems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let {limit,type} = req.query;
  const limitNumber = parseInt(limit as string)||10;
  
  let filteredPosts=problems;
  if(type){
    filteredPosts=problems.filter(problem=>problem.type===type)
  }
  const limitPosts = [...filteredPosts.slice(0,limitNumber)].sort((a,b)=>new Date(b.dateOfUpload).getTime() - new Date(a.dateOfUpload).getTime());
  res.status(200).json({ limitPosts });
}
