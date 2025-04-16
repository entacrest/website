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
  const {
    id,
    title,
    description,
    imageSrc,
    datePosted,
    author: { name, profileImage },
  } = blog;
  return (
    <section className={className}>
      <div className="w-full ">
        <Image
          src={imageSrc}
          alt="img"
          width={100}
          height={100}
          className="size-full"
        />
      </div>
      <div>
        <article className="my-4 flex items-center gap-4">
          <div className="w-fit  rounded-full">
            <Image src={profileImage} alt="img" width={30} height={30} />
          </div>
          <h3>{name}</h3>
          <p>{datePosted}</p>
        </article>
        <h2 className="text-secondary-one text-[24px] leading-[38px] font-bold">
          {title}
        </h2>
        <p className="text-secondary-one text-[20px] leading-[30px] ">
          {description}
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
