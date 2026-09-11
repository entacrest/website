import Button from "@/components/Button";
import { platforms } from "@/components/data";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Landmark, LayoutGrid } from "lucide-react";

const icons = [Landmark, LayoutGrid];

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-ink-950 grid-pattern w-full py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "20%" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Entacrest Platforms
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Two products, one infrastructure philosophy
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            Synchgate and EBS are Entacrest's own infrastructure — built and operated by the same team that builds regulated software for our clients. If we're confident enough to run our business on it, we're confident enough to build yours on it.
          </p>
        </div>
      </section>

      {/* Platform sections */}
      {platforms.map((platform, i) => {
        const Icon = icons[i];
        const dark = i % 2 === 0;
        return (
          <section key={platform.slug} className={dark ? "bg-ink-950 px-5 py-20 md:py-28" : "px-5 py-20 md:py-28"}>
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 ${dark ? "" : ""}`}>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${dark ? "bg-brand-500/15 border-brand-300/25" : "bg-ink-900 border-ink-900"}`}>
                    <Icon size={26} className={dark ? "text-brand-300" : "text-brand-600"} />
                  </div>
                  <div>
                    <h2 className={`font-bold text-3xl md:text-4xl leading-tight ${dark ? "text-white" : "text-ink-900"}`}>{platform.name}</h2>
                    <p className={`text-sm mt-1 tracking-wide ${dark ? "text-slate-400" : "text-slate-500"}`}>{platform.tag} · {platform.tagline}</p>
                  </div>
                </div>
                <Button
                  title={`Visit ${platform.name}`}
                  variant={dark ? "primary" : "dark"}
                  onClick={() => window.open(platform.url, "_blank")}
                  className="w-auto px-6 py-3 shrink-0"
                />
              </div>

              <p className={`text-lg leading-8 max-w-3xl mb-10 ${dark ? "text-slate-300" : "text-slate-500"}`}>
                {platform.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {platform.features.map(({ title, desc }) => (
                  <div
                    key={title}
                    className={`p-6 rounded-2xl border transition-shadow ${
                      dark
                        ? "border-white/10 bg-white/[0.03]"
                        : "border-mist-200 bg-mist-50"
                    }`}
                  >
                    <h3 className={`font-bold mb-2 ${dark ? "text-white" : "text-ink-900"}`}>{title}</h3>
                    <p className={`text-sm leading-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Built by Entacrest trust note */}
      <section className="bg-mist-50 border-y border-mist-200 px-5 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Built by Entacrest</p>
          <h2 className="heading-text font-bold text-ink-900 mb-5">
            The same infrastructure discipline, in everything we build
          </h2>
          <p className="text-slate-500 leading-8 mb-8 max-w-2xl mx-auto">
            Synchgate and EBS aren&apos;t side projects — they&apos;re proof of how we build. When you hire Entacrest for a custom platform, you get the same governance, security, and long-term ownership that runs our own products.
          </p>
          <Button
            title="Learn About Entacrest"
            variant="dark"
            onClick={() => navigate("/about")}
            className="w-auto py-3 px-6 mx-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink-950 py-20 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "50%" }} />
        <div className="relative">
          <h2 className="text-white font-bold heading-text mb-4">Need something built for your business?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-8">
            If it involves payments, compliance, or regulated infrastructure, talk to the team that builds this for a living.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              title="Contact Us"
              onClick={() => navigate("/contact")}
              className="w-auto px-10 py-4"
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

export default ProductPage;
