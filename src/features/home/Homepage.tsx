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
        <div className="absolute inset-0 bg-black/30" />
        <article className="relative pt-10 md:pt-0 max-w-7xl mx-auto z-10">
          <div className="p-6  space-y-5 text-white w-full md:max-w-2xl">
            <h2 className="mt-6 text-3xl font-medium md:text-[56px] md:leading-[90px] md:font-bold">
              Innovative Software Solutions for Seamless Connectivity
            </h2>
            <p className="leading-8 md:text-lg">
              Empowering businesses with cutting-edge technology to streamline
              operations, enhance efficieny, and drive digital transformation.
              Our software solutions connect enterprises, entrepreneurs, and
              organizations with scalable tools for automation, security, and
              growth
            </p>
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
      {/* Undraw  */}
      <section className="max-w-7xl mx-auto flex-col md:flex-row gap-6 flex justify-between items-center  px-5 py-20">
        <div className="basis-1/2 max-w-[570px]">
          <Image
            src="/images/undraw_pay.svg"
            alt="Support"
            width={563}
            height={563}
            className="size-full"
          />
        </div>
        <article className="basis-[45%]">
          <h2 className="heading-text font-bold ">
            Custom Payment Solutions for Businesses
          </h2>
          <p className="paragraph-text mt-6">
            We develop secure, scalable payment solutions tailored for
            merchants, marketplaces, and enterprises, ensuring seamless
            integration and smooth transactions.
          </p>
        </article>
      </section>
      {/* smart Tech  */}
      <section className="flex flex-col-reverse md:flex-row  justify-between items-end-safe max-w-7xl mx-auto px-5 py-20 gap-6 ">
        <article className="md:basis-[46%] w-full md:max-w-lg">
          <h2 className="heading-text font-bold">
            Smart Technology to Power Your Business
          </h2>
          <p className="paragraph-text mt-5">
            Break free from limitations and embrace endless possibilities. At
            Entacrest Nexus, we build custom software solutions that empower
            businesses to operate efficiently. Whether you need an enterprise
            application, a fintech solution, an automation system, or a digital
            platform tailored to your industry, we develop scalable, secure, and
            user-friendly systems designed to meet your unique needs. Let us
            help you transform your business with technology that works
            seamlessly for you and your customers.
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
              Expert Support at Your Fingertips
            </h2>
            <p className="paragraph-text mt-6 ">
              At Entacrest, we provide dedicated support to help your business
              succeed. Whether you need assistance with software integration,
              troubleshooting, or optimizing your digital processes, our expert
              team is always ready to assist. We pride ourselves on delivering
              fast, accurate, and reliable support—ensuring you get the best
              experience possible. Have a question? We’re just a call or message
              away.
            </p>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Homepage;
