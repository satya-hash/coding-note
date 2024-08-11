"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Content } from "@/lib/interfaces";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { getAllPosts } from "@/lib/utils";

const Posts = () => {
  const [allproblems, setAllproblems] = useState<Content[] | null>(null);
  const getData = async () => {
    let data = await getAllPosts();
    setAllproblems(data.limitPosts);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!allproblems) return <Loading />;
  return (
    <table className="w-full">
      {allproblems.map((problem, idx) => (
        <div key={idx} className="w-full ">
          <hr className="bg-btn-primary w-full opacity-40 my-10 " />
          <tr>
            <td className="w-1/4">
              <h3 className="text-lg opacity-85">
                {" "}
                {`${new Date(problem.dateOfUpload).toLocaleString("default", {
                  month: "long",
                })} ${new Date(problem.dateOfUpload).getDate()}, ${new Date(
                  problem.dateOfUpload
                ).getFullYear()}`}{" "}
              </h3>
            </td>
            <td>
              <h2 className="text-2xl font-semibold"> {problem.title} </h2>
              <h3 className="text-link-primary capitalize">
                {" "}
                {problem.difficulty}{" "}
              </h3>
              <p className="my-5"> {problem.statement} </p>
              <Link
                className="text-link-primary font-semibold mt-10 flex gap-2 hover:gap-3 transition ease-in-out w-fit"
                href={problem.link}
              >
                {" "}
                <span>Learn more</span>
                <MoveRightIcon />
              </Link>
            </td>
          </tr>
        </div>
      ))}
    </table>
  );
};

export default Posts;
