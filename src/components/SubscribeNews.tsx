import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import api from "@/config/api_config";
import toast from "react-hot-toast";

const SubscribeNews = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setIsError(true);
      setMsg("Email is required.");
      setTimeout(() => setIsError(false), 4000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsError(true);
      setMsg("Please enter a valid email.");
      setTimeout(() => setIsError(false), 4000);
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      setMsg("");
      setSuccess(false);

      const resp = await api.post("/webpage/newsletter/", { email });

      setSuccess(true);
      setMsg(resp.data.message);
      toast.success(resp.data.message);
      setEmail("");

      setTimeout(() => setSuccess(false), 4000);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again later.";
      setIsError(true);
      setMsg(msg);
      toast.error(message);

      setTimeout(() => setIsError(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[300px] rounded-2xl p-4">
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Stay in the loop</h3>
          <p className="leading-relaxed text-left text-sm text-slate-400">
            Product updates and fintech insights, straight to your inbox.
          </p>
        </div>
        <div className="mt-4">
          <form className="space-y-3 sm:max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="text-white placeholder:text-slate-400 bg-white/5 border border-white/15 rounded-md w-full p-2 outline-none focus:border-brand-300/60"
            />
            {isError && <p className="text-red-400 text-sm">{msg}</p>}
            {success && <p className="text-green-400 text-sm">{msg}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 px-3 w-full rounded-md font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-700 cursor-pointer hover:brightness-110 duration-150 outline-none sm:px-4 flex justify-center items-center gap-2"
            >
              {isLoading && (
                <AiOutlineLoading className="animate-spin h-5 w-5" />
              )}
              {isLoading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
