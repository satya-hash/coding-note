// "use client";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { useDebounce } from "use-debounce";

const Search = () => {
  //   const searchParams = useSearchParams();
  //   const [text, setText] = useState("");

  //   const pathname = usePathname();
  //   const { replace } = useRouter();
  //   const [query] = useDebounce(text, 750);

  //   useEffect(() => {
  //     console.log(query);

  //     const params = new URLSearchParams(searchParams || undefined);
  //     if (query) {
  //       params.set("query", query);
  //     } else {
  //       params.delete("query");
  //     }
  //     replace(`${pathname}?${params.toString()}`);
  //   }, [query]);
  return (
    <input
      //   onChange={(e) => setText(e.target.value)}
      //   defaultValue={searchParams?.get("query")?.toString()}
      type="text"
      id="search-navbar"
      className="block w-full p-2 ps-10 text-sm outline-none border-none  bg-bg-code  rounded-lg"
      placeholder="Search..."
    />
  );
};

export default Search;
