
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

import api from "@/config/api_config";
import { ApplicationFormSchema } from "../../components/validation";
import { JobApplicationInputs } from "@/types/global";
import toast from "react-hot-toast";
import FileUploader from "./FileUpload";
const JobApplicationForm = () => {
  const [contact, setContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ApplicationFormSchema),
  });
  const inputs: JobApplicationInputs[] = [
    { value: "first_name", placeholder: "First Name" },
    { value: "last_name", placeholder: "Last Name" },
    { value: "email", placeholder: "E-mail" },
    { value: "role", placeholder: "Role" },
  ];

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMsg("");
    setIsSuccess(false);

    if (!selectedFile) {
      toast.error("Please select a file first.");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("role", data.role);
      formData.append("cover_letter", data.cover_letter || "");
      formData.append("contact_me", contact ? "true" : "false");
      formData.append("resume", selectedFile);

      const resp = await api.post("/webpage/job-application/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMsg(resp.data.message);
      setIsSuccess(true);
      toast.success(resp.data.message);

      reset(); // clear form fields
      setContact(false);
      setSelectedFile(null);
      setFileName(""); // reset file input
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error: any) {
      setIsError(true);
      const msg =
        error?.response?.data?.message ||
        "An error occurred. Please try again.";
      setErrorMsg(msg);
      toast.error(msg);
      setTimeout(() => setIsError(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-ink-950 grid-pattern w-full p-6 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "40%" }} />
      <article className="relative">
        <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-3 text-center">Apply Now</p>
        <h2 className="heading-text text-center font-bold text-white">
          Job Application Form
        </h2>

        <form
          className="space-y-7 max-w-xl mx-auto mt-5 p-6 bg-transparent"
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputs.map(({ value, placeholder }, i) => (
            <div className="mb-6" key={i}>
              <input
                {...register(value)}
                className="w-full p-6 py-2 bg-white border-none text-secondary-one outline-none rounded"
                placeholder={placeholder}
              />
              <p className="text-red-500 text-sm">{errors[value]?.message}</p>
            </div>
          ))}

          <FileUploader
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setFileName={setFileName}
            fileName={fileName}
          />
          <div className="mb-4">
            <textarea
              {...register("cover_letter")}
              className="w-full p-2 bg-white outline-none resize-none h-30 border-none rounded"
              placeholder="Cover Letter"
            />
            <p className="text-red-500 text-sm">
              {errors.cover_letter?.message}
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={contact}
              onChange={() => setContact((prev) => !prev)}
            />
            <label className="text-white">
              I agree that Entacrest may contact me at the email address or
              phone number above.
            </label>
          </div>
          {/* ✅ Success & Error Feedback */}
          {isSuccess && <p className="text-green-400 text-center">{msg}</p>}
          {isError && <p className="text-red-500 text-center">{errorMsg}</p>}
          <div className="w-full flex justify-end items-center px-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-brand-500 to-brand-700 font-bold w-full max-w-[150px] text-white rounded p-2 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <CgSpinner className="animate-spin text-xl" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default JobApplicationForm;
