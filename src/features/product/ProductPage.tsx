"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: "/icons/security-safe.svg",
    title: "Multi-channel Payments",
    desc: "Accept cards, bank transfers, USSD, and mobile money — all through a single unified API integration.",
  },
  {
    icon: "/icons/recovery-convert.svg",
    title: "Real-time Settlement",
    desc: "Instant fund disbursement and automated reconciliation so your business cash flow is never interrupted.",
  },
  {
    icon: "/icons/airdrop.svg",
    title: "Developer-first API",
    desc: "Clean REST APIs, comprehensive webhooks, SDKs, and sandbox environments for rapid integration.",
  },
  {
    icon: "/icons/like.svg",
    title: "Enterprise Security",
    desc: "PCI-DSS compliant infrastructure with end-to-end encryption and real-time fraud detection.",
  },
];

const ProductPage = () => {
  const router = useRouter();
  return (
    <main>
      {/* Hero */}
      <section className="bg-button-blue w-full min-h-[600px] md:min-h-[700px] px-6 py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">
            Entacrest · Flagship Product
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="text-white md:basis-1/2 max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                SynchGate
              </h1>
              <p className="text-xl md:text-2xl md:leading-10 mb-4 text-white/80 font-medium">
                The Payment Gateway Built for Modern Business
              </p>
              <p className="text-white/65 leading-8 mb-8 text-lg">
                SynchGate enables businesses of all sizes to accept, process, and disburse payments with speed, security, and confidence — locally and across borders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  title="Get Started"
                  onClick={() => router.push("/contact")}
                  className="py-4 px-8"
                />
                <span className="inline-flex items-center gap-2 bg-green-button text-white px-5 py-3 rounded font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-200 inline-block"></span>
                  Live & Active
                </span>
              </div>
            </div>
            <div className="w-full md:basis-1/2 flex justify-center">
              <Image
                src="/images/undraw_pay.svg"
                alt="SynchGate payment platform"
                width={460}
                height={460}
                className="w-full h-auto object-contain max-w-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SynchGate */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-button-blue font-semibold text-sm uppercase tracking-widest mb-3">About SynchGate</p>
          <h2 className="heading-text font-bold text-secondary-one mb-6">
            Payments Infrastructure You Can Trust
          </h2>
          <p className="paragraph-text text-gray-600">
            Built and operated by Entacrest, SynchGate is designed from the ground up for the demands of modern fintech — reliable, secure, and developer-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border border-[#c5e0ff] rounded-3xl shadow-sm bg-white hover:shadow-lg transition-shadow"
            >
              <Image src={icon} alt={title} width={48} height={48} className="mb-4" />
              <h3 className="text-lg font-bold text-secondary-one mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Entacrest parent company note */}
      <section className="bg-[#f6f8ff] border-y border-[#c5e0ff] px-5 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:basis-1/2">
            <Image
              src="/images/portfolio_products.png"
              alt="Entacrest portfolio"
              width={520}
              height={360}
              className="rounded-2xl w-full object-cover h-[280px]"
            />
          </div>
          <article className="md:basis-1/2">
            <p className="text-button-blue font-semibold text-sm uppercase tracking-widest mb-3">
              Part of Entacrest
            </p>
            <h2 className="heading-text font-bold text-secondary-one mb-4">
              SynchGate is an Entacrest Product
            </h2>
            <p className="text-gray-600 leading-8 mb-6">
              Entacrest is the registered parent company behind SynchGate. Like Meta is to Facebook, Entacrest provides the infrastructure, governance, and long-term vision that powers SynchGate and future products in our portfolio.
            </p>
            <Button
              title="Learn About Entacrest"
              onClick={() => router.push("/about")}
              className="py-3 px-6"
            />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-button-blue py-20 px-5 text-center">
        <h2 className="text-white font-bold heading-text mb-4">Ready to integrate SynchGate?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-8">
          Get in touch with our team to start accepting payments with SynchGate today.
        </p>
        <Button
          title="Contact Us"
          onClick={() => router.push("/contact")}
          className="py-4 px-10 mx-auto"
        />
      </section>
    </main>
  );
};

export default ProductPage;
