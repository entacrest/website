"use client";

import { blogs } from "@/components/data";
import { Blog } from "@/types/global";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleBlogPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      const data = blogs.find((bl) => bl.id.toString() === id.toString());
      if (data) setBlog(data);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading blog post...</p>
      </div>
    );
  }

  const { title, imageSrc, datePosted, author, text } = blog;

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
            src={imageSrc}
            alt="Blog Cover"
            width={1000}
            height={600}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Author Info */}
        <article className="flex items-center gap-4">
          <Image
            src={author.profileImage}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h3 className="text-md font-medium">{author.name}</h3>
          <p className="text-sm text-gray-500">{datePosted}</p>
        </article>

        {/* Title & Description */}
        <h2 className="text-secondary-one text-3xl font-bold">{title}</h2>
        <p className="text-secondary-one text-xl leading-relaxed">{text}</p>
      </section>
    </main>
  );
};

export default SingleBlogPage;
