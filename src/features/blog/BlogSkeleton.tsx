const BlogSkeleton = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-gray-200 animate-pulse h-60 rounded-md w-full"
        />
      ))}
    </>
  );
};

export default BlogSkeleton;
