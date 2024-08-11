import Posts from "@/components/Posts";
import TypeWriteEffect from "@/components/ui/type-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center flex-col p-4">
      {/* <div className="w-full h-[75vh] flex justify-center items-center">
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
          <TypeWriteEffect
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
        </div> */}
      {/* </div> */}
      <div className="max-w-screen-lg mx-auto w-full lg:mt-20 mt-10">
        <h1 className="text-5xl font-semibold mb-3">Latest Posts</h1>
        <p> This blogs is to showcase my work. </p>
        <div className="posts">
          <Posts />
        </div>
      </div>
    </section>
  );
}
