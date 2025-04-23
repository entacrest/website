"use client";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import api from "@/config/api_config";
import { Blog } from "@/types/global";
import BlogSkeleton from "./BlogSkeleton"; // <-- import this
import toast from "react-hot-toast";
import Image from "next/image";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
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
      <section className="relative w-full md:h-[700px] h-[600px] flex justify-center items-center">
        <Image
          src="/images/blog.jfif"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-5xl relative text-center text-white">
          <h2 className="mt-6 font-medium heading-text md:font-bold">
            OUR BLOG NEWS
          </h2>
          <p className="paragraph-text px-2 mt-2">
            Stay updated with the latest insights, trends, and expert tips in
            our recent blog posts, from industry news to practical guide.
          </p>
        </div>
      </section>

      {/* Top Blog */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl text-secondary-one font-bold text-center md:text-left">
          Top Blog
        </h2>
        <section className="mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {isLoading ? (
            <BlogSkeleton count={3} />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                className="w-full md:max-w-xs"
              />
            ))
          )}
        </section>
      </section>

      {/* Latest Blog */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl text-secondary-one font-bold text-center md:text-left">
          Latest Blog
        </h2>
        <section className="my-6 space-y-6">
          {isLoading ? (
            <BlogSkeleton count={3} />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                className=" max-w-5xl md:flex gap-6"
              />
            ))
          )}
        </section>
      </section>
    </main>
  );
};

export default BlogPage;
