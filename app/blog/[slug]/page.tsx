"use client";
import Loading from "@/app/components/Loading";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Content } from "@/app/lib/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [problem, setProblem] = useState<Content | null>(null);
  const getData = async (query: string) => {
    let res = await axios.get("/api/leetcode/two-sum");
    setProblem(res.data);
  };

  useEffect(() => {
    getData("two-sum");
  }, []);

  if (!problem) return <Loading />;
  else
    return (
      <div className="w-full mt-10 p-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center flex-row-reverse flex-wrap gap-2  justify-between">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/85430181?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <a className=" inline-flex items-center md:mb-2  font-semibold lg:mb-0">
                Coding Note
              </a>
            </div>
            <h1 className="text-2xl font-semibold text-link-primary">
              {" "}
              {problem.title}{" "}
            </h1>
            <p>
              {" "}
              {`${new Date(problem.dateOfUpload).toLocaleString("default", {
                month: "short",
              })} ${new Date(problem.dateOfUpload).getDate()}`}{" "}
            </p>{" "}
          </div>
          <div className="problem_details max-w-screen-lg mx-auto mt-10 flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-semibold">Introduction:</h3>
              <p className="mt-3"> {problem.statement} </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-2">Approach:</h3>
              <ul>
                {problem.steps.map((step, idx) => (
                  <li className="list-disc ml-5" key={idx}>
                    {" "}
                    <p> {step} </p>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
