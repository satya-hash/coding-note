"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getSearchResults } from "../lib/utils";
import Link from "next/link";

const Search = () => {
    const [text, setText] = useState("");
    const [results, setResults] = useState<{ id: string, title: string, link: string }[]>([]);
    const [query] = useDebounce(text, 800);

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                const res = await getSearchResults(query);
                setResults(res.data);
            } else {
                setResults([]);
            }
        };
        fetchResults();
    }, [query]);

    return (
        <div className="relative bg-bg-code rounded-lg">
            <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
                id="search-navbar"
                className="block w-full  p-2 ps-10  outline-none border-none bg-transparent rounded-lg"
                placeholder="Search..."
                autoComplete="off"
            />
            <div className={`absolute bg-bg-code w-full px-3 py-2 rounded-b-xl -translate-y-2`}>
                {
                    (results.length === 0 && query.length > 0) ? <div className="tooltip my-2 p-2 rounded-lg">No results found</div> :
                        results.map((result) => {
                            return (
                                <Link href={result.link} key={result.id} onClick={() => setText("")} >
                                    <div className="tooltip hover:bg-link-primary hover:cursor-pointer my-2 p-2 rounded-lg">
                                        <span className="tooltiptext">{result.title}</span>
                                    </div>
                                </Link>
                            );
                        })}
            </div>
        </div>
    );
};

export default Search;
