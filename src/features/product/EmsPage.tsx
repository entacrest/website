import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileClock,
  HandCoins,
  KeyRound,
  LayoutDashboard,
  MessageSquareText,
  Monitor,
  Network,
  PencilLine,
  PiggyBank,
  Repeat,
  ShieldCheck,
  Smartphone,
  UserCog,
  Users,
  WifiOff,
} from "lucide-react";
import Button from "@/components/Button";

type Showcase = {
  id: string;
  label: string;
  icon: typeof LayoutDashboard;
  title: string;
  desc: string;
  points: string[];
  image: string;
  phone?: boolean;
};

const showcase: Showcase[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "The whole business on one screen",
    desc: "The MD sees today's collections, cash to count, loan portfolio, portfolio at risk, and branch performance the moment they sign in. Branch managers see the same for their branch.",
    points: ["Collections against target, by branch", "Portfolio at risk (PAR 1, 7, 30)", "Switch between branches in one click"],
    image: "/images/ems/dashboard.webp",
  },
  {
    id: "counter",
    label: "Counter",
    icon: Banknote,
    title: "Deposits and withdrawals at the counter",
    desc: "Cashiers post walk-in deposits and withdrawals by cash or transfer. Withdrawal charges are calculated and shown before posting, and customers get an SMS receipt.",
    points: ["Percentage or flat withdrawal charges, with a cap", "Large withdrawals wait for approval", "Accounts can never go below zero"],
    image: "/images/ems/counter.webp",
  },
  {
    id: "transfers",
    label: "Transfers",
    icon: Repeat,
    title: "Transfers between accounts and customers",
    desc: "Move money between a customer's own accounts, or to another customer, with name enquiry before sending. Paying into a loan is recorded as a repayment.",
    points: ["Both legs linked and reversed together", "Large transfers go through approval", "Frozen and closed accounts are blocked"],
    image: "/images/ems/transfer.webp",
  },
  {
    id: "loans",
    label: "Loans",
    icon: HandCoins,
    title: "Loans from application to last repayment",
    desc: "Configure loan products your way, then track every loan with its schedule, arrears, penalties, and history.",
    points: ["Monthly or overall (flat) interest", "Processing fee: percentage, flat, or none", "Daily late fees, extensions, top-ups, and BNPL"],
    image: "/images/ems/loan.webp",
  },
  {
    id: "field",
    label: "Field app",
    icon: Smartphone,
    title: "Collections in the market, even offline",
    desc: "Account officers open the field app on their phone with a PIN, see who to visit by area, and record collections. No network? It keeps working and syncs later.",
    points: ["Daily route grouped by market area", "Offline-first with automatic sync", "End-of-day submission for cash count"],
    image: "/images/ems/field-today.webp",
    phone: true,
  },
  {
    id: "remittance",
    label: "Remittance",
    icon: ClipboardCheck,
    title: "Count every officer's cash, every day",
    desc: "The accountant sees what each officer should hand in, counts the cash, and EMS records any shortage or excess against the officer.",
    points: ["Expected cash vs counted cash", "Variance tracked per officer", "Transfers listed but not counted as cash"],
    image: "/images/ems/remittance.webp",
  },
  {
    id: "approvals",
    label: "Approvals",
    icon: BadgeCheck,
    title: "Maker-checker on everything sensitive",
    desc: "New customers, loans, extensions, large withdrawals and transfers, reversals, and closures wait for a second person. Nobody approves their own request.",
    points: ["One queue for every pending request", "Reasons recorded with every decision", "Nothing moves until it's approved"],
    image: "/images/ems/approvals.webp",
  },
  {
    id: "corrections",
    label: "Corrections",
    icon: PencilLine,
    title: "Fix mistakes without breaking the books",
    desc: "Senior staff can correct a posted transaction's amount, date, or payment method. Every balance after it is restated, and the change and reason are kept forever.",
    points: ["Only the MD, GM, and branch managers can edit", "Full change history on the transaction", "Reversals refund linked charges"],
    image: "/images/ems/edit.webp",
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    title: "Reports that answer real questions",
    desc: "Staff and branch performance, income, loan portfolio, defaulters, overdue loans, dormant accounts, and statements, exported to PDF or CSV.",
    points: ["Filter by date, branch, and officer", "Income includes fees, penalties, and charges", "Printable statements of account"],
    image: "/images/ems/reports.webp",
  },
  {
    id: "staff",
    label: "Staff & roles",
    icon: UserCog,
    title: "Roles and permissions per person",
    desc: "When the MD adds a staff member, they choose exactly what that person can do, within what their role allows. Temporary passwords expire in 72 hours.",
    points: ["MD, GM, branch manager, accountant, cashier, officer, admin", "Permissions ticked per staff member", "Every sign-in protected by an SMS code"],
    image: "/images/ems/staff.webp",
  },
];

const modules = [
  {
    icon: Users,
    title: "Customers & KYC",
    items: ["Customer profiles with ID, photo, and next of kin", "Registration approval", "Guarantors and collateral records"],
  },
  {
    icon: PiggyBank,
    title: "Savings & thrift",
    items: ["Savings and target savings accounts", "Daily, weekly, and monthly thrift plans", "Cycles, commission, early-withdrawal rules, and payouts"],
  },
  {
    icon: HandCoins,
    title: "Lending",
    items: ["Loan products with flexible interest and fees", "Repayment schedules on your working days", "Penalties, extensions, top-ups, and BNPL"],
  },
  {
    icon: Banknote,
    title: "Operations",
    items: ["Counter postings, transfers, and charges", "Field collections with offline sync", "Daily remittance and cash variance"],
  },
  {
    icon: ShieldCheck,
    title: "Control",
    items: ["Maker-checker approvals and limits", "Reversals and audited corrections", "Tamper-evident audit log"],
  },
  {
    icon: BarChart3,
    title: "Insight",
    items: ["Live dashboard with PAR", "12+ management reports", "PDF and CSV exports"],
  },
  {
    icon: Building2,
    title: "Multi-branch",
    items: ["Headquarters plus branches", "Branch codes in every account number", "Collection areas per branch"],
  },
  {
    icon: MessageSquareText,
    title: "SMS",
    items: ["Receipts for every deposit and collection", "Sign-in codes for staff", "Editable message templates"],
  },
];

const EMS_URL = "https://ems.entacrest.com";
const SIGNUP_URL = `${EMS_URL}/signup`;

const deployments = [
  {
    icon: Monitor,
    title: "Back office in the browser",
    tag: "Every desk",
    desc: "The MD, managers, accountants and cashiers use EMS in any web browser at ems.entacrest.com. Nothing to install.",
  },
  {
    icon: Smartphone,
    title: "Field app on phones",
    tag: "Every officer",
    desc: "Account officers install the field app on an Android phone and collect in the market, even without network.",
  },
  {
    icon: Network,
    title: "Head office and branches",
    tag: "Every branch",
    desc: "All your branches work on the same books. Head office sees everything; each branch sees its own.",
  },
];

const security = [
  { icon: KeyRound, title: "Two-step sign-in", desc: "Password plus a one-time code sent to each staff member's email. Field officers unlock with a PIN." },
  { icon: UserCog, title: "Least privilege", desc: "Each person gets only the permissions their job needs, set by the MD." },
  { icon: BadgeCheck, title: "Four-eyes approvals", desc: "Sensitive actions need a second person. Nobody can approve their own request." },
  { icon: FileClock, title: "Complete audit trail", desc: "Every sign-in, posting, approval, edit, and settings change is recorded." },
  { icon: WifiOff, title: "Works offline", desc: "Field collections are kept safely on the phone until the network returns." },
  { icon: ShieldCheck, title: "Your data, kept apart", desc: "Each business's records are kept separate from every other business. Only your own staff can see them." },
];

const steps = [
  { step: "01", title: "Start your free trial", desc: "Sign up at ems.entacrest.com in minutes. You become the managing director of your business in EMS." },
  { step: "02", title: "Set up your business", desc: "Add your branches, staff, thrift plans and loan products. Each person signs in with their own account." },
  { step: "03", title: "Choose a plan", desc: "Pick the plan that fits your branches and staff, and pay monthly by card, bank transfer or USSD." },
  { step: "04", title: "Go live", desc: "Register customers and send officers out. We're on hand to help you set up and train your staff." },
];

const faqs = [
  {
    q: "Is EMS a subscription?",
    a: "Yes. EMS runs online at ems.entacrest.com, so there's nothing to install or maintain. You pay monthly, or for several months at once, and can change plan at any time.",
  },
  {
    q: "Who is EMS for?",
    a: "Microfinance banks, cooperatives, thrift (ajo/esusu) societies, and lenders who collect daily or weekly from customers in markets and communities.",
  },
  {
    q: "How is it priced?",
    a: "By plan: each plan covers a number of branches and staff. Every plan starts with a 14-day free trial, and you can see current prices on the EMS website.",
  },
  {
    q: "Can we use it across several branches?",
    a: "Yes. Every branch works on the same data. Head office sees and compares them all, and branch staff see their own branch.",
  },
  {
    q: "What happens when there's no internet in the field?",
    a: "Officers keep collecting. Entries are saved on the phone and sent automatically when the network comes back.",
  },
  {
    q: "Can we try it before paying?",
    a: "Yes. Every plan starts with a 14-day free trial, with no card needed. If you don't continue, nothing is charged.",
  },
];

const EmsPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(showcase[0].id);
  const current = showcase.find((s) => s.id === active) ?? showcase[0];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ink-950 grid-pattern w-full overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "70%" }} />
        <div className="relative max-w-7xl mx-auto px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition mb-10">
            <ArrowLeft size={16} /> All platforms
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-200">
                <span className="w-1.5 h-1.5 rounded-full bg-flare-400 inline-block" />
                Subscription · Web &amp; field app
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1]">
                EMS: core banking for microfinance, cooperatives &amp; thrift
              </h1>
              <p className="text-slate-300 text-lg leading-8 max-w-xl">
                Entacrest MFB Solution runs your whole operation, from the market to the MD&apos;s desk. It covers customers, savings, thrift, loans, field collections, approvals, and reports, online, so every branch and officer works on the same books.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button title="Start free trial" onClick={() => window.location.assign(SIGNUP_URL)} className="w-auto px-7 py-3.5" />
                <a
                  href={EMS_URL}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition"
                >
                  Visit EMS <ArrowUpRight size={16} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition"
                >
                  Explore the features <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-brand-600/10">
              <div className="flex gap-1.5 px-2 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <img
                src="/images/ems/dashboard.webp"
                alt="EMS dashboard showing collections, loan portfolio and branch performance"
                width={1600}
                height={1012}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-mist-200 px-5 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest shrink-0">Built for</p>
          <div className="flex flex-wrap gap-3">
            {["Microfinance banks", "Cooperative societies", "Thrift (ajo/esusu) societies", "Daily-collection lenders", "Multi-branch operators"].map((t) => (
              <span key={t} className="text-sm font-medium text-ink-800 bg-mist-50 border border-mist-200 px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature showcase */}
      <section id="features" className="max-w-7xl mx-auto px-5 py-20 md:py-28 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Inside EMS</p>
          <h2 className="heading-text font-bold text-ink-900">Every part of the day, covered</h2>
        </div>

        <div role="tablist" aria-label="EMS features" className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
          {showcase.map(({ id, label, icon: Icon }) => {
            const selected = id === active;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={selected}
                aria-controls="ems-feature-panel"
                onClick={() => setActive(id)}
                className={`inline-flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition cursor-pointer ${
                  selected
                    ? "bg-ink-900 border-ink-900 text-white"
                    : "bg-white border-mist-200 text-slate-500 hover:text-ink-900 hover:border-slate-300"
                }`}
              >
                <Icon size={16} className={selected ? "text-brand-300" : ""} />
                {label}
              </button>
            );
          })}
        </div>

        <div id="ems-feature-panel" role="tabpanel" className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center rounded-3xl border border-mist-200 bg-mist-50 p-6 md:p-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4 leading-tight">{current.title}</h3>
            <p className="text-slate-500 leading-7 mb-6">{current.desc}</p>
            <ul className="space-y-3">
              {current.points.map((p) => (
                <li key={p} className="flex gap-3 items-start text-ink-800 text-sm font-medium">
                  <CheckCircle2 size={18} className="text-brand-600 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className={current.phone ? "flex justify-center" : ""}>
            <img
              key={current.image}
              src={current.image}
              alt={`EMS ${current.label.toLowerCase()} screen`}
              loading="lazy"
              className={`h-auto rounded-2xl border border-mist-200 shadow-xl shadow-ink-900/10 bg-white ${
                current.phone ? "w-full max-w-[300px]" : "w-full"
              }`}
            />
          </div>
        </div>
      </section>

      {/* All modules */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">Everything included</p>
            <h2 className="text-white font-bold heading-text">One system instead of ledgers, spreadsheets, and WhatsApp</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass-card rounded-2xl p-6">
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
        </div>
      </section>

      {/* Deployment */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Hosted for you</p>
            <h2 className="heading-text font-bold text-ink-900 mb-5">Nothing to install, nothing to maintain</h2>
            <p className="text-slate-500 leading-8 mb-6">
              EMS runs online, looked after by Entacrest. Start with one office and grow to many branches without changing systems; your staff just sign in.
            </p>
            <div className="rounded-2xl border border-mist-200 bg-mist-50 p-5">
              <p className="font-semibold text-ink-900 text-sm mb-1.5">Pricing</p>
              <p className="text-slate-500 text-sm leading-6">
                A monthly subscription, with plans by the number of branches and staff. Every plan starts with a 14-day free trial.{" "}
                <a href={`${EMS_URL}/#pricing`} className="text-brand-600 font-semibold hover:underline">
                  See current prices
                </a>
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {deployments.map(({ icon: Icon, title, tag, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl border border-mist-200 p-6">
                <div className="w-12 h-12 rounded-2xl bg-ink-900 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-brand-300" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-ink-900">{title}</h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600 bg-brand-200/40 px-2.5 py-0.5 rounded-full">{tag}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-mist-50 border-y border-mist-200 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Control &amp; security</p>
            <h2 className="heading-text font-bold text-ink-900">Built for the way money goes missing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {security.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-mist-200 bg-white">
                <Icon size={22} className="text-brand-600 mb-4" />
                <h3 className="font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-sm leading-6 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">Getting started</p>
            <h2 className="text-white font-bold heading-text">From first call to first collection</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="glass-card rounded-2xl p-6">
                <p className="brand-gradient-text text-3xl font-bold mb-4">{step}</p>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 py-20 md:py-28">
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
      </section>

      {/* CTA */}
      <section className="relative bg-ink-950 py-20 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "50%" }} />
        <div className="relative">
          <h2 className="text-white font-bold heading-text mb-4">Start running EMS today</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-8">
            Try it free for 14 days, or book a demo and we&apos;ll walk you through EMS set up like your institution: your branches, thrift plans, and loan products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button title="Start free trial" onClick={() => window.location.assign(SIGNUP_URL)} className="w-auto px-10 py-4" />
            <Button title="Request a Demo" onClick={() => navigate("/book?source=ems")} className="w-auto px-10 py-4" />
            <a
              href="mailto:info@entacrest.com?subject=EMS%20demo%20request"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition"
            >
              info@entacrest.com <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmsPage;
