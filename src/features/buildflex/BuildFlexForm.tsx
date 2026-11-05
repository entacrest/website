import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";

import api from "@/config/api_config";
import { services } from "@/components/data";
import { BuildFlexFormSchema } from "@/components/validation";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  organisation: string;
  applicant_type: string;
  service: string;
  budget: string;
  duration: string;
  details: string;
};

const applicantTypes = ["Registered business (SME)", "Startup", "NGO / non-profit", "Established company", "Individual / professional"];
const budgets = ["Below ₦500,000", "₦500,000 – ₦2 million", "₦2 million – ₦5 million", "Above ₦5 million", "Not sure yet"];
const durations = ["3 months", "4 months", "6 months", "Not sure yet"];

const fieldClass =
  "w-full p-3 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-slate-400 outline-none rounded-lg focus:border-brand-300/60";
const selectClass = `${fieldClass} [&>option]:text-ink-900`;

const BuildFlexForm = () => {
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(BuildFlexFormSchema),
  });

  // Goes through the existing contact endpoint, so the application lands in the same inbox
  // with a [BuildFlex] subject line and every answer laid out in the message body.
  const onSubmit = async (data: FormValues) => {
    if (!consent) {
      toast.error("Please agree that we may contact you about your application.");
      return;
    }
    setIsLoading(true);

    const message = [
      "[BuildFlex application]",
      `Applying as: ${data.applicant_type}`,
      `Organisation: ${data.organisation || "—"}`,
      `Wants built: ${data.service}`,
      `Estimated budget: ${data.budget}`,
      `Preferred payment period: ${data.duration}`,
      "",
      data.details,
    ].join("\n");

    try {
      const resp = await api.post("/webpage/contact/", {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        message,
        contact_me: consent,
      });
      toast.success(resp.data?.message ?? "Application received. We'll be in touch.");
      reset();
      setConsent(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4 glass-card rounded-3xl p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-2 gap-4">
        {(
          [
            { name: "first_name", placeholder: "First name" },
            { name: "last_name", placeholder: "Last name" },
            { name: "email", placeholder: "E-mail" },
            { name: "phone", placeholder: "Phone number (e.g. 08012345678)" },
          ] as const
        ).map(({ name, placeholder }) => (
          <div key={name}>
            <input {...register(name)} className={fieldClass} placeholder={placeholder} />
            <p className="text-red-400 text-sm">{errors[name]?.message}</p>
          </div>
        ))}
      </div>

      <div>
        <input {...register("organisation")} className={fieldClass} placeholder="Business or organisation name (optional)" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <select {...register("applicant_type")} className={selectClass} defaultValue="">
            <option value="" disabled>Applying as…</option>
            {applicantTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <p className="text-red-400 text-sm">{errors.applicant_type?.message}</p>
        </div>
        <div>
          <select {...register("service")} className={selectClass} defaultValue="">
            <option value="" disabled>What do you want built?</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Something else</option>
          </select>
          <p className="text-red-400 text-sm">{errors.service?.message}</p>
        </div>
        <div>
          <select {...register("budget")} className={selectClass} defaultValue="">
            <option value="" disabled>Estimated budget</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
          <p className="text-red-400 text-sm">{errors.budget?.message}</p>
        </div>
        <div>
          <select {...register("duration")} className={selectClass} defaultValue="">
            <option value="" disabled>Preferred payment period</option>
            {durations.map((d) => <option key={d}>{d}</option>)}
          </select>
          <p className="text-red-400 text-sm">{errors.duration?.message}</p>
        </div>
      </div>

      <div>
        <textarea
          {...register("details")}
          className={`${fieldClass} resize-none h-32`}
          placeholder="Tell us about the project: what it should do, who will use it, and when you'd like to launch."
        />
        <p className="text-red-400 text-sm">{errors.details?.message}</p>
      </div>

      <label className="flex items-start gap-2 text-slate-300 text-sm">
        <input type="checkbox" className="mt-1" checked={consent} onChange={() => setConsent((prev) => !prev)} />
        I agree that Entacrest may contact me about this application at the email address or phone number above.
      </label>

      <button
        type="submit"
        className="bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold w-full rounded-full p-3 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer transition disabled:opacity-70"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <CgSpinner className="animate-spin text-xl" />
            Sending...
          </>
        ) : (
          "Submit Application"
        )}
      </button>
      <p className="text-slate-400 text-xs text-center leading-5">
        Applying is free and doesn't commit you to anything. We'll send an outright quote and a BuildFlex quote so you can compare.
      </p>
    </form>
  );
};

export default BuildFlexForm;
