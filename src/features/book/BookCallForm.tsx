import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { CalendarCheck2 } from "lucide-react";
import toast from "react-hot-toast";

import api from "@/config/api_config";
import { getAttribution } from "@/config/attribution";
import { services } from "@/components/data";
import { budgets, paymentPreferences, timelines, timeSlots } from "@/components/leadOptions";
import { BOOKING_WINDOW_DAYS, BookCallSchema, addDays, isoDate } from "@/components/validation";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  payment_preference: string;
  preferred_date: string;
  preferred_time: string;
  details: string;
};

const fieldClass =
  "w-full p-3 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-slate-400 outline-none rounded-lg focus:border-brand-300/60";
const selectClass = `${fieldClass} [&>option]:text-ink-900`;
const labelClass = "block text-slate-300 text-sm font-medium mb-1.5";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

const BookCallForm = ({ source, defaultPayment }: { source: string; defaultPayment?: string }) => {
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [booked, setBooked] = useState<{ email: string; date: string; time: string } | null>(null);

  const today = new Date();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(BookCallSchema),
    defaultValues: { payment_preference: defaultPayment ?? "" },
  });
  const selectedTime = watch("preferred_time");

  const onSubmit = async (data: FormValues) => {
    if (!consent) {
      toast.error("Please agree that we may contact you to confirm the call.");
      return;
    }
    setIsLoading(true);
    try {
      await api.post("/entacrest/scoping-calls/", { ...data, contact_me: consent, source, ...getAttribution() });
      setBooked({
        email: data.email,
        date: formatDate(data.preferred_date),
        time: timeSlots.find((s) => s.value === data.preferred_time)?.label ?? data.preferred_time,
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (booked) {
    return (
      <div className="glass-card rounded-3xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
          <CalendarCheck2 size={26} className="text-green-400" />
        </div>
        <h2 className="text-white text-2xl font-bold mb-3">Request received</h2>
        <p className="text-slate-300 leading-7">
          You asked for <span className="text-white font-semibold">{booked.date} at {booked.time}</span> (Lagos time).
          We&apos;ll email <span className="text-white font-semibold">{booked.email}</span> to confirm that slot or suggest the
          closest one available.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5 glass-card rounded-3xl p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-2 gap-4">
        {(
          [
            { name: "first_name", placeholder: "First name" },
            { name: "last_name", placeholder: "Last name" },
            { name: "email", placeholder: "Work e-mail" },
            { name: "phone", placeholder: "Phone number (e.g. 08012345678)" },
          ] as const
        ).map(({ name, placeholder }) => (
          <div key={name}>
            <input {...register(name)} className={fieldClass} placeholder={placeholder} />
            <p className="text-red-400 text-sm">{errors[name]?.message}</p>
          </div>
        ))}
      </div>
      <input {...register("company")} className={fieldClass} placeholder="Business or organisation (optional)" />

      <div className="grid sm:grid-cols-2 gap-4">
        {(
          [
            { name: "service", placeholder: "What do you want built?", options: [...services.map((s) => ({ value: s.slug, label: s.title })), { value: "other", label: "Something else" }] },
            { name: "budget", placeholder: "Estimated budget", options: budgets },
            { name: "timeline", placeholder: "When do you want to start?", options: timelines },
            { name: "payment_preference", placeholder: "How would you like to pay?", options: paymentPreferences },
          ] as const
        ).map(({ name, placeholder, options }) => (
          <div key={name}>
            <select {...register(name)} className={selectClass} defaultValue={name === "payment_preference" ? defaultPayment ?? "" : ""}>
              <option value="" disabled>{placeholder}</option>
              {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
            </select>
            <p className="text-red-400 text-sm">{errors[name]?.message}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-[0.9fr_1.1fr] gap-4">
        <div>
          <label htmlFor="preferred_date" className={labelClass}>Preferred date (Mon–Fri)</label>
          <input
            id="preferred_date"
            type="date"
            {...register("preferred_date")}
            min={isoDate(addDays(today, 1))}
            max={isoDate(addDays(today, BOOKING_WINDOW_DAYS))}
            className={`${fieldClass} [color-scheme:dark]`}
          />
          <p className="text-red-400 text-sm">{errors.preferred_date?.message}</p>
        </div>
        <div>
          <p className={labelClass}>Preferred time (Lagos time)</p>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setValue("preferred_time", value, { shouldValidate: true })}
                className={`py-2.5 rounded-lg text-sm font-semibold border transition cursor-pointer ${
                  selectedTime === value ? "bg-brand-500 border-brand-500 text-white" : "border-white/15 text-slate-300 hover:border-brand-300/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <input type="hidden" {...register("preferred_time")} />
          <p className="text-red-400 text-sm">{errors.preferred_time?.message}</p>
        </div>
      </div>

      <div>
        <textarea
          {...register("details")}
          className={`${fieldClass} resize-none h-28`}
          placeholder="What should it do, who will use it, and what's driving the timing?"
        />
        <p className="text-red-400 text-sm">{errors.details?.message}</p>
      </div>

      <label className="flex items-start gap-2 text-slate-300 text-sm">
        <input type="checkbox" className="mt-1" checked={consent} onChange={() => setConsent((prev) => !prev)} />
        I agree that Entacrest may contact me at the email address or phone number above to arrange this call.
      </label>

      <button
        type="submit"
        className="bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold w-full rounded-full p-3.5 flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer transition disabled:opacity-70"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <CgSpinner className="animate-spin text-xl" />
            Booking...
          </>
        ) : (
          "Book my free scoping call"
        )}
      </button>
    </form>
  );
};

export default BookCallForm;
