"use client";

import { commentsData } from "@/components/data";
import { Blog, BlogPost } from "@/types/global";
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
import { formatDate } from "@/components/FormatDate";

const SingleBlogPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setLoading(true);
      try {
        const response = await api.get("/webpage/blogs");
        setRelatedBlogs(response.data.data.results.all_blogs);
      } catch (err: any) {
        setError("Failed to fetch related blogs.");
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchWithId = async () => {
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
    fetchWithId();
    fetchRelatedPosts();
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
      <section className="bg-[url('/images/blog.jfif')] backgroundImage w-full md:h-[700px] h-[300px] sm:h-[400px] flex justify-center items-center relative">
        <div className="absolute inset-0 bg-black/40" />
      </section>
      <section className="relative mb-40">
        <div className="w-full p-4 max-w-5xl absolute left-0 right-0 -top-[200px] sm:-top-[300px] md:-top-[440px] mx-auto">
          <Image
            src={imageUrl}
            alt="Blog Cover"
            width={1000}
            height={600}
            className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[600px] rounded-md object-cover"
            priority
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
          <p className="text-sm text-gray-500">{formatDate(date_created)}</p>
        </article>

        {/* Title & Description */}
        <h2 className="text-secondary-one text-3xl font-bold">{title}</h2>
        <HtmlRenderer body={body} className="space-y-3 singleBlog" />

        {/* Share this story */}
        {/* <div></div> */}
      </section>
      {/* Related posts */}
      <section className="py-16 max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-secondary-one">Related Posts</h2>
     <section className="mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
  {loading ? (
    <BlogSkeleton count={3} />
  ) : error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    relatedBlogs
      ?.slice(0, 3) // ✅ simpler and cleaner than filter with index
      .map((blog: Blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          className="w-full max-w-[500px] mx-auto md:max-w-xs"
        />
      ))
  )}
</section>

      </section>
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
