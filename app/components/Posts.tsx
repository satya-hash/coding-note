"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Content } from "@/app/lib/interfaces";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { getAllPosts, getProblemsByDifficulty } from "@/app/lib/utils";
import { Badge, badgeVariants } from "./ui/badge";

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
    const getDataByDifficulty = async (page: number,difficulty:string) => {
        let data = await getProblemsByDifficulty(limit, page, "", difficulty);
        setAllproblems(data.paginatedPosts);
        setTotal(data.total);
    };

    const handleClick = (difficulty: string) => {
        setPage(1);
        let data = getDataByDifficulty(page,difficulty);
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
                            <button
                                onClick={() =>
                                    problem.difficulty && handleClick(problem.difficulty)
                                }
                                className={`capitalize text-[#333] mt-2 cursor-pointer ${badgeVariants({
                                    variant: problem.difficulty as "easy" | "medium" | "hard",
                                })}`}
                            >
                                {" "}
                                {problem.difficulty}{" "}
                            </button>
                            <div className="flex gap-2 flex-row">
                                {
                                    problem.tags.map((tag, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleClick(tag)}
                                            className={`capitalize text-[#333] mt-2 cursor-pointer ${badgeVariants({
                                                variant: "outline"
                                            })}`}
                                        >
                                            {" "}
                                            {tag}{" "}
                                        </button>
                                    ))
                                }
                            </div>
                            <p className="my-5"> {problem.statement} </p>
                            <a
                                className="text-btn-primary font-semibold mt-10 flex gap-2 hover:gap-3 transition ease-in-out w-fit"
                                href={problem.link}
                            >
                                {" "}
                                <span>Learn more</span>
                                <MoveRightIcon />
                            </a>
                        </td>
                    </tr>
                </tbody>
            ))}
            <div className="pagination flex justify-center mt-4">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="mx-1 px-3 py-1 rounded bg-bg-code hover:bg-[#ddd] hover:text-bg-code disabled:opacity-50"
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        disabled={page === i + 1}
                        className={`mx-1 aspect-square w-8 rounded-full ${page === i + 1
                            ? "bg-btn-primary text-white"
                            : " text-btn-primary border border-bg-btn-primary hover:bg-gray-300 hover:text-bg-primary"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="mx-1 px-3 py-1 rounded bg-bg-code hover:bg-[#ddd] hover:text-bg-code disabled:opacity-50"
                >
                    Next
                </button>
            </div>{" "}
        </table>
    );
};

export default Posts;
