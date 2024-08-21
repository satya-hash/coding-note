"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Content } from "@/app/lib/interfaces";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { getAllPosts } from "@/app/lib/utils";
import { Badge } from "./ui/badge";

const Posts = () => {
  const [allproblems, setAllproblems] = useState<Content[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const getData = async (page: number) => {
    let data = await getAllPosts(limit, page, "");
    setAllproblems(data.paginatedPosts);
    setTotal(data.total);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  if (!allproblems) return <Loading />;

  const totalPages = Math.ceil(total / limit);

  return (
    <table className="w-full mb-5">
      {allproblems.map((problem, idx) => (
        <tbody
          key={idx}
          className="border-t-2 flex gap-5 mt-5 pt-10 rounded"
          style={{ borderColor: "rgba(256, 256, 256, 0.4)" }}
        >
          <tr>
            <td className="w-1/4 align-top">
              <h3 className="lg:text-lg text-sm opacity-85">
                {" "}
                {`${new Date(problem.dateOfUpload).toLocaleString("default", {
                  month: "long",
                })} ${new Date(problem.dateOfUpload).getDate()}, ${new Date(
                  problem.dateOfUpload
                ).getFullYear()}`}{" "}
              </h3>
            </td>
            <td>
              <h2 className="lg:text-2xl md:text-xl text-lg font-semibold">
                {" "}
                {problem.title}{" "}
              </h2>
              <Badge
                variant={problem.difficulty as "easy" | "medium" | "hard"}
                className="capitalize text-black"
              >
                {" "}
                {problem.difficulty}{" "}
              </Badge>
              <p className="my-5"> {problem.statement} </p>
              <Link
                className="text-btn-primary font-semibold mt-10 flex gap-2 hover:gap-3 transition ease-in-out w-fit"
                href={problem.link}
              >
                {" "}
                <span>Learn more</span>
                <MoveRightIcon />
              </Link>
            </td>
          </tr>
        </tbody>
      ))}
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
    </table>
  );
};

export default Posts;
