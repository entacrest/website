"use client";
import Button from "@/components/Button";
import { trustedPartners } from "@/components/data";
import WhyEntacrest from "@/components/WhyEntacrest";
import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
const Homepage = () => {
  const router = useRouter();
  return (
    <main>
      {/* hero */}

      <section className="relative w-full h-[600px] md:h-[700px]">
        <Image
          src="/images/hero.webp"
          alt="Hero background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/50" />
        <article className="relative max-w-7xl mx-auto z-10 h-full flex flex-col justify-center">
          <div className="p-6 space-y-5 text-white w-full md:max-w-2xl">
            <h2 className="text-4xl font-medium md:text-[66px] md:leading-[90px] md:font-bold">
              Building the Next Generation of Consumer Software Products
            </h2>
            <p className="leading-8 md:text-lg">
              We provide technology solutions for diverse industries and initiatives.            </p>
            <div className="flex items-center md:justify-start md:px-0 justify-center px-6">
              <Button
                title="Get Started"
                onClick={() => router.push("/contact")}
                className=" max-w-2xs py-4"
              />
            </div>
          </div>
        </article>
      </section>
      {/* Products Portfolio Image */}
      <section className="max-w-7xl mx-auto flex-col md:flex-row gap-6 flex justify-between items-center px-5 py-20">
        <div className="basis-1/2 w-full max-w-[570px]">
          <Image
            src="/images/unsplash_products.jpg"
            alt="Portfolio Products"
            width={570}
            height={570}
            className="size-full object-cover rounded-3xl shadow-sm h-[400px]"
          />
        </div>
        <article className="basis-[45%]">
          <h2 className="heading-text font-bold ">
            A Portfolio of Innovative Consumer Products
          </h2>
          <p className="paragraph-text mt-6">
            We build and own a diverse range of software solutions designed to solve real-world problems and deliver exceptional experiences across various industries.
          </p>
        </article>
      </section>
      {/*
        // MOCK PRODUCTS SECTION (Uncomment when products are ready)
        <section className="max-w-7xl mx-auto px-5 py-20">
          <h2 className="heading-text font-bold text-center mb-12">Our Products</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 border border-[#c5e0ff] rounded-3xl shadow-sm bg-white hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 rounded-2xl mb-6"></div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary">Product Name {item}</h3>
                <p className="text-gray-600">A brief description of this amazing consumer product and the problems it solves for everyday users.</p>
                <div className="mt-6 flex justify-end">
                  <Button title="Learn More" className="py-2 px-6" />
                </div>
              </div>
            ))}
          </div>
        </section>
      */}
      {/* smart Tech  */}
      <section className="flex flex-col-reverse md:flex-row  justify-between items-end-safe max-w-7xl mx-auto px-5 py-20 gap-6 ">
        <article className="md:basis-[46%] w-full md:max-w-lg">
          <h2 className="heading-text font-bold">
            Building, Scaling, and Innovating
          </h2>
          <p className="paragraph-text mt-5">
            At Entacrest, we don't just build software—we build for the future. We conceptualize, develop, and scale our own consumer products, from fintech to lifestyle applications, ensuring sustainable growth and industry-leading user experiences. Every product in our ecosystem is designed to be scalable, secure, and intuitively easy to use, redefining what's possible for everyday consumers.
          </p>
        </article>
        <article className="md:w-1/2 grid grid-cols-2 gap-6">
          <Image
            src="/images/pos.svg"
            alt=""
            width={270}
            height={270}
            className="size-full"
          />
          <Image
            src="/images/scan_pay.svg"
            alt=""
            width={270}
            height={270}
            className="size-full"
          />

          <div className="col-span-2 flex justify-center">
            <Image src="/images/him.svg" alt="" width={150} height={150} />
          </div>

          <Image
            src="/images/money_man.svg"
            alt=""
            width={270}
            height={270}
            className="size-full"
          />
          <Image
            src="/images/money_lady.svg"
            alt=""
            width={270}
            height={270}
            className="size-full"
          />
        </article>
      </section>
      {/* why entacrest  */}
      <WhyEntacrest />

      {/* Trusted partners */}
      <section className="py-16 px-5  max-w-7xl mx-auto ">
        <h2 className="!text-center heading-text mb-16 font-bold">
          Trusted Partners
        </h2>
        <div className="overflow-hidden w-full">
          <motion.article
            className="flex gap-10 w-max "
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...trustedPartners, ...trustedPartners].map(
              ({ icon, className }, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center w-[211px] border border-[#eee9e980] bg-white shadow-lg  h-28 shrink-0"
                >
                  <Image
                    src={icon}
                    width={100}
                    height={100}
                    className={className}
                    alt="Partner Logo"
                  />
                </div>
              )
            )}
          </motion.article>
        </div>
      </section>
      {/* expert support  */}
      <section className="p-10 py-[100px] bg-button-blue ">
        <article className="flex items-center flex-col md:flex-row gap-10 justify-center mx-auto max-w-7xl">
          <div>
            <Image
              src="/images/support.svg"
              alt="Support"
              width={563}
              height={563}
            />
          </div>
          <article className="basis-[45%] text-white">
            <h2 className="heading-text font-bold ">
              Dedicated Support for All Our Products
            </h2>
            <p className="paragraph-text mt-6 ">
              We provide dedicated support across our entire ecosystem of consumer applications. Whether you need assistance with one of our platforms, have troubleshooting issues, or general inquiries, our expert team is always ready to assist. We pride ourselves on delivering fast, accurate, and reliable support—ensuring you get the best experience possible with any of our products.
            </p>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Homepage;
