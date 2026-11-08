import Button from "@/components/Button";
import { caseStudies, platforms, services, trustedPartners } from "@/components/data";
import WhyEntacrest from "@/components/WhyEntacrest";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDashed,
  Code2,
  Globe,
  HeartHandshake,
  Landmark,
  PiggyBank,
  Plug,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

const serviceIcons: Record<string, typeof Globe> = {
  websites: Globe,
  ecommerce: ShoppingBag,
  "web-apps": Code2,
  mobile: Smartphone,
  "business-systems": Boxes,
  ngo: HeartHandshake,
  enterprise: Building2,
  integrations: Plug,
};

const projectFeed = [
  { label: "Design approved", note: "Week 2", done: true },
  { label: "Store built & tested", note: "Week 6", done: true },
  { label: "Launched to customers", note: "Week 8", done: true },
  { label: "BuildFlex instalment 3 of 6", note: "Due next month", done: false },
];

const process = [
  { step: "01", title: "Discover", desc: "We dig into your business goals, your users, and your budget before writing a line of code." },
  { step: "02", title: "Build", desc: "The engineers who run our own platforms build yours — not junior devs learning on your dime." },
  { step: "03", title: "Ship", desc: "Launch with monitoring, documentation, and a rollback plan — not a demo dressed up as production." },
  { step: "04", title: "Support", desc: "We stay on after go-live. Every product we touch gets long-term ownership, not a handoff email." },
];

const Homepage = () => {
  const navigate = useNavigate();
  const synchgate = platforms[0];
  const ebs = platforms[1];
  const ems = platforms[2];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full bg-ink-950 grid-pattern overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "80%" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-200">
              <span className="w-1.5 h-1.5 rounded-full bg-flare-400 inline-block" />
              Custom software · Our own platforms · Flexible payment
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1]">
              We build the software your business runs on
            </h1>
            <p className="text-slate-300 text-lg leading-8 max-w-xl">
              Websites, online stores, mobile apps, and custom business systems for SMEs, startups, NGOs, and enterprises — built by the team behind Synchgate, EBS, and EMS. And with BuildFlex, you don&apos;t have to pay for it all upfront.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                title="Book a Free Scoping Call"
                onClick={() => navigate("/book?source=home-hero")}
                className="w-auto px-7 py-3.5"
              />
              <Button
                title="Build Now, Pay Small Small"
                variant="outline"
                onClick={() => navigate("/buildflex")}
                className="w-auto px-7 py-3.5"
              />
            </div>
          </div>

          {/* Project progress mock card */}
          <div className="relative hidden md:flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-white font-semibold text-sm">Project · Online store</p>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                </span>
              </div>
              <div className="space-y-3">
                {projectFeed.map(({ label, note, done }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-slate-400 text-xs">{note}</p>
                    </div>
                    {done ? (
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    ) : (
                      <CircleDashed size={16} className="text-flare-400 shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                <p className="text-slate-400 text-xs">Payment plan</p>
                <p className="text-white text-sm font-semibold">BuildFlex · 6 months</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three ways we create value */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What we do</p>
          <h2 className="heading-text font-bold text-ink-900">One team. Three ways we help you grow.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-ink-800 bg-ink-950 p-8 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center mb-6">
              <Code2 size={22} className="text-brand-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Software we build for you</h3>
            <p className="text-slate-400 leading-7 mb-6 flex-1">
              Websites, e-commerce, web and mobile apps, and business systems, built around how your organisation actually works. We&apos;ve done it for consumer fintech, ICT institutions, and social-impact platforms alike.
            </p>
            <Link to="/work" className="inline-flex items-center gap-2 text-brand-300 font-semibold text-sm group">
              See our work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-ink-900 flex items-center justify-center mb-6">
              <ShieldCheck size={22} className="text-brand-300" />
            </div>
            <h3 className="text-xl font-bold text-ink-900 mb-3">Platforms we own</h3>
            <p className="text-slate-500 leading-7 mb-6 flex-1">
              Synchgate for payments, EBS for SMEs, and EMS for microfinance and cooperatives — built, operated, and improved by our team every day. Proof we build for the long haul.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 text-ink-900 font-semibold text-sm group">
              Explore our platforms
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-ink-900 flex items-center justify-center mb-6">
              <CalendarClock size={22} className="text-flare-400" />
            </div>
            <h3 className="text-xl font-bold text-ink-900 mb-3">A flexible way to pay</h3>
            <p className="text-slate-500 leading-7 mb-6 flex-1">
              With Entacrest BuildFlex, eligible clients pay a deposit, launch their platform, and spread the remaining development cost over an agreed period.
            </p>
            <Link to="/buildflex" className="inline-flex items-center gap-2 text-ink-900 font-semibold text-sm group">
              How BuildFlex works
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist-50 border-y border-mist-200 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What we build</p>
              <h2 className="heading-text font-bold text-ink-900">From your first website to enterprise software</h2>
            </div>
            <Link to="/book?source=home-services" className="inline-flex items-center gap-2 text-ink-900 font-semibold text-sm shrink-0 group">
              Book a free scoping call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ slug, title, desc, examples }) => {
              const Icon = serviceIcons[slug] ?? Globe;
              return (
                <div key={slug} className="rounded-2xl border border-mist-200 bg-white p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-ink-900 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-brand-300" />
                  </div>
                  <h3 className="font-bold text-ink-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-6 flex-1">{desc}</p>
                  <p className="text-slate-400 text-xs mt-4">{examples.join(" · ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BuildFlex Spotlight */}
      <section className="px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto rounded-3xl bg-ink-950 grid-pattern relative overflow-hidden">
          <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "15%" }} />
          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center p-8 md:p-12">
            <div>
              <span className="inline-block bg-flare-400/15 border border-flare-400/30 text-flare-400 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Entacrest BuildFlex
              </span>
              <h2 className="text-white font-bold heading-text mb-5">
                Build now. <span className="brand-gradient-text">Pay small small.</span>
              </h2>
              <p className="text-slate-300 leading-8 mb-8 max-w-xl">
                Don&apos;t put off your website, app, or business system because of the upfront cost. Pay an agreed deposit, use your platform from launch day, and spread the rest of the development cost over 3 to 6 months. Your quote shows both prices side by side, and nothing is hidden.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button title="Explore BuildFlex" onClick={() => navigate("/buildflex")} className="w-auto py-3 px-6" />
                <Link to="/buildflex#apply" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition">
                  Apply now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Deposit", v: "Pay to start", d: "Agreed per project" },
                { k: "Launch", v: "Use it live", d: "Full operational access" },
                { k: "Instalments", v: "3 – 6 months", d: "Fixed monthly amount" },
                { k: "Handover", v: "It's all yours", d: "On your final payment" },
              ].map(({ k, v, d }) => (
                <div key={k} className="glass-card rounded-2xl p-5">
                  <p className="text-brand-300/80 text-xs font-semibold uppercase tracking-wider mb-2">{k}</p>
                  <p className="text-white font-bold mb-1">{v}</p>
                  <p className="text-slate-400 text-xs">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Synchgate Spotlight */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-4 text-center">Our Platforms</p>
          <h2 className="text-white text-center font-bold heading-text mb-14">What We Build For Ourselves</h2>

          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 py-8 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center">
                  <Landmark size={26} className="text-brand-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl md:text-4xl leading-tight">{synchgate.name}</h3>
                  <p className="text-slate-400 text-sm mt-1 tracking-wide">{synchgate.tagline} · by Entacrest</p>
                </div>
              </div>
              <span className="bg-brand-500/15 border border-brand-300/25 text-brand-200 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                Flagship Platform
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-10 px-8 py-10">
              <div>
                <p className="text-slate-300 text-lg leading-8 mb-6">{synchgate.description}</p>
                <Button
                  title="Visit Synchgate"
                  onClick={() => window.open(synchgate.url, "_blank")}
                  className="w-auto py-3 px-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                {synchgate.features.slice(0, 4).map(({ title, desc }) => (
                  <div key={title} className="flex gap-3 items-start bg-white/[0.03] border border-white/8 rounded-2xl p-4">
                    <span className="w-2 h-2 rounded-full bg-flare-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EBS Spotlight */}
      <section className="px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Platforms</p>
            <h2 className="heading-text font-bold text-ink-900 mb-5">{ebs.name} — {ebs.tagline}</h2>
            <p className="text-slate-500 leading-8 mb-8">{ebs.description}</p>
            <Button
              title="Visit EBS"
              variant="dark"
              onClick={() => window.open(ebs.url, "_blank")}
              className="w-auto py-3 px-6"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ebs.features.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-mist-200 bg-mist-50 p-5">
                <p className="font-semibold text-ink-900 text-sm mb-1.5">{title}</p>
                <p className="text-slate-500 text-xs leading-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMS Spotlight */}
      <section className="px-5 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto rounded-3xl bg-ink-950 grid-pattern relative overflow-hidden">
          <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "85%" }} />
          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center p-8 md:p-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center">
                  <PiggyBank size={22} className="text-brand-300" />
                </div>
                <span className="bg-brand-500/15 border border-brand-300/25 text-brand-200 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {ems.availability}
                </span>
              </div>
              <h2 className="text-white font-bold heading-text mb-5">{ems.name}: {ems.tag.toLowerCase()}</h2>
              <p className="text-slate-300 leading-8 mb-8">{ems.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  title="Explore EMS"
                  onClick={() => navigate(ems.path!)}
                  className="w-auto py-3 px-6"
                />
                <a
                  href="https://ems.entacrest.com/signup"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition"
                >
                  Start free trial →
                </a>
              </div>
            </div>
            <img
              src="/images/ems/dashboard.webp"
              alt="EMS dashboard"
              loading="lazy"
              width={1600}
              height={1012}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl shadow-brand-600/10"
            />
          </div>
        </div>
      </section>

      {/* Client work teaser */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="text-white font-bold heading-text">Built for businesses, institutions, and causes</h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-brand-300 font-semibold text-sm shrink-0 group">
              See all work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to="/work"
                className="glass-card rounded-3xl p-6 flex flex-col hover:border-brand-300/30 transition-colors group"
              >
                <div className="h-12 flex items-center mb-6">
                  <img src={cs.logo} alt={cs.name} width={140} height={48} className={cs.logoClassName ?? "h-10 w-auto object-contain"} />
                </div>
                <p className="text-brand-300/70 text-xs font-semibold uppercase tracking-wider mb-2">{cs.category}</p>
                <p className="text-slate-300 text-sm leading-6 flex-1">{cs.summary}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Entacrest */}
      <WhyEntacrest />

      {/* Process */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3 text-center">How We Work</p>
          <h2 className="text-white text-center font-bold heading-text mb-14">From first call to long-term support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-brand-300 font-bold text-2xl mb-3">{step}</p>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 px-5 max-w-7xl mx-auto">
        <h2 className="!text-center heading-text mb-14 font-bold text-ink-900">Businesses We've Built For</h2>
        <div className="overflow-hidden w-full">
          <motion.article
            className="flex gap-10 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            {[...trustedPartners, ...trustedPartners].map(({ icon, className }, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-[211px] border border-mist-200 bg-white shadow-sm h-28 shrink-0 rounded-2xl px-6"
              >
                <img src={icon} width={130} height={100} className={className} alt="Client logo" />
              </div>
            ))}
          </motion.article>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 py-20 md:py-28 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "50%" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-white font-bold heading-text mb-5">
            Have a project your business needs built?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-8">
            A website, a mobile app, a business system, or a payment integration — let&apos;s talk about it. Ask about BuildFlex if you&apos;d rather pay over time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              title="Book a Free Scoping Call"
              onClick={() => navigate("/book?source=home-footer-cta")}
              className="w-auto px-8 py-4"
            />
            <a
              href="mailto:info@entacrest.com"
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

export default Homepage;
