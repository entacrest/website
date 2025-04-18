// CommentForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  comment: yup
    .string()
    .required("Comment is required")
    .min(5, "Comment must be at least 5 characters"),
});

type FormValues = {
  fullName: string;
  comment: string;
};

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    reset(); // reset form after successful submit
  };

  return (
    <section className="bg-[#8F8F8F] py-20 md:px-6 px-4" id="comment-form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-8/10 max-w-5xl  mx-auto"
      >
        <h2 className="text-white font-bold text-3xl mb-6">
          Add your comment here
        </h2>
        <div>
          <input
            type="text"
            {...register("fullName")}
            className="w-full bg-white border-none outline-none px-3 py-2 border rounded-md"
            placeholder="Full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mt-10">
          <textarea
            {...register("comment")}
            placeholder="Enter your comment here"
            className="w-full px-3 py-2 border bg-white border-none outline-none rounded-md h-50 resize-none"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment.message}</p>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-button-blue text-white px-6 py-2 rounded-md hover:bg-blue-900 font-bold"
          >
            Submit Comment
          </button>
        </div>
      </form>
    </section>
  );
};

export default CommentForm;
