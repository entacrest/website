"use client";

import Image from "next/image";
import { whyEntacrest } from "./data";
import { motion } from "motion/react";

const WhyEntacrest = () => {
  return (
    <section className="bg-button-blue p-6 py-16">
      <h2 className="text-white text-center font-bold text-4xl">
        Why Entacrest
      </h2>
      <article className="mx-auto max-w-6xl mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {whyEntacrest.map(({ icon, heading, text }, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="text-white px-5 py-10 bg-white mx-auto max-w-3xs rounded-3xl shadow"
            >
              <Image src={icon} alt={heading} width={54} height={54} />
              <h2 className="text-xl font-bold text-text-primary mt-4">
                {heading}
              </h2>
              <p className="text-text-primary mt-2">{text}</p>
            </motion.div>
          );
        })}
      </article>
    </section>
  );
};

export default WhyEntacrest;
