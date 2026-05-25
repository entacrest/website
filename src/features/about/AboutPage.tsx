import WhyEntacrest from "@/components/WhyEntacrest";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="md:bg-[url('/images/about.jfif')] bg-[url('/images/resp-about.jfif')] backgroundImage w-full h-[600px] flex justify-center items-center md:h-[700px] relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-4xl relative text-center px-4">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">
            About Entacrest
          </p>
          <h2 className="mt-2 text-white text-center font-bold heading-text">
            The Company Behind the Technology
          </h2>
          <p className="text-center paragraph-text text-white/80 px-2 mt-4 max-w-2xl mx-auto">
            Entacrest is a registered technology holding company that builds and scales
            high-impact financial software products. We are the parent organisation behind
            SynchGate — our flagship payment gateway — and future products in the financial technology space.
          </p>
        </div>
      </section>

      {/* Mission & Model */}
      <section className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-14 items-center">
        <article>
          <p className="text-button-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Our model
          </p>
          <h2 className="heading-text font-bold text-secondary-one mb-6">
            A Parent Company, Not Just a Product
          </h2>
          <p className="text-gray-600 leading-8 mb-5">
            Like Meta to Facebook or Alphabet to Google, Entacrest is the umbrella organisation
            that incubates, funds, and operates financial technology products. We provide
            long-term strategic direction, shared infrastructure, and governance for
            every product under the Entacrest name.
          </p>
          <p className="text-gray-600 leading-8">
            Our first product — SynchGate — is a payment gateway platform serving businesses
            across Nigeria and beyond. As we grow, Entacrest will continue adding
            products to its portfolio, each solving a distinct problem in the financial ecosystem.
          </p>
        </article>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "01", label: "Build foundational infrastructure", desc: "We create the underlying systems that power payment and financial products." },
            { num: "02", label: "Scale products globally", desc: "Products built with global standards, starting from Nigeria and Africa." },
            { num: "03", label: "Operate a product portfolio", desc: "SynchGate is the first. More products will follow under the Entacrest umbrella." },
            { num: "04", label: "Invest in people", desc: "Our team builds for the long term — culture, careers, and community matter." },
          ].map(({ num, label, desc }) => (
            <div key={num} className="p-5 border border-[#c5e0ff] rounded-2xl bg-white shadow-sm">
              <p className="text-button-blue font-bold text-2xl mb-2">{num}</p>
              <h4 className="font-semibold text-secondary-one text-sm mb-1">{label}</h4>
              <p className="text-gray-500 text-xs leading-5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values via WhyEntacrest */}
      <WhyEntacrest />

      {/* Company info strip */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-button-blue rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-1">Entacrest</h3>
            <p className="text-white/60 text-sm">Registered Technology Company · Lagos, Nigeria</p>
          </div>
          <div className="flex flex-wrap gap-10 text-center">
            <div>
              <p className="text-3xl font-bold">1</p>
              <p className="text-white/60 text-sm mt-1">Flagship product</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-white/60 text-sm mt-1">Uptime commitment</p>
            </div>
            <div>
              <p className="text-3xl font-bold">Africa</p>
              <p className="text-white/60 text-sm mt-1">& global markets</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
