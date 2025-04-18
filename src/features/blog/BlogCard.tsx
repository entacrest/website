"use client";
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
  const { id, user, title, date_created, body, image } = blog;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = baseUrl?.replace("/v1/", "/");
  const imageUrl = `${url}${image.slice(1)}`;
  console.log(imageUrl);
  return (
    <section className={className}>
      <div className="w-full ">
        <Image
          src={imageUrl}
          alt="img"
          width={100}
          height={100}
          className="size-full"
        />
      </div>
      <div>
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
          <p>{date_created}</p>
        </article>
        <h2 className="text-secondary-one text-[24px] leading-[38px] font-bold">
          {title}
        </h2>
        <p className="text-secondary-one text-[20px] leading-[30px] ">
          {body.slice(0, 100)}...
        </p>
        <div
          className="flex items-center gap-2 my-4 text-[22px] leading-9 font-bold text-secondary-one w-fit cursor-pointer"
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
