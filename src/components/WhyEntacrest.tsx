import Image from "next/image";
import { whyEntacrest } from "./data";

const WhyEntacrest = () => {
  return (
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
              <h2 className="text-xl font-bold text-text-primary">{heading}</h2>
              <p className=" ">{text}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default WhyEntacrest;
