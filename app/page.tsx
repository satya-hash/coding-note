import Posts from "@/components/Posts";
import TypeWriteEffect from "@/components/ui/type-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center flex-col p-4">
      <div className="max-w-screen-lg mx-auto w-full lg:mt-20 mt-10">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-semibold mb-3">
          Latest Posts
        </h1>
        <p> This blogs is to showcase my work. </p>
        <div className="posts">
          <Posts />
        </div>
      </div>
    </section>
  );
}
