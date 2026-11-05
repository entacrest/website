import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDashed,
  Cloud,
  FileCheck2,
  FileSignature,
  Globe,
  HandCoins,
  HeartHandshake,
  KeyRound,
  Lightbulb,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
  Wallet,
} from "lucide-react";
import Button from "@/components/Button";
import { services } from "@/components/data";
import BuildFlexForm from "./BuildFlexForm";

// Illustrative rates only. Final premiums and deposits are set per project in the quote
// and are still being finalised, so keep every figure on this page labelled as an example.
const plans = [
  { months: 3, premium: 0.04 },
  { months: 4, premium: 0.06 },
  { months: 6, premium: 0.09 },
];
const DEPOSIT_RATE = 0.3;
const budgetPresets = [500_000, 1_000_000, 2_500_000, 5_000_000];

const naira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);

const scheduleMock = [
  { label: "Deposit", note: "Development started", done: true },
  { label: "Instalment 1 of 6", note: "Platform launched", done: true },
  { label: "Instalment 2 of 6", note: "Paid", done: true },
  { label: "Instalment 3 of 6", note: "Due in 7 days", done: false },
];

const journey = [
  { icon: MessageSquareText, title: "Tell us what you need", desc: "Share your project idea through the form below, WhatsApp, or a call." },
  { icon: FileCheck2, title: "Get two quotes", desc: "We scope the project and send an outright price and a BuildFlex price side by side." },
  { icon: ShieldCheck, title: "Apply and get approved", desc: "Choose BuildFlex, complete a short application, and we review your project and repayment plan." },
  { icon: FileSignature, title: "Sign and pay your deposit", desc: "You sign the agreement and payment schedule, pay the deposit, and fund your project resources." },
  { icon: Rocket, title: "We build and launch", desc: "We design, build, test, and deploy. You get progress updates and full use of your platform at launch." },
  { icon: KeyRound, title: "Pay monthly, then full handover", desc: "Pay the agreed instalments. On your final payment, we hand over the source code, credentials, and documentation." },
];

const resources = ["Domain name", "Web hosting & cloud servers", "Cloud storage", "SMS & email services", "Third-party APIs", "Paid software licences"];

const audiences = [
  { icon: Store, title: "SMEs", desc: "Websites, online stores, and inventory or sales systems." },
  { icon: Lightbulb, title: "Startups", desc: "MVPs, SaaS products, and mobile apps to get to market." },
  { icon: HeartHandshake, title: "NGOs", desc: "Donation, fundraising, and beneficiary management platforms." },
  { icon: Building2, title: "Established businesses", desc: "Automation and custom enterprise software." },
  { icon: UserRound, title: "Professionals", desc: "Booking platforms, portals, and personal brand websites." },
];

const eligibility = [
  { title: "Businesses & organisations", items: ["CAC registration, where applicable", "ID of the owner or authorised representative", "Valid business contact details", "A realistic way to meet the schedule"] },
  { title: "Startups", items: ["Founder identification", "What the product is for", "Evidence of funding, income, or revenue", "Authority to commission the project"] },
  { title: "Individuals", items: ["Valid means of identification", "Evidence of income", "Clear ownership of the project"] },
];

const faqs = [
  {
    q: "Is BuildFlex a loan?",
    a: "No. We don't lend money. BuildFlex lets you pay for software we build for you in instalments instead of all at once. You only ever pay Entacrest for the development work in your agreement.",
  },
  {
    q: "Why is the BuildFlex price higher than paying outright?",
    a: "Spreading payments adds administration, collection, and risk on our side, so BuildFlex carries a small premium. Your quote shows both prices side by side, and the full amount you'll pay is fixed before you sign.",
  },
  {
    q: "How much is the deposit?",
    a: "It depends on the project's size and scope. Most projects start with a 30% deposit of the BuildFlex price. Some projects, depending on size and risk, may need a larger deposit. Your quote states the exact figure.",
  },
  {
    q: "Who pays for hosting, domains, and other services?",
    a: "You do, separately from the development fee and not spread over instalments. We list every resource your project needs, what it costs, and when it's due in your quote. Where possible, accounts are opened in your name.",
  },
  {
    q: "Can I use my platform before I finish paying?",
    a: "Yes. Once it's deployed, you get full operational use: your team and customers can use it as normal. The source code, server credentials, and final handover follow once the schedule is complete.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Talk to us. We send reminders before each due date and, if something goes wrong, we'll work out a reasonable catch-up plan with you. We never delete your data or publicly name customers.",
  },
  {
    q: "Which projects qualify?",
    a: "Every service we offer is eligible, from business websites to enterprise software. Approval depends on the project's scope and cost and on your ability to keep to the schedule. It isn't automatic.",
  },
];

const BuildFlexPage = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState(1_000_000);
  const [months, setMonths] = useState(6);

  const plan = plans.find((p) => p.months === months) ?? plans[plans.length - 1];
  const premium = Math.round(budget * plan.premium);
  const flexPrice = budget + premium;
  const deposit = Math.round(flexPrice * DEPOSIT_RATE);
  const monthly = Math.round((flexPrice - deposit) / plan.months);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ink-950 grid-pattern w-full overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "75%" }} />
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-200">
              <span className="w-1.5 h-1.5 rounded-full bg-flare-400 inline-block" />
              Entacrest BuildFlex
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.08]">
              Build now. <span className="brand-gradient-text">Pay small small.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-8 max-w-xl">
              Get the website, mobile app, or custom software your business needs without paying the full cost upfront. Start with an agreed deposit, launch your platform, and spread the remaining development cost over an approved period.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                title="Apply for BuildFlex"
                onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
                className="w-auto px-7 py-3.5"
              />
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition">
                See how it works <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-400">
              {["All our services eligible", "Pay over 3 to 6 months", "Use your platform while you pay"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-300" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Payment schedule mock */}
          <div className="glass-card rounded-3xl p-6 w-full max-w-sm mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-1">
              <p className="text-white font-semibold text-sm">Online store · BuildFlex plan</p>
              <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
              </span>
            </div>
            <p className="text-slate-400 text-xs mb-5">Launched in month 2 · Example</p>
            <div className="space-y-3">
              {scheduleMock.map(({ label, note, done }) => (
                <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  {done ? (
                    <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                  ) : (
                    <CircleDashed size={18} className="text-flare-400 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-slate-400 text-xs">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/10">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Paid so far</span>
                <span>3 of 7 payments</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[57%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two ways to pay */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Your choice</p>
          <h2 className="heading-text font-bold text-ink-900">Two ways to pay for the same great build</h2>
          <p className="text-slate-500 mt-4 leading-7">
            Every Entacrest project comes with both options. Same team, same quality, same delivery. Only the payment schedule changes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 md:p-10">
            <div className="w-12 h-12 rounded-2xl bg-ink-900 flex items-center justify-center mb-6">
              <Wallet size={22} className="text-brand-300" />
            </div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">Option A</p>
            <h3 className="text-2xl font-bold text-ink-900 mb-3">Outright payment</h3>
            <p className="text-slate-500 leading-7 mb-6">Pay the standard project price according to the usual project milestones. This is the lowest total cost.</p>
            <ul className="space-y-2.5">
              {["Standard project price", "Paid per the agreed project terms", "Full handover at delivery"].map((it) => (
                <li key={it} className="flex gap-2.5 text-slate-600 text-sm">
                  <CheckCircle2 size={17} className="text-brand-600 shrink-0 mt-0.5" /> {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-ink-800 bg-ink-950 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "90%" }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center">
                  <CalendarClock size={22} className="text-brand-300" />
                </div>
                <span className="bg-flare-400/15 border border-flare-400/30 text-flare-400 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  BuildFlex
                </span>
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">Option B</p>
              <h3 className="text-2xl font-bold text-white mb-3">Deposit + monthly instalments</h3>
              <p className="text-slate-400 leading-7 mb-6">Start with an agreed deposit and spread the rest of the development cost over 3 to 6 months, for a small, clearly stated premium.</p>
              <ul className="space-y-2.5">
                {["BuildFlex price shown next to the standard price", "Full amount fixed before you sign", "Use your platform from launch day", "Handover on your final instalment"].map((it) => (
                  <li key={it} className="flex gap-2.5 text-slate-300 text-sm">
                    <CheckCircle2 size={17} className="text-brand-300 shrink-0 mt-0.5" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">See the numbers</p>
            <h2 className="text-white font-bold heading-text mb-5">What could your plan look like?</h2>
            <p className="text-slate-400 leading-8 mb-8">
              Pick a development budget and a payment period to see an example plan. Your actual quote sets the final price, premium, and deposit for your project.
            </p>

            <p className="text-white text-sm font-semibold mb-3">Development budget (standard price)</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {budgetPresets.map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition cursor-pointer ${
                    budget === b ? "bg-brand-500 border-brand-500 text-white" : "border-white/15 text-slate-300 hover:border-brand-300/50"
                  }`}
                >
                  {naira(b)}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={300_000}
              max={10_000_000}
              step={50_000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              aria-label="Development budget"
              className="w-full accent-brand-500 mb-8"
            />

            <p className="text-white text-sm font-semibold mb-3">Payment period</p>
            <div className="flex flex-wrap gap-2">
              {plans.map((p) => (
                <button
                  key={p.months}
                  onClick={() => setMonths(p.months)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition cursor-pointer ${
                    months === p.months ? "bg-brand-500 border-brand-500 text-white" : "border-white/15 text-slate-300 hover:border-brand-300/50"
                  }`}
                >
                  {p.months} months
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-6">
              <p className="text-slate-400 text-sm">Monthly instalment</p>
              <p className="text-white text-3xl md:text-4xl font-bold">
                {naira(monthly)}
                <span className="text-slate-400 text-base font-medium"> × {plan.months}</span>
              </p>
            </div>
            <dl className="space-y-3 text-sm">
              {[
                ["Standard price", naira(budget)],
                [`BuildFlex premium (${Math.round(plan.premium * 100)}%)`, naira(premium)],
                ["BuildFlex price", naira(flexPrice)],
                [`Deposit (${Math.round(DEPOSIT_RATE * 100)}%)`, naira(deposit)],
                ["Balance spread over instalments", naira(flexPrice - deposit)],
              ].map(([k, v], i) => (
                <div key={k} className={`flex justify-between gap-4 ${i === 2 ? "pt-3 border-t border-white/10 font-semibold text-white" : "text-slate-300"}`}>
                  <dt>{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="text-slate-500 text-xs leading-5 mt-6 pt-5 border-t border-white/10">
              Example only, not an offer. Rates, deposits, and approval depend on the project and your application. Project resources such as hosting and domains are quoted and paid separately.
            </p>
          </div>
        </div>
      </section>

      {/* What you pay for */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">No hidden costs</p>
          <h2 className="heading-text font-bold text-ink-900">Exactly what you pay for, and when</h2>
          <p className="text-slate-500 mt-4 leading-7">
            Your quote separates our development fee from the third-party services your project runs on, so you always know where your money goes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-mist-200 p-7">
            <HandCoins size={24} className="text-brand-600 mb-5" />
            <h3 className="font-bold text-ink-900 text-lg mb-2">Development fee</h3>
            <p className="text-slate-500 text-sm leading-6 mb-4">Design, engineering, testing, and deployment by our team.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Spread with BuildFlex</p>
          </div>
          <div className="rounded-3xl border border-mist-200 p-7">
            <Sparkles size={24} className="text-brand-600 mb-5" />
            <h3 className="font-bold text-ink-900 text-lg mb-2">BuildFlex premium</h3>
            <p className="text-slate-500 text-sm leading-6 mb-4">A small, fixed percentage for paying over time. It's shown in your quote before you agree to anything.</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Included in your instalments</p>
          </div>
          <div className="rounded-3xl border border-ink-800 bg-ink-950 p-7">
            <Cloud size={24} className="text-brand-300 mb-5" />
            <h3 className="font-bold text-white text-lg mb-2">Project resources</h3>
            <p className="text-slate-400 text-sm leading-6 mb-4">Third-party services your platform needs to run. Funded by you, at cost, and set up in your name wherever possible.</p>
            <div className="flex flex-wrap gap-2">
              {resources.map((r) => (
                <span key={r} className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-mist-50 border-y border-mist-200 px-5 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">How it works</p>
            <h2 className="heading-text font-bold text-ink-900">From idea to handover in six steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl border border-mist-200 bg-white p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-ink-900 flex items-center justify-center">
                    <Icon size={20} className="text-brand-300" />
                  </div>
                  <span className="text-brand-600/40 font-bold text-2xl">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access & handover */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">Access &amp; ownership</p>
            <h2 className="text-white font-bold heading-text">Your business runs from launch day</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Rocket, title: "During development", items: ["Regular progress updates", "You fund the agreed project resources", "Scope changes quoted separately"] },
              { icon: Globe, title: "From launch", items: ["Full operational use of your platform", "Your team and customers use it as normal", "Monthly instalments continue as agreed"] },
              { icon: KeyRound, title: "After your final payment", items: ["Source code handed over, where agreed", "Admin and server credentials transferred", "Documentation and remaining deliverables"] },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass-card rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-brand-300" />
                </div>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-slate-400 leading-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-flare-400 mt-2.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-brand-300/20 bg-brand-500/10 p-6 flex gap-4 items-start">
            <ShieldCheck size={22} className="text-brand-300 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm leading-6">
              <span className="text-white font-semibold">Our promise:</span> your data is yours. We never delete customer data or switch off a business&apos;s essential operations as a way to collect payment. Everything about access, ownership, and handover is written into your signed agreement.
            </p>
          </div>
        </div>
      </section>

      {/* What you can build */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What you can build</p>
            <h2 className="heading-text font-bold text-ink-900">Every Entacrest service qualifies</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">Each project is assessed on its scope, cost, and timeline. Approval isn&apos;t automatic.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ slug, title, examples }) => (
            <div key={slug} className="rounded-2xl border border-mist-200 bg-mist-50 p-5">
              <p className="font-semibold text-ink-900 text-sm mb-2">{title}</p>
              <p className="text-slate-500 text-xs leading-5">{examples.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-mist-200 bg-mist-50 px-5 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Who it&apos;s for</p>
            <h2 className="heading-text font-bold text-ink-900">For businesses that would rather keep cash working</h2>
            <p className="text-slate-500 mt-4 leading-7">
              BuildFlex isn&apos;t only for tight budgets. Plenty of growing businesses choose it to keep cash free for stock, staff, and marketing while their platform gets built.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {audiences.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-mist-200 bg-white p-5">
                <Icon size={22} className="text-brand-600 mb-4" />
                <p className="font-bold text-ink-900 mb-1.5">{title}</p>
                <p className="text-slate-500 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Eligibility</p>
            <h2 className="heading-text font-bold text-ink-900 mb-5">What we&apos;ll ask for</h2>
            <p className="text-slate-500 leading-8">
              A short review keeps BuildFlex fair and sustainable for everyone. We only ask for what we need to confirm who you are and that the schedule works for you, and we protect what you share.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {eligibility.map(({ title, items }) => (
              <div key={title} className="rounded-2xl border border-mist-200 p-5">
                <p className="font-bold text-ink-900 text-sm mb-3">{title}</p>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2 text-slate-500 text-sm leading-6">
                      <CheckCircle2 size={15} className="text-brand-600 shrink-0 mt-1" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist-50 border-y border-mist-200 px-5 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Questions</p>
            <h2 className="heading-text font-bold text-ink-900">Frequently asked</h2>
          </div>
          <div className="divide-y divide-mist-200 border-y border-mist-200">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-ink-900">
                  {q}
                  <span className="text-brand-600 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-slate-500 leading-7 mt-3 pr-8">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="relative bg-ink-950 grid-pattern overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "25%" }} />
        <div className="relative max-w-7xl mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">Apply for BuildFlex</p>
            <h2 className="heading-text font-bold text-white mb-6">Your business deserves a digital solution. Your budget shouldn&apos;t stop you.</h2>
            <p className="text-slate-300 leading-8 text-lg mb-10 max-w-md">
              Tell us what you want to build. We&apos;ll scope it, send both quotes, and walk you through the plan before you commit to anything.
            </p>
            <div className="space-y-4">
              {["Free scoping and two quotes", "A clear yes or no on your application","A signed agreement with your full payment schedule"].map((t) => (
                <p key={t} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-300 shrink-0" /> {t}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-semibold text-sm transition cursor-pointer"
              >
                Prefer to pay outright? Start a project <ArrowRight size={16} />
              </button>
              <a
                href="mailto:info@entacrest.com?subject=BuildFlex%20enquiry"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition"
              >
                info@entacrest.com <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <BuildFlexForm />
        </div>
      </section>
    </main>
  );
};

export default BuildFlexPage;
