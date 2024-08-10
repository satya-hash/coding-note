"use client";
import Loading from "@/components/Loading";
import ProblemCard from "@/components/ProblemCard";
import { Problem } from "@/lib/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [allproblems, setAllproblems] = useState<Problem[] | null>(null);
  const getData = async () => {
    let res = await axios.get("/api/leetcode/allproblems");
    console.log(res.data.problems);

    setAllproblems(res.data.problems);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!allproblems) return <Loading />;

  return (
    <div className="latest_problems max-w-screen-xl mx-auto p-4 w-full">
      <h1 className="font-bold text-2xl" mt-2>
        Latest Problems
      </h1>
      <div className="flex flex-wrap w-full">
        {allproblems.map((problem, idx) => (
          <ProblemCard problem={problem} key={idx} />
        ))}
      </div>
    </div>
  );
}
