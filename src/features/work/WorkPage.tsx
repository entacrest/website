import Button from "@/components/Button";
import { alsoBuilt, caseStudies } from "@/components/data";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const WorkPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ink-950 grid-pattern w-full py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "70%" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">Our Work</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Software for the hard, regulated parts of business
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            We're not a generic dev shop. These are platforms we've built for businesses and institutions that needed money, trust, or compliance to work correctly the first time.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28 space-y-16">
        {caseStudies.map((cs, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={cs.slug}
              className="rounded-3xl border border-mist-200 bg-mist-50 overflow-hidden"
            >
              <div className={`grid md:grid-cols-5 gap-0`}>
                <div className={`md:col-span-2 bg-ink-950 p-8 md:p-10 flex flex-col justify-between ${reverse ? "md:order-2" : ""}`}>
                  <div>
                    <div className="h-12 flex items-center mb-8">
                      <img src={cs.logo} alt={cs.name} width={150} height={48} className={cs.logoClassName ?? "h-10 w-auto object-contain"} />
                    </div>
                    <p className="text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">{cs.category}</p>
                    <p className="text-white text-lg leading-8 font-medium">{cs.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-brand-300 font-semibold text-sm mt-6 group"
                  >
                    Visit {cs.name}
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <div className={`md:col-span-3 p-8 md:p-10 ${reverse ? "md:order-1" : ""}`}>
                  <div className="mb-7">
                    <p className="text-ink-900 font-bold text-sm uppercase tracking-wider mb-2">The problem</p>
                    <p className="text-slate-600 leading-7">{cs.problem}</p>
                  </div>
                  <div className="mb-7">
                    <p className="text-ink-900 font-bold text-sm uppercase tracking-wider mb-2">What we built</p>
                    <p className="text-slate-600 leading-7">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-ink-900 font-bold text-sm uppercase tracking-wider mb-3">Outcomes</p>
                    <ul className="space-y-2.5">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-slate-600 leading-6">
                          <CheckCircle2 size={17} className="text-brand-600 shrink-0 mt-0.5" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Also built */}
      <section className="bg-mist-50 border-y border-mist-200 px-5 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Also Built</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-10">More platforms carrying our engineering</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {alsoBuilt.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white border border-mist-200 rounded-2xl px-6 py-4 hover:border-brand-400/50 transition-colors"
              >
                <img src={item.logo} alt={item.name} width={56} height={56} className={item.logoClassName ?? "size-10 object-contain"} />
                <div className="text-left">
                  <p className="font-semibold text-ink-900 text-sm">{item.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5 max-w-[220px]">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink-950 py-20 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "30%" }} />
        <div className="relative">
          <h2 className="text-white font-bold heading-text mb-4">Have a similar problem?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-8">
            Payments, compliance, or a banking-adjacent platform — let's talk about what you're building.
          </p>
          <Button
            title="Start a Project"
            onClick={() => navigate("/contact")}
            className="w-auto px-10 py-4 mx-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default WorkPage;
