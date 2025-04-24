"use client";
import { formatDate } from "@/components/FormatDate";
import HtmlRenderer from "@/components/HTMLRenderer";
import { Blog } from "@/types/global";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

interface BlogProp {
  blog: Blog;
  className: string;
}
const BlogCard = ({ blog, className }: BlogProp) => {
  const router = useRouter();
  const { id, user, title, slug, date_created, body, image } = blog;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = baseUrl?.replace("/v1/", "/");
  const imageUrl = `${url}${image.slice(1)}`;
  return (
    <section className={className}>
      <div className="basis-1/2 h-[300px]">
        <Image
          src={imageUrl}
          alt="img"
          width={400}
          height={400}
          className="size-full"
        />
      </div>
      <div className="basis-1/2">
        <article className="my-4 flex items-center gap-4">
          <div className="w-fit">
            <Image
              src="/images/avatar.svg"
              className="rounded-full"
              alt="img"
              width={30}
              height={30}
            />
          </div>
          <h3>{user}</h3>
          <p>{formatDate(date_created)}</p>
        </article>
        <h2
          className="text-button-blue text-[24px] leading-[38px] font-bold cursor-pointer"
          onClick={() => router.push(`/blog/${id}`)}
        >
          {title}
        </h2>
        <div className="">
          <HtmlRenderer
            body={`${body.slice(0, 120)}...`}
            className="text-secondary-one"
          />
        </div>
        <div
          className="flex items-center gap-2 my-4 text-[22px] leading-9 font-bold text-button-blue w-fit cursor-pointer"
          onClick={() => router.push(`/blog/${id}`)}
        >
          <span>Read more</span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
