"use client";
import Loading from "@/components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Problem } from "@/lib/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page({ params }: { params: { slug: string } }) {
  const [problem, setProblem] = useState<Problem | null>(null);
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
              {`${new Date(problem.dateOfSolved).toLocaleString("default", {
                month: "short",
              })} ${new Date(problem.dateOfSolved).getDate()}`}{" "}
            </p>{" "}
          </div>
          <div className="problem_details max-w-screen-lg mx-auto mt-10 flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-semibold">Problem Statement:</h3>
              <p className="mt-3"> {problem.statement} </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Examples:</h3>
              {problem.examples.map((example, idx) => (
                <ul key={idx} className="mt-3">
                  <li>
                    {" "}
                    <span className="font-semibold"> Input: </span> {example.input}
                  </li>{" "}
                  <li>
                    {" "}
                    <span className="font-semibold"> Output: </span> {example.output}
                  </li>{" "}
                  <li>
                    {" "}
                    <span className="font-semibold"> Explanation: </span> {example.explanation}
                  </li>{" "}
                </ul>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Approach:</h3>
              <ul>
                {problem.approach.map((step, idx) => (
                  <li className="list-disc ml-5" key={idx}>
                    {" "}
                    <p> {step} </p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Complexity:</h3>
              <ul>
                <span>
                  <strong>Time Complexity:</strong>
                </span>
                <li> {problem.timeComplexity} </li>
                <span>
                  <strong>Space Complexity:</strong>
                </span>
                <li> {problem.spaceComplexity} </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Code:</h3>
              <Tabs defaultValue="js" className="max-w-screen-md">
                <TabsList>
                  <TabsTrigger value="js">Java Script</TabsTrigger>
                  <TabsTrigger value="py">Python</TabsTrigger>
                  <TabsTrigger value="java">Java</TabsTrigger>
                  {/* <TabsTrigger value="cpp">C++</TabsTrigger> */}
                </TabsList>
                <TabsContent
                  value="js"
                  className="bg-bg-code w-full max-w-screen-lg"
                >
                  <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {problem.code.javascript}
                  </SyntaxHighlighter>
                </TabsContent>
                <TabsContent value="py">
                  {" "}
                  <SyntaxHighlighter language="python" style={tomorrow}>
                    {problem.code.python}
                  </SyntaxHighlighter>
                </TabsContent>
                <TabsContent value="java">
                  <SyntaxHighlighter language="java" style={tomorrow}>
                    {problem.code.java}
                  </SyntaxHighlighter>
                </TabsContent>
                {/* <TabsContent value="cpp">
                  {" "}
                  <SyntaxHighlighter language="javascript" style={tomorrow}>
                    html
                  </SyntaxHighlighter>
                </TabsContent> */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
}
