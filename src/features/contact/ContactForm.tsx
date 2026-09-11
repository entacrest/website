
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

import api from "@/config/api_config";
import { ContactFormSchema } from "../../components/validation";
import { Inputs } from "@/types/global";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [contact, setContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMsg("");
    setIsSuccess(false);

    const formData = { ...data, contact_me: contact };

    try {
      const resp = await api.post("/webpage/contact/", formData);
      setMsg(resp.data.message);
      setIsSuccess(true);

      toast.success(resp.data.message);
      reset(); // clear form
      setContact(false);
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

  const inputs: Inputs[] = [
    { value: "first_name", placeholder: "First Name" },
    { value: "last_name", placeholder: "Last Name" },
    { value: "email", placeholder: "E-mail" },
    { value: "phone", placeholder: "Phone Number" },
  ];

  return (
    <div className="w-full">
      <form
        className="space-y-4 glass-card rounded-3xl p-6 md:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-slate-300 mb-2">
          Fill out the form below with questions or inquiries you may have and a
          member of our team will get back to you in no time!
        </p>

        {inputs.map(({ value, placeholder }, i) => (
          <div className="mb-4" key={i}>
            <input
              {...register(value)}
              className="w-full p-3 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-slate-400 outline-none rounded-lg focus:border-brand-300/60"
              placeholder={placeholder}
            />
            <p className="text-red-400 text-sm">{errors[value]?.message}</p>
          </div>
        ))}

        <div className="mb-4">
          <textarea
            {...register("message")}
            className="w-full p-3 bg-white/5 border border-white/15 text-white placeholder:text-slate-400 outline-none resize-none h-24 rounded-lg focus:border-brand-300/60"
            placeholder="Message"
          />
          <p className="text-red-400 text-sm">{errors.message?.message}</p>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={contact}
            onChange={() => setContact((prev) => !prev)}
          />
          <label className="text-slate-300 text-sm">
            I agree that Entacrest may contact me at the email address or phone
            number above.
          </label>
        </div>

        {/* ✅ Success & Error Feedback */}
        {isSuccess && <p className="text-green-400 text-center">{msg}</p>}
        {isError && <p className="text-red-400 text-center">{errorMsg}</p>}

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold w-full rounded-full p-3 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer transition"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <CgSpinner className="animate-spin text-xl" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
