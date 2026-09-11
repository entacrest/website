import WhyEntacrest from "@/components/WhyEntacrest";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { Building2, Landmark, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ink-950 grid-pattern w-full py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "50%" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">About Entacrest</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A fintech company that builds for itself — and for you
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            Entacrest is a fintech-focused software company. We build our own infrastructure — Synchgate and EBS — and we build custom, regulated software for other businesses and financial institutions. Not a generic dev shop. We specialize in the hard, money-moving parts most agencies avoid.
          </p>
        </div>
      </section>

      {/* Dual model */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-start">
        <article>
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Our model</p>
          <h2 className="heading-text font-bold text-ink-900 mb-6">
            One team, two ways we create value
          </h2>
          <p className="text-slate-500 leading-8 mb-5">
            On one side, we build and operate our own infrastructure — Synchgate, a payment orchestration platform, and EBS, a business operating system for African SMEs. Running our own products means we live with the consequences of our own architecture decisions, every day.
          </p>
          <p className="text-slate-500 leading-8">
            On the other side, we take that same expertise and build custom digital products for other businesses and financial institutions — payment integrations, compliance tooling, banking-adjacent platforms. It's the same team, the same standards, applied to your problem.
          </p>
        </article>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "01", label: "Build our own infrastructure", desc: "Synchgate and EBS are built, operated, and improved by our own team — not outsourced or abandoned after launch." },
            { num: "02", label: "Specialize in regulated software", desc: "Payments, compliance, banking-adjacent platforms — the parts of software that punish shortcuts." },
            { num: "03", label: "Build for other businesses", desc: "Custom platforms for consumer fintech, ICT institutions, and social-impact organisations." },
            { num: "04", label: "Stay after launch", desc: "Every product we touch gets long-term ownership, monitoring, and support — not a handoff email." },
          ].map(({ num, label, desc }) => (
            <div key={num} className="p-5 border border-mist-200 rounded-2xl bg-mist-50">
              <p className="text-brand-600 font-bold text-2xl mb-2">{num}</p>
              <h4 className="font-semibold text-ink-900 text-sm mb-1">{label}</h4>
              <p className="text-slate-500 text-xs leading-5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-ink-950 px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Specialize In</p>
          <h2 className="text-white text-center font-bold heading-text mb-14">The parts of software most agencies avoid</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Landmark, title: "Payment integrations", desc: "Connecting businesses to payment providers, orchestrating routing, and reconciling every transaction." },
              { icon: ShieldCheck, title: "Compliance tooling", desc: "Systems built to survive an audit — not just a demo — from day one." },
              { icon: Building2, title: "Banking-adjacent platforms", desc: "Virtual accounts, wallets, and financial infrastructure for institutions and the businesses that serve them." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-brand-300" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values via WhyEntacrest */}
      <WhyEntacrest />

      {/* Company info strip */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="bg-ink-950 rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Entacrest</h3>
            <p className="text-slate-400 text-sm">Fintech Software Company · Lagos, Nigeria</p>
          </div>
          <div className="flex flex-wrap gap-10 text-center">
            <div>
              <p className="text-3xl font-bold text-white">2</p>
              <p className="text-slate-400 text-sm mt-1">Owned platforms</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-slate-400 text-sm mt-1">Client platforms shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Africa</p>
              <p className="text-slate-400 text-sm mt-1">&amp; global markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 text-center">
        <Button
          title="Start a Project"
          onClick={() => navigate("/contact")}
          className="w-auto px-10 py-4 mx-auto"
        />
      </section>
    </main>
  );
};

export default AboutPage;
