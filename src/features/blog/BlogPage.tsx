import { blogs } from "@/components/data";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/images/blog.jfif')]  backgroundImage w-full md:h-[700px] h-[600px] flex justify-center items-center  relative">
        <div className="absolute inset-0 bg-black/40" />
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
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} className="max-w-xs" />;
          })}
        </section>
      </section>
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl text-secondary-one font-bold text-center md:text-left">
          Latest Blog
        </h2>
        <section className="my-6 space-y-6">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                blog={blog}
                className=" max-h-[390px] max-w-5xl flex gap-6"
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default BlogPage;
