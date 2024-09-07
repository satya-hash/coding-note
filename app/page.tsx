import Posts from "@/app/components/Posts";

export default function Home() {
  return (
    <section className="flex justify-center flex-col p-4">
      <div className="max-w-screen-lg mx-auto w-full lg:mt-20 mt-10">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-semibold mb-3">
          Latest Posts
        </h1>
        <p> This blogs is to showcase my <span className="text-link-primary font-semibold">Learnings</span>. </p>
        <div className="posts">
          <Posts />
        </div>
      </div>
    </section>
  );
}
