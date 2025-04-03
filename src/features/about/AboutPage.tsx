import { whyEntacrest } from "@/components/data";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main>
      <section className="about-hero w-full h-[600px] flex justify-center items-center md:h-[700px] bg-black/60">
        <div className="max-w-5xl">
          <h2 className="mt-6 text-white text-center text-3xl font-medium md:text-[56px] leading-[90px] md:font-bold">
            About us
          </h2>
          <p className="text-center leading-8 text-white">
            At Entacrest Nexus, we specialize in delivering cutting-edge
            software solutions that streamline business operations and enhance
            efficiency across industries. With a proven track record of success,
            we develop tailored applications for revenue management, payroll
            automation, administrative processes, government services, and more.
            Our goal is to empower businesses with innovative technology that
            simplifies complex workflows and drives growth.
          </p>
        </div>
      </section>

      {/* why entacrest  */}
      <section className="bg-button-blue p-6 py-16">
        <h2 className="text-white text-center font-bold text-4xl">
          Why Entacrest
        </h2>
        <article className="mt-10 flex items-center gap-4 justify-center">
          {whyEntacrest.map(({ icon, heading, text }, i) => {
            return (
              <div
                key={i}
                className="bg-white max-w-3xs p-3 py-5 space-y-4 rounded-3xl "
              >
                <Image src={icon} alt={heading} width={54} height={54} />
                <h2 className="text-xl font-bold text-text-primary">
                  {heading}
                </h2>
                <p className=" ">{text}</p>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
