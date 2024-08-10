import ProblemCard from "@/components/ProblemCard";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center flex-col ">
      <div className="w-full h-[75vh] flex justify-center items-center">
        {/* <Boxes /> */}
        <div className="max-w-screen-2xl z-10 text-center">
          <TypewriterEffectSmooth
            words={[
              {
                text: "Learn with",
                className: "sm:text-base md:text-xl lg:text-2xl",
              },
              {
                text: "Coding Note...",
                className:
                  "text-link-primary sm:text-base md:text-xl lg:text-2xl",
              },
            ]}
          />
          <Link
            href="/leetcode"
            className="bg-btn-primary px-3 py-2 rounded text-bg-primary font-semibold"
          >
            Leetcode
          </Link>
        </div>
      </div>
      {/* <div className="latest_problems max-w-screen-2xl mx-auto  w-full">
        <h1 className="font-bold text-2xl">Latest Problems</h1>
        <ProblemCard />
      </div> */}
    </section>
  );
}
