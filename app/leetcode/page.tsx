"use client";
import Loading from "@/app/components/Loading";
import ProblemCard from "@/app/components/ProblemCard";
import { Content } from "@/app/lib/interfaces";
import { getAllPosts } from "@/app/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [allproblems, setAllproblems] = useState<Content[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 9;
  const getData = async (page:number,type: string) => {
    let data = await getAllPosts(limit,page,type);
    setAllproblems(data.paginatedPosts);
    setTotal(data.total);

  };

  const handleClick = (difficulty: string) => {
    setPage(1);
    getData(page,'problem');
  };

  useEffect(() => {
    getData(page,"problem");
  }, [page]);

  if (!allproblems) return <Loading />;
  const totalPages = Math.ceil(total / limit);

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
      <div className="pagination flex justify-center mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="mx-1 px-3 py-1 rounded bg-bg-code hover:bg-link-primary disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            disabled={page === i + 1}
            className={`mx-1 aspect-square w-8 rounded-full ${
              page === i + 1
                ? "bg-btn-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="mx-1 px-3 py-1 rounded bg-bg-code hover:bg-link-primary disabled:opacity-50"
        >
          Next
        </button>
      </div>{" "}
    </div>
  );
}
