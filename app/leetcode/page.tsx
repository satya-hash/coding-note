"use client";
import Loading from "@/app/components/Loading";
import ProblemCard from "@/app/components/ProblemCard";
import { Content } from "@/app/lib/interfaces";
import { getSpecificPosts } from "@/app/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [allproblems, setAllproblems] = useState<Content[] | null>(null);

  const getData = async (type: string) => {
    let data = await getSpecificPosts(type);
    setAllproblems(data.paginatedPosts);
  };

  useEffect(() => {
    getData("problem");
  }, []);

  if (!allproblems) return <Loading />;

  return (
    <div className="latest_problems max-w-screen-xl mx-auto mt-10 p-4 w-full">
      <h1 className="font-bold md:text-3xl text-2xl lg:text-4xl mb-3 ">
        Latest Problems
      </h1>
      <hr className="bg-btn-primary opacity-40" />

      <div className="flex flex-wrap w-full ">
        {allproblems.map((problem, idx) => (
          <ProblemCard problem={problem} key={idx} />
        ))}
      </div>
    </div>
  );
}
