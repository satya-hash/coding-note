import Image from "next/image";
import React from "react";
import leetcode from "@/assets/leetcode.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";

const ProblemCard = (props: any) => {
  return (
    <Link
      href={`${props.problem.link}`}
      className="p-4 w-full md:w-1/2 lg:w-1/3 "
    >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer bg-bg-code">
        <div className="flex h-48  items-center ">
          <Image className="w-36 object-cover " src={leetcode} alt="blog" />
          <h1 className="text-lg font-semibold">Leetcode</h1>
        </div>
        <div className="p-6">
          <Badge
            variant={props.problem.difficulty}
            className="text-bg-primary capitalize"
          >
            {props.problem.difficulty}
          </Badge>
          <h1 className="title-font text-lg font-medium  mb-3">
            {props.problem.title}
          </h1>

          <div className="flex items-center flex-wrap gap-2 justify-between">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/85430181?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <a className=" inline-flex items-center md:mb-2  font-semibold lg:mb-0">
                Coding Note
              </a>
            </div>
            <p>
              {" "}
              {`${new Date(props.problem.dateOfSolved).toLocaleString(
                "default",
                {
                  month: "short",
                }
              )} ${new Date(props.problem.dateOfSolved).getDate()}`}{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProblemCard;
