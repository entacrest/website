import WhyEntacrest from "@/components/WhyEntacrest";

const AboutPage = () => {
  return (
    <main>
      <section className="md:bg-[url('/images/about.jfif')] bg-[url('/images/resp-about.jfif')] backgroundImage w-full h-[600px] flex justify-center items-center md:h-[700px] relative">
        <div className="absolute inset-0 bg-black/40" />

        <div className="max-w-5xl relative">
          <h2 className="mt-6 text-white text-center text-3xl font-medium md:text-[56px] leading-[90px] md:font-bold">
            About us
          </h2>
          <p className="text-center leading-8 text-white px-2">
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
      <WhyEntacrest />
    </main>
  );
};

export default AboutPage;
