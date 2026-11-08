import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import BookCallForm from "./BookCallForm";

const agenda = [
  "What you want to build, who it's for, and what success looks like",
  "The right scope for your budget, and a realistic timeline",
  "Your payment options: pay outright, or pay small small with BuildFlex",
];

const BookCallPage = () => {
  const [params] = useSearchParams();
  // Buttons across the site link here with ?source=<where-they-were>, so every booking says which CTA it came from.
  const source = (params.get("source") || "direct").slice(0, 50);
  const plan = params.get("plan") === "buildflex" ? "buildflex" : undefined;

  return (
    <main className="relative bg-ink-950 grid-pattern overflow-hidden">
      <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "75%" }} />
      <section className="relative max-w-7xl mx-auto px-5 pt-20 pb-20 md:pt-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <article>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-200 mb-6">
            <Clock size={14} className="text-flare-400" /> Free · 30 minutes · No obligation
          </div>
          <h1 className="heading-text font-bold text-white mb-6">Book a free 30-minute scoping call</h1>
          <p className="text-slate-300 leading-8 text-lg mb-10 max-w-md">
            Tell us a little about your project and pick a time. We&apos;ll come prepared, so the call is useful whether or not you go ahead with us.
          </p>

          <p className="text-white font-semibold mb-4">On the call, we&apos;ll cover:</p>
          <ul className="space-y-3 mb-12 max-w-md">
            {agenda.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300 leading-7">
                <CheckCircle2 size={18} className="text-brand-300 shrink-0 mt-1" /> {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-6 space-y-3 text-sm">
            <p className="text-slate-400">Prefer email or a quick call?</p>
            <a href="mailto:info@entacrest.com" className="flex items-center gap-3 text-white hover:text-brand-200 transition">
              <Mail size={16} className="text-brand-300" /> info@entacrest.com
            </a>
            <a href="tel:+2349010380794" className="flex items-center gap-3 text-white hover:text-brand-200 transition">
              <Phone size={16} className="text-brand-300" /> +234 901 038 0794
            </a>
          </div>
        </article>
        <BookCallForm source={source} defaultPayment={plan} />
      </section>
    </main>
  );
};

export default BookCallPage;
