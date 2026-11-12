import { CalendarClock, KeyRound, Send, Ticket } from "lucide-react";
import OlecClaimForm from "./OlecClaimForm";

// Landing page for the 10 website vouchers given out at OLEC'26 (Osun Local Economy Conference).
// The terms below are published exactly as approved in the OLEC'26 voucher spec; the server
// enforces the deadline and the one-claim-per-code rule.

const steps = [
  { icon: KeyRound, title: "Enter your code", desc: "Type the code printed on your voucher." },
  { icon: Ticket, title: "Submit your details", desc: "Tell us who you are and accept the terms." },
  { icon: Send, title: "Send your content and payment within 14 days", desc: "Logo, text and images, plus the ₦75,000 (we’ll send an invoice), so we can start building." },
];

const terms = [
  { title: "The offer.", text: "The voucher gives 50% off a business website package worth ₦150,000. The holder pays ₦75,000." },
  { title: "Claiming.", text: "The voucher must be claimed on this page by 31 December 2026. Unclaimed vouchers expire." },
  { title: "One per holder.", text: "Each voucher is non-transferable, has no cash value, and cannot be combined with other offers." },
  { title: "Content.", text: "Within 14 days of claiming, the holder must send all website content (text, images, logo and any other material). Development starts once everything is received." },
  { title: "Payment.", text: "The holder pays the full ₦75,000 within 14 days of claiming, along with their website content. Entacrest sends an invoice with payment details. Development starts once Entacrest has received both the complete content and the full payment." },
  { title: "Missed deadline.", text: "If complete content or the full payment is not received within 14 days of claiming, the voucher is forfeited." },
  { title: "Development time.", text: "Entacrest will deliver the website within 1 month of receiving all the information needed to build it." },
  { title: "Domain and hosting.", text: "Entacrest covers the first year of one domain (.com, .com.ng or .ng) and basic hosting, registered in the holder’s name. Renewals from the second year, and any upgrades, are paid by the holder." },
  { title: "Support.", text: "Entacrest provides 1 month of free support after launch. Later support is charged separately." },
  { title: "Data.", text: "By claiming, the holder agrees that Entacrest may store and use their details to deliver the project and contact them about it." },
];

const OlecPage = () => (
  <main>
    {/* Hero */}
    <section className="relative bg-ink-950 grid-pattern w-full overflow-hidden">
      <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "70%" }} />
      <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-flare-400 inline-block" />
            Osun Local Economy Conference
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] max-w-3xl">
            OLEC&apos;26 Website Voucher
          </h1>
          <p className="text-slate-300 text-lg leading-8 max-w-2xl mt-6">
            Get 50% off a business website worth ₦150,000, so you pay <span className="text-white font-semibold">₦75,000</span>. Your first year of domain and hosting is on us.
          </p>
          <p className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-flare-400">
            <CalendarClock size={16} /> Claim by 31 December 2026
          </p>
        </div>
        {/* What winners receive at the event; the code shown is a placeholder. */}
        <figure>
          <img
            src="/images/olec/voucher-sample.webp"
            alt="Sample OLEC'26 website voucher: 50% off a ₦150,000 business website, with a voucher code and a QR code to entacrest.com/olec"
            width={1300}
            height={570}
            className="w-full h-auto rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/40"
          />
          <figcaption className="text-slate-400 text-xs text-center mt-3">
            Sample voucher. Your code is printed on the voucher you received.
          </figcaption>
        </figure>
      </div>
    </section>

    {/* How it works + claim form */}
    <section className="relative bg-ink-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div>
          <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-white text-3xl font-bold mb-8">Claim in three steps</h2>
          <ol className="space-y-5">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center">
                  <Icon size={20} className="text-brand-300" />
                </div>
                <div>
                  <p className="text-white font-semibold">
                    <span className="text-brand-300 mr-1.5">{i + 1}.</span>
                    {title}
                  </p>
                  <p className="text-slate-400 text-sm leading-6 mt-1">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <OlecClaimForm />
      </div>
    </section>

    {/* Terms */}
    <section id="terms" className="max-w-4xl mx-auto px-5 py-16 md:py-24 scroll-mt-20">
      <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Terms and conditions</p>
      <h2 className="heading-text font-bold text-ink-900 mb-8">OLEC&apos;26 Website Voucher: Terms &amp; Conditions</h2>
      <ol className="space-y-4 list-decimal pl-6 marker:text-slate-400 marker:font-semibold">
        {terms.map(({ title, text }) => (
          <li key={title} className="text-slate-600 leading-7 pl-1">
            <span className="font-semibold text-ink-900">{title}</span> {text}
          </li>
        ))}
      </ol>
    </section>
  </main>
);

export default OlecPage;
