import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { BadgeCheck } from "lucide-react";
import toast from "react-hot-toast";

import api from "@/config/api_config";
import { OlecClaimSchema } from "@/components/validation";

// Must match the VoucherCampaign slug in the synchgate admin.
const OLEC_CAMPAIGN = "olec26";

type FormValues = {
  code: string;
  full_name: string;
  business_name: string;
  email: string;
  phone: string;
  about: string;
  accept_terms: boolean;
};

const fieldClass =
  "w-full p-3 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-slate-400 outline-none rounded-lg focus:border-brand-300/60";

// Shown in Lagos time, which is how the server sets the 14-day content deadline.
const formatLagosDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { timeZone: "Africa/Lagos", weekday: "long", day: "numeric", month: "long", year: "numeric" });

const OlecClaimForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [claimed, setClaimed] = useState<{ email: string; due: string } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(OlecClaimSchema),
    defaultValues: { accept_terms: false, about: "" },
  });
  const aboutLength = (watch("about") || "").length;

  const onSubmit = async (data: FormValues) => {
    if (isLoading) return;
    setIsLoading(true);
    setCodeError("");
    try {
      // Generic voucher endpoint; the campaign slug keeps codes from other campaigns out of this page.
      const resp = await api.post("/entacrest/vouchers/claim/", { ...data, campaign: OLEC_CAMPAIGN });
      setClaimed({ email: data.email.trim(), due: formatLagosDate(resp.data.data.content_due_at) });
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong. Please try again.";
      // Problems with the code itself (unknown, claimed, expired) are shown on the code field.
      if (error?.response?.data?.errors?.code) setCodeError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (claimed) {
    return (
      <div className="glass-card rounded-3xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
          <BadgeCheck size={26} className="text-green-400" />
        </div>
        <h2 className="text-white text-2xl font-bold mb-3">Your voucher is confirmed</h2>
        <p className="text-slate-300 leading-7">
          Please send all your website content by <span className="text-white font-semibold">{claimed.due}</span>. We&apos;ve emailed{" "}
          <span className="text-white font-semibold">{claimed.email}</span> with the full list of what to send, and we&apos;ll be in touch with you directly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4 glass-card rounded-3xl p-6 md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="code" className="block text-slate-300 text-sm font-medium mb-1.5">Voucher code</label>
        <input
          id="code"
          {...register("code", { onChange: () => setCodeError("") })}
          className={`${fieldClass} uppercase tracking-widest font-semibold`}
          placeholder="OLEC26-XXXXXX"
          autoComplete="off"
          autoCapitalize="characters"
        />
        <p className="text-red-400 text-sm">{errors.code?.message || codeError}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {(
          [
            { name: "full_name", placeholder: "Full name", autoComplete: "name" },
            { name: "business_name", placeholder: "Business name", autoComplete: "organization" },
            { name: "email", placeholder: "Email address", autoComplete: "email" },
            { name: "phone", placeholder: "Phone / WhatsApp (e.g. 08012345678)", autoComplete: "tel" },
          ] as const
        ).map(({ name, placeholder, autoComplete }) => (
          <div key={name}>
            <input
              {...register(name)}
              className={fieldClass}
              placeholder={placeholder}
              autoComplete={autoComplete}
              type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
            />
            <p className="text-red-400 text-sm">{errors[name]?.message}</p>
          </div>
        ))}
      </div>

      <div>
        <textarea
          {...register("about")}
          maxLength={500}
          className={`${fieldClass} resize-none h-28`}
          placeholder="Tell us about your business (optional)"
        />
        <div className="flex justify-between text-sm">
          <p className="text-red-400">{errors.about?.message}</p>
          <p className="text-slate-500">{aboutLength}/500</p>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2 text-slate-300 text-sm">
          <input type="checkbox" className="mt-1" {...register("accept_terms")} />
          <span>
            I have read and accept the{" "}
            <a href="#terms" className="text-brand-300 underline underline-offset-2 hover:text-brand-200">terms and conditions</a>.
          </span>
        </label>
        <p className="text-red-400 text-sm">{errors.accept_terms?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold w-full rounded-full p-3.5 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer transition disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <CgSpinner className="animate-spin text-xl" />
            Claiming...
          </>
        ) : (
          "Claim my voucher"
        )}
      </button>
    </form>
  );
};

export default OlecClaimForm;
