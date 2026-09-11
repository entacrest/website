import { whyEntacrest } from "./data";
import { motion } from "motion/react";

const WhyEntacrest = () => {
  return (
    <section className="bg-mist-50 p-6 py-20 md:py-28">
      <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3 text-center">Why Entacrest</p>
      <h2 className="text-ink-900 text-center font-bold heading-text">
        Built by people who've done the hard part
      </h2>
      <p className="text-slate-500 text-center mt-4 max-w-xl mx-auto">
        The principles behind Synchgate, EBS, and every client platform we build.
      </p>
      <article className="mx-auto max-w-6xl mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="px-6 py-8 bg-ink-950 border border-white/10 mx-auto w-full max-w-3xs rounded-3xl"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-300/25 flex items-center justify-center mb-5">
                <img src={icon} alt={heading} width={22} height={22} className="brightness-0 invert opacity-80" />
              </div>
              <h2 className="text-lg font-bold text-white">
                {heading}
              </h2>
              <p className="text-slate-400 mt-2 text-sm leading-6">{text}</p>
            </motion.div>
          );
        })}
      </article>
    </section>
  );
};

export default WhyEntacrest;
