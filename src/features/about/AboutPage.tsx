import WhyEntacrest from "@/components/WhyEntacrest";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { Building2, Globe, Landmark, Smartphone } from "lucide-react";

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
            A technology company that builds for itself — and for you
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            Entacrest builds websites, mobile apps, and custom software for businesses, NGOs, and institutions, and runs its own platforms: Synchgate, EBS, and EMS. Through BuildFlex, we also make that software easier to afford, so cost isn&apos;t the reason a business stays offline.
          </p>
        </div>
      </section>

      {/* Dual model */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-start">
        <article>
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Our model</p>
          <h2 className="heading-text font-bold text-ink-900 mb-6">
            One team, three ways we create value
          </h2>
          <p className="text-slate-500 leading-8 mb-5">
            First, we build custom digital solutions for businesses of every size: websites, online stores, web and mobile apps, business management systems, and enterprise software. We&apos;ve built for consumer fintech, ICT institutions, and social-impact organisations.
          </p>
          <p className="text-slate-500 leading-8 mb-5">
            Second, we build and operate our own platforms: Synchgate for payment orchestration, EBS for running African SMEs, and EMS for microfinance banks, cooperatives, and thrift societies. Running our own products means we live with our architecture decisions every day, and that discipline goes into every client project.
          </p>
          <p className="text-slate-500 leading-8">
            Third, we make good software easier to afford. With Entacrest BuildFlex, eligible clients pay a deposit, launch their platform, and spread the rest of the development cost over an agreed period, so digital transformation doesn&apos;t wait on one big payment.
          </p>
        </article>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "01", label: "Build for other businesses", desc: "Websites, apps, and custom systems for SMEs, startups, NGOs, and established companies." },
            { num: "02", label: "Run our own platforms", desc: "Synchgate, EBS, and EMS are built, operated, and improved by our own team — not outsourced or abandoned after launch." },
            { num: "03", label: "Make it affordable", desc: "BuildFlex lets eligible clients build now and pay small small, with every cost clear upfront." },
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
          <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Build</p>
          <h2 className="text-white text-center font-bold heading-text mb-14">Digital solutions for every stage of growth</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Websites & e-commerce", desc: "Business websites and online stores that win customers' trust and take payments properly." },
              { icon: Smartphone, title: "Web & mobile apps", desc: "Portals, SaaS products, MVPs, and Android and iOS apps built around your users." },
              { icon: Building2, title: "Business & enterprise systems", desc: "Inventory, school, HR, and workflow systems that replace spreadsheets and paperwork." },
              { icon: Landmark, title: "Payments & integrations", desc: "Payment gateways, wallets, and third-party APIs, by the team behind Synchgate." },
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
            <p className="text-slate-400 text-sm">Software &amp; Technology Company · Lagos, Nigeria</p>
          </div>
          <div className="flex flex-wrap gap-10 text-center">
            <div>
              <p className="text-3xl font-bold text-white">3</p>
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
