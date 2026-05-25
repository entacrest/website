"use client";
import Button from "@/components/Button";
import { trustedPartners } from "@/components/data";
import WhyEntacrest from "@/components/WhyEntacrest";
import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Homepage = () => {
  const router = useRouter();
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[600px] md:h-[700px]">
        <Image
          src="/images/hero.webp"
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <article className="relative max-w-7xl mx-auto z-10 h-full flex flex-col justify-center">
          <div className="p-6 space-y-5 text-white w-full md:max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
              Parent company of SynchGate
            </div>
            <h2 className="text-4xl font-medium md:text-[62px] md:leading-[78px] md:font-bold">
              The Company Behind Transformative Financial Technology
            </h2>
            <p className="leading-8 md:text-lg text-white/80">
              Entacrest builds and scales next-generation financial infrastructure products — starting with SynchGate, our flagship payment gateway.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:px-0 px-0">
              <Button
                title="Explore SynchGate"
                onClick={() => router.push("/products")}
                className="max-w-2xs py-4"
              />
              <Link
                href="/about"
                className="text-white/80 hover:text-white text-sm font-medium underline underline-offset-4 transition"
              >
                About Entacrest →
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Parent company intro */}
      <section className="max-w-7xl mx-auto flex-col md:flex-row gap-6 flex justify-between items-center px-5 py-20">
        <div className="basis-1/2 w-full max-w-[570px]">
          <Image
            src="/images/unsplash_products.jpg"
            alt="Entacrest — building financial infrastructure"
            width={570}
            height={570}
            className="size-full object-cover rounded-3xl shadow-sm h-[400px]"
          />
        </div>
        <article className="basis-[45%]">
          <p className="text-button-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Who we are
          </p>
          <h2 className="heading-text font-bold">
            More Than a Company — A Platform for Progress
          </h2>
          <p className="paragraph-text mt-6 text-gray-600">
            Like Meta to Facebook or Alphabet to Google, Entacrest is the
            registered parent organisation that incubates, builds, and scales
            high-impact financial technology products. We own and operate
            SynchGate, our flagship payment gateway, and continue building
            the infrastructure that powers modern commerce.
          </p>
        </article>
      </section>

      {/* SynchGate Product Spotlight */}
      <section className="bg-button-blue px-5 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/50 font-semibold text-sm uppercase tracking-widest mb-4 text-center">
            Our Products
          </p>
          <h2 className="text-white text-center font-bold heading-text mb-14">
            What We Build
          </h2>

          {/* SynchGate Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 py-8 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7aaeff" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl md:text-4xl leading-tight">
                    SynchGate
                  </h3>
                  <p className="text-white/40 text-sm mt-1 tracking-wide">
                    Payment Gateway Platform · by Entacrest
                  </p>
                </div>
              </div>
              <span className="bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                Flagship Product
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-10 px-8 py-10">
              <div>
                <p className="text-white/65 text-lg leading-8 mb-6">
                  SynchGate is a robust, developer-friendly payment orchestration platform that enables businesses to connect to multiple payment gateways from one interface to accept, process, and disburse payments with speed and confidence — locally and across borders.
                </p>
                <p className="text-white/65 leading-7 mb-8">
                  Built on Entacrest&apos;s core infrastructure, SynchGate handles the complexity of financial transactions so businesses can focus on growth.
                </p>
                <Button
                  title="Learn More About SynchGate →"
                  onClick={() => router.push("/products")}
                  className="py-3 px-6"
                />
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Multi-channel payments", desc: "Cards, bank transfers, mobile money and more — in one unified API." },
                  { title: "Real-time settlement", desc: "Instant fund disbursement and reconciliation at any scale." },
                  { title: "Enterprise security", desc: "PCI-compliant infrastructure with end-to-end encryption." },
                  { title: "Developer-first API", desc: "Clean REST APIs, webhooks, and SDKs with full documentation." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3 items-start bg-white/4 border border-white/8 rounded-2xl p-4">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building & Scaling */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-end max-w-7xl mx-auto px-5 py-20 gap-6">
        <article className="md:basis-[46%] w-full md:max-w-lg">
          <h2 className="heading-text font-bold">
            Building, Scaling, and Innovating
          </h2>
          <p className="paragraph-text mt-5 text-gray-600">
            At Entacrest, we don&apos;t just build software — we build for the future. We conceptualize, develop, and scale our own financial technology products from the ground up, ensuring sustainable growth and industry-leading experiences. Every product in our ecosystem is designed to be scalable, secure, and intuitively easy to use.
          </p>
        </article>
        <article className="md:w-1/2 grid grid-cols-2 gap-6">
          <Image src="/images/pos.svg" alt="" width={270} height={270} className="size-full" />
          <Image src="/images/scan_pay.svg" alt="" width={270} height={270} className="size-full" />
          <div className="col-span-2 flex justify-center">
            <Image src="/images/him.svg" alt="" width={150} height={150} />
          </div>
          <Image src="/images/money_man.svg" alt="" width={270} height={270} className="size-full" />
          <Image src="/images/money_lady.svg" alt="" width={270} height={270} className="size-full" />
        </article>
      </section>

      {/* Why Entacrest */}
      <WhyEntacrest />

      {/* Trusted Partners */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <h2 className="!text-center heading-text mb-16 font-bold">Trusted Partners</h2>
        <div className="overflow-hidden w-full">
          <motion.article
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...trustedPartners, ...trustedPartners].map(({ icon, className }, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-[211px] border border-[#eee9e980] bg-white shadow-lg h-28 shrink-0"
              >
                <Image src={icon} width={100} height={100} className={className} alt="Partner Logo" />
              </div>
            ))}
          </motion.article>
        </div>
      </section>

      {/* Expert Support */}
      <section className="p-10 py-[100px] bg-button-blue">
        <article className="flex items-center flex-col md:flex-row gap-10 justify-center mx-auto max-w-7xl">
          <div>
            <Image src="/images/support.svg" alt="Support" width={563} height={563} />
          </div>
          <article className="basis-[45%] text-white">
            <h2 className="heading-text font-bold">
              Dedicated Support Across All Our Products
            </h2>
            <p className="paragraph-text mt-6">
              We provide dedicated support across our entire ecosystem of financial applications. Whether you need assistance with SynchGate, have integration questions, or general inquiries, our expert team is always ready to assist with fast, accurate, and reliable support.
            </p>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Homepage;
