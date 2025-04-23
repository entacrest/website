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
import HtmlRenderer from "@/components/HTMLRenderer";

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

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No blog post found</p>
      </div>
    );
  }

  const { image, title, body, user, date_created } = blog;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = baseUrl?.replace("/v1/", "/");
  const imageUrl = `${url}${image?.slice(1)}`;

  return (
    <main className="relative ">
      {/* Hero Section */}
      <section className="bg-[url('/images/blog.jfif')] backgroundImage w-full md:h-[700px] h-[600px] flex justify-center items-center relative">
        <div className="absolute inset-0 bg-black/40" />
      </section>
      <section className="relative mb-40">
        <div className=" w-full p-4 max-w-5xl absolute left-0 right-0 -top-[500px] mx-auto ">
          <Image
            src={imageUrl}
            alt="Blog Cover"
            width={1000}
            height={500}
            className="w-full h-[600px] rounded-md object-cover"
          />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4  mt-[170px]  py-12 space-y-6">
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
        <HtmlRenderer body={body} className="space-y-3" />

        {/* Share this story */}
        {/* <div></div> */}
      </section>
      <div className="min-h-[200px]"></div>
      {/* Related posts */}
      {/* <section className="py-16 max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-secondary-one">Related Posts</h2>
      </section> */}
      {/* Comments */}
      {/* <CommentForm />
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
            {commentsData.map((comment, i) => (
              <CommentCard comment={comment} key={i} />
            ))}
          </article>
        </article>
      </section> */}
    </main>
  );
};

export default SingleBlogPage;
