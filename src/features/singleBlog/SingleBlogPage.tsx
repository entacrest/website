"use client";

import { commentsData } from "@/components/data";
import { Blog } from "@/types/global";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import BlogCard from "../blog/BlogCard";
import api from "@/config/api_config";
import toast from "react-hot-toast";
import BlogSkeleton from "../blog/BlogSkeleton";

const SingleBlogPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setMsg("");
      try {
        const resp = await api.get(`/webpage/blog_post/${id}`);
        setBlog(resp.data.data);
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || error.message;
        setIsError(true);
        setMsg(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { image, title, body, user, date_created } = blog;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = baseUrl?.replace("/v1/", "/");
  const imageUrl = `${url}${image?.slice(1)}`;
  if (isLoading) {
    return (
      <div className="min-h-screen p-4">
        <BlogSkeleton count={1} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{msg}</p>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/images/blog.jfif')] backgroundImage w-full md:h-[700px] h-[600px] flex justify-center items-center relative">
        <div className="absolute inset-0 bg-black/40" />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        {/* Blog Image */}
        <div className="w-full">
          <Image
            src={imageUrl}
            alt="Blog Cover"
            width={1000}
            height={600}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Author Info */}
        <article className="flex items-center gap-4">
          <Image
            src="/images/avatar.svg"
            alt={user}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h3 className="text-md font-medium">{user}</h3>
          <p className="text-sm text-gray-500">{date_created}</p>
        </article>

        {/* Title & Description */}
        <h2 className="text-secondary-one text-3xl font-bold">{title}</h2>
        <p className="text-secondary-one text-xl leading-relaxed">{body}</p>

        {/* share this story */}
        <div></div>
      </section>

      {/* related post  */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-secondary-one">Related Posts</h2>
        {/* <section className="mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} className="max-w-xs" />;
          })}
        </section> */}
      </section>
      {/* comments */}
      <CommentForm />
      <section className="py-16 w-8/10 max-w-5xl mx-auto">
        <article>
          <h2 className="text-3xl font-bold text-secondary-one">Comments</h2>
          <hr className="my-6 text-[#8F8F8F]" />
          <div
            className="bg-[#8F8F8F] w-full h-26 rounded-md flex cursor-pointer items-center justify-center text-[32px] leading-11 text-white"
            onClick={() =>
              document
                .getElementById("comment-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h2>Add a comment</h2>
          </div>
          <article>
            {commentsData.map((comment, i) => {
              return <CommentCard comment={comment} key={i} />;
            })}
          </article>
        </article>
      </section>
    </main>
  );
};

export default SingleBlogPage;
