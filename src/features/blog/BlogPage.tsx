import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import api from "@/config/api_config";
import { Blog } from "@/types/global";
import BlogSkeleton from "./BlogSkeleton"; // <-- import this
import toast from "react-hot-toast";

interface BlogType {
  top_blogs: Blog[];
  all_blogs: Blog[];
}
const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogType>({
    top_blogs: [],
    all_blogs: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/webpage/blogs");
        setBlogs(response.data.data.results);
      } catch (err: any) {
        setError("Failed to fetch blogs.");
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-ink-950 grid-pattern w-full py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "35%" }} />
        <div className="max-w-4xl relative mx-auto text-center">
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
            Insights on fintech, infrastructure, and building for scale
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            Notes from the team building Synchgate, EBS, and the regulated software our clients run on.
          </p>
        </div>
      </section>

      {/* Top Blog */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl text-ink-900 font-bold text-center md:text-left">
          Top Blog
        </h2>
        <section className="mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {isLoading ? (
            <BlogSkeleton count={3} />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            blogs?.top_blogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                className="w-full max-w-[500px] mx-auto md:max-w-xs"
              />
            ))
          )}
        </section>
      </section>

      {/* Latest Blog */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl text-ink-900 font-bold text-center md:text-left">
          Latest Blog
        </h2>
        <section className="my-6 space-y-6">
          {isLoading ? (
            <BlogSkeleton count={3} />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            blogs?.all_blogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                className="max-w-[500px] mx-auto md:max-w-5xl md:flex gap-6"
              />
            ))
          )}
        </section>
      </section>
    </main>
  );
};

export default BlogPage;
